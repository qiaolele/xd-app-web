import Vue from "vue";
// import iView from "iview";
// import "iview/dist/styles/iview.css"; // 使用 CSS
import "animate.css";
// import "./assets/css/font.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { post, get } from "./libs/axios";
import Util from "./libs/util";
import VueDND from "awe-dnd"; //拖拽排序插件
import VueScroller from "vue-scroller";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import md5 from "js-md5";
import JsEncrypt from "jsencrypt";
import EXIF from "exif-js"; //读取图像的原始数据的功能
// import lottie from 'vue-lottie'
import VueClipboard from "vue-clipboard2"; //复制粘贴
import VuePreview from "vue-preview"; //移动端图片预览的组件 v-viewer
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999,
    toolbar: false,
    button: false,
    navbar: false,
  },
});
Vue.use(VuePreview);
// Vue.use(iView);
Vue.use(VueClipboard);
Vue.use(VueScroller);
Vue.use(VueDND);
Vue.use(VueAwesomeSwiper);

// import Vconsole from "vconsole";
// let vConsole = new Vconsole();
// Vue.use(vConsole);

// Vue.use(lottie)
Vue.config.productionTip = false; //阻止启动生产消息

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.util = Util;
Vue.prototype.$md5 = md5;
Vue.prototype.$jsEncrypt = JsEncrypt;
Vue.prototype.EXIF = EXIF;
// 每次保持在头部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
router.onError((err) => {
  // alert(JSON.stringify(err))
  // alert(JSON.stringify(err).indexOf('Loading chunk')>-1)
  // alert(err.indexOf('Loading chunk')>-1)
  const targetPath = router.history.pending.fullPath;
  if (
    JSON.stringify(err).indexOf("Loading chunk") > -1 ||
    err.indexOf("Loading chunk") > -1
  ) {
    router.replace(targetPath);
  }
});
/* eslint-disable */
import {
  ShareSheet,
  Toast,
  Swipe,
  SwipeItem,
  List,
  Cell,
  Tab,
  Tabs,
  PullRefresh,
  Row,
  Col,
  Collapse,
  CollapseItem,
  DropdownMenu,
  DropdownItem,
  Overlay,
  NoticeBar,
  Popup,
  Loading,
  CountDown,
} from "vant";
Vue.use(ShareSheet)
  .use(Toast)
  .use(Swipe)
  .use(SwipeItem)
  .use(Cell)
  .use(Tab)
  .use(Tabs)
  .use(PullRefresh)
  .use(List)
  .use(Row)
  .use(Col)
  .use(Collapse)
  .use(CollapseItem)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Overlay)
  .use(NoticeBar)
  .use(Popup)
  .use(Loading)
  .use(CountDown);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
