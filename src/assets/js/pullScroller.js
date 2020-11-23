
'use strict';

function getWindowHeight() {
    // screen.height 为屏幕视窗高度
    return document.documentElement.clientHeight;
}

// https://github.com/jquery/jquery/blob/2d4f53416e5f74fa98e0c1d66b6f3c285a12f0ce/src/dimensions.js 

// line 31 - 41
function getDocumentHight(argument) {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        // document.body.clientHeight 对这里存在异议，暂时使用 jquery 方案
        document.documentElement.clientHeight
    );
}

// http://www.genshuixue.com/i-cxy/p/7683723 

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

export default (callback, autoexec) => {
    let currentPage = 0;

    if (autoexec) {
        callback(currentPage, () => {});
    }
    /**
     * 分页上锁
     * 分页接口请求发出前判断锁状态
     *     发出前上锁，回调后解锁
     *     防止同一个请求发出多次
     * @type {Boolean}
     */
    let lock = false;
    /**
     * 监听滚动
     * 使用 window.addEventListener('scroll', () => {});
     *     而不是 onscroll = () => {};
     *     模块内事件仅对自己负责，防止事件回调覆盖
     * @Author   Bolt
     * @DateTime 2017-02-16T11:35:26+0800
     * @param    {[type]}                 'scroll' [description]
     * @param    {Function}               ()       [description]
     * @return   {[type]}                          [description]
     */
    window.addEventListener('scroll', () => {
        // 没有上锁
        if (!lock) {
            // 浏览器窗口可视高度
            let windowHeight = getWindowHeight();
            // 文档高度
            let documentHeight = getDocumentHight();
            // 滚动条总高度
            let scrollHeight = documentHeight - windowHeight;
            // windows.scrollY 滚动条垂直滚动高度
            let scrollTop = getScrollTop();
            // 如果当前页码数小于总页码数，且滚动条距离底部小于一个屏幕
            if (scrollHeight - scrollTop < windowHeight) {
                // 根据短连接ID + 页码数获取车辆
                // 网络请求发出前，执行上锁
                lock = true;
                // 下一页页码
                let nextPage = currentPage + 1;
                callback(nextPage, () => {
                    lock = false;
                    currentPage = nextPage;
                });
            }
        }
    });
}
