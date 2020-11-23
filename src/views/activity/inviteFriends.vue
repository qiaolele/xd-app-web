<style scoped>
.invite {
  background: #ffd8be;
  font-family: PingFangSC-Regular, PingFang SC;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
}
.invite_img {
  width: 100%;
}
.invite_img img {
  width: 100%;
}
.step {
  width: 90%;
  margin-left: 5%;
  /* height: 2.61rem; */
  background: #ffffff;
  box-shadow: 0 0 0.08rem 0 rgba(244, 57, 47, 0.14);
  border-radius: 0.1rem;
  margin-top: -38%;
  position: relative;
  padding-bottom: 0.2rem;
}
.step_title {
  width: 52%;
  position: absolute;
  left: 24%;
  top: -3%;
  /* margin-left: 24%;
  margin-top: -5%; */
}
.step_icon {
  width: 82%;
  margin-left: 9%;
  margin-top: 0.48rem;
}
.step_tips {
  font-size: 12px;
  font-weight: 400;
  color: #2f2f2f;
  line-height: 0.24rem;
  margin: 0.18rem 0.09rem 0 0.15rem;
}
.step_color {
  color: #f02921;
}

.list {
  width: 90%;
  margin-left: 5%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.08 0 rgba(244, 57, 47, 0.14);
  border-radius: 0.1rem;
  margin-top: 0.26rem;
  position: relative;
}
.list_title {
  width: 52%;
  position: absolute;
  left: 24%;
  top: -2%;
}
.invite_info {
  width: 100%;
  height: 1.2rem;
  background: rgba(255, 243, 243, 1);
  border-radius: 0.1rem 0.1rem 0 0;
  padding: 0 0.15rem;
  display: flex;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.4rem;
  width: 33%;
}
.info_line {
  width: 0.01rem;
  height: 0.4rem;
  background: #fdd6d4;
  margin-top: 0.5rem;
}
.invite_top {
  color: #f02921;
  font-size: 0.34rem;
  font-weight: bold;
  font-family: DINAlternate-Bold, DINAlternate;
}
.info_company {
  font-size: 0.14rem;
  font-weight: 400;
  margin-left: 0.02rem;
}
.invite_bot {
  color: #2f2f2f;
  font-size: 0.12rem;
}
.no_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4rem 0;
}
.no_data img {
  width: 36%;
}
.no_data p {
  font-size: 0.16rem;
  color: #999999;
}
.invite_list {
  padding: 0.05rem 0.1rem;
  /* display: none; */
}
.invite_person {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0;
  border-bottom: 0.01rem solid #f8f8f8;
  margin-top: 0.03rem;
}
.invite_person:last-child {
  border-bottom: none;
}
.list_left {
  display: flex;
  align-items: center;
}
.list_icon {
  width: 0.06rem;
  height: 0.08rem;
}
.list_phone {
  margin-left: 0.02rem;
  font-size: 0.14rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2f2f2f;
  display: inline-block;
  /* width: 0.85rem; */
}
.list_status {
  display: inline-block;
  padding: 0.01rem 0.03rem;
  transform: scale(0.8);
  font-size: 0.12rem;
  font-weight: 400;
  border-radius: 0.02rem;
  background: #fff4f4;
  color: #f02921;
}
.list_status_other {
  color: #ff8a1d;
  background: #fff3e9;
}
.list_state {
  font-size: 0.12rem;
  color: #aaaaaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0.48rem;
}
.list_time {
  font-size: 0.12rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #aaaaaa;
}
.more {
  padding-bottom: 0.2rem;
  text-align: center;
}
.show_more {
  color: #f02921;
  font-size: 0.14rem;
  margin-right: 0.06rem;
}
.rules {
  padding: 0.15rem 0.2rem 0.9rem;
}
.rules img {
  width: 52%;
  margin-left: 24%;
}
.rules_tip {
  font-size: 0.12rem;
  color: rgba(47, 47, 47, 1);
  line-height: 0.22rem;
}
/* btn */
.invite_btns {
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  height: 0.8rem;
  position: fixed;
  bottom: 0;
  display: flex;
  /* align-items: center; */
  /* display: none; */
}
.share_btn {
  height: 0.5rem;
  border-radius: 0.28rem;
  font-size: 0.18rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.5rem;
  text-align: center;
  margin-top: 0.1rem;
}
.share_link {
  width: 35%;
  background: linear-gradient(
    323deg,
    rgba(249, 136, 69, 1) 0%,
    rgba(255, 171, 103, 1) 100%
  );
  margin-left: 0.15rem;
}
.share_pic {
  width: 55%;
  background: linear-gradient(
    180deg,
    rgba(249, 83, 69, 1) 0%,
    rgba(240, 41, 33, 1) 100%
  );
  margin-left: 0.08rem;
}

/* 弹窗 */
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
}
.wrap_bot {
  width: 100%;
  height: 1.7rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.1rem 0.1rem 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
}
.wrap_bot_min {
  height: 1.3rem;
}
.wrap_title {
  text-align: center;
  font-size: 0.18rem;
  color: #2f2f2f;
  font-weight: 500;
  margin-top: 0.15rem;
}
.wrap_title_min {
  margin-top: 0.05rem;
}
.wrap_dis {
  margin-top: 0.15rem;
  display: flex;
  justify-content: space-around;
}
.share_way {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.share_img {
  width: 0.5rem;
}
.share_way span {
  font-size: 0.14rem;
  font-weight: 400;
  color: #2f2f2f;
  margin-top: 0.04rem;
}
.bg_box {
  width: 78.67%;
  position: fixed;
  left: 10.7%;
  bottom: 2.4rem;
}
.bg_box_min {
  bottom: 1.4rem;
}
#posterHtml {
  /* width: 78.67%; */
  height: 3.8rem;
  border-radius: 3%;
}
.bg_img {
  width: 100%;
  height: 100%;
  border-radius: 3%;
}
.new_ma {
  width: 21.4%;
  height: 17%;
  position: absolute;
  left: 72%;
  top: 72.5%;
}
.add_new_ma {
  left: 73%;
  top: 73.3%;
}
#ma {
  width: 0.65rem;
  height: 0.65rem;
  position: fixed;
  bottom: 0;
}
</style>
<template>
  <div class="invite">
    <div class="invite_img">
      <img src="@/assets/img/inviteImg.png"
           alt="" />
    </div>
    <div class="step">
      <img class="step_title"
           src="@/assets/img/invite_title1.png"
           alt="" />
      <img class="step_icon"
           src="@/assets/img/invite_title_icon.png"
           alt="" />
      <div class="step_tips">
        1. 被邀请的好友需在<span class="step_color">7天内完成认证</span>，方可计入奖励结算，奖励结算按好友的认证时间计算。<br />
        2. 邀请的金币<span class="step_color">奖励按阶梯逐增</span>，次周清空重新累计。<br />
        3. 邀请<span class="step_color">指定城市</span>(苏州、深圳、杭州、郑州、广州、无锡、天津、北京、昆明、长沙、上海、东莞、宁波、南京、武汉)的好友，可<span class="step_color">额外获得50币/人</span>。 <br />
        4. 您的好友注册并认证后，TA将<span class="step_color">获得50币的新人福利</span>。
      </div>
    </div>
    <div class="list">
      <img class="list_title"
           src="@/assets/img/invite_title2.png"
           alt="" />
      <div class="invite_info">
        <div class="info">
          <div class="invite_top">
            {{ inviteInfo.preAuthNum?inviteInfo.preAuthNum:0 }}<span class="info_company">人</span>
          </div>
          <p class="invite_bot">待认证</p>
        </div>
        <div class="info_line"></div>
        <div class="info">
          <div class="invite_top">
            {{ inviteInfo.successAuthNum?inviteInfo.successAuthNum:0 }}<span class="info_company">人</span>
          </div>
          <p class="invite_bot">累计成功</p>
        </div>
        <div class="info_line"></div>
        <div class="info">
          <div class="invite_top">
            {{ inviteInfo.rewardCount?inviteInfo.rewardCount:0 }}<span class="info_company">币</span>
          </div>
          <p class="invite_bot">累计奖励</p>
        </div>
      </div>
      <div class="no_data"
           v-if="inviteList.length == 0">
        <img src="@/assets/img/img_no_date.png"
             alt="" />
        <p>暂无数据</p>
      </div>
      <div class="invite_list"
           v-else>
        <div class="invite_person"
             v-for="(item, index) in inviteList"
             :key="index">
          <div class="list_left">
            <img class="list_icon"
                 src="@/assets/img/invite_icon.png"
                 alt="" />
            <div class="list_phone">{{ item.phone }}</div>
            <div class="list_status list_status_other"
                 v-if="item.authStatus == 2">
              已完成
            </div>
            <div class="list_status"
                 v-else>
              待认证
            </div>
          </div>
          <div class="list_state">{{ item.city }}</div>
          <div class="list_time">{{ changeTime(item.createTime) }}</div>
        </div>
      </div>
      <div class="more"
           @click="toInvite">
        <span class="show_more">查看全部</span>
        <img class="list_icon"
             src="@/assets/img/invite_icon.png"
             alt="" />
      </div>
    </div>
    <div class="rules">
      <img src="@/assets/img/invite_title3.png"
           alt="" />
      <div class="rules_tip">
        1.
        活动期间，您通过二维码或邀请链接邀请好友注册展业帮，在好友通过身份认证后，您将获得金币奖励，金币可直接用来抢单获客。<br />
        2.
        邀请有阶梯机制，提升到相应的等级奖励增加，单个邀请并认证成功的用户最高可获得120金币奖励。<br />
        3. 赠送的金币在好友认证通过后实时到账。<br />
        4.任何非正常邀请行为，一旦确定将扣除违规所得。奖励的金币仅供在展业帮APP内可使用，活动最终解释权归展业帮所有。
      </div>
    </div>
    <div class="invite_btns">
      <div class="share_btn share_link"
           @click="shareLink">链接分享</div>
      <div class="share_btn share_pic"
           @click="sharePic">海报分享</div>
    </div>

    <!-- 弹框 -->
    <van-overlay :show="toastShow"
                 @click="toastShow = false">
      <div class="wrapper">
        <div class="bg_box"
             :class="{ bg_box_min: minHeight }"
             v-show="showPic"
             @click.stop>
          <div id="posterHtml">
            <img class="bg_img"
                 src="@/assets/img/invite_pic.png"
                 alt="" />
            <img class="new_ma"
                 :class="{ add_new_ma: addOffset }"
                 :src="imgScr"
                 alt="" />
          </div>
        </div>
        <div id="ma">
          <div id="qrcodeImg"></div>
        </div>
        <div class="wrap_bot"
             :class="{ wrap_bot_min: minHeight }"
             @click.stop>
          <p class="wrap_title"
             :class="{ wrap_title_min: minHeight }">
            分享有礼
          </p>
          <div class="wrap_dis">
            <div class="share_way"
                 @click="newShare(1)">
              <img class="share_img"
                   src="@/assets/img/img_wecat.png"
                   alt="" />
              <span>微信好友</span>
            </div>
            <div class="share_way"
                 @click="newShare(0)">
              <img class="share_img"
                   src="@/assets/img/img_pyq.png"
                   alt="" />
              <span>朋友圈</span>
            </div>
            <div class="share_way"
                 v-show="showDown"
                 @click="downImg">
              <img class="share_img"
                   src="@/assets/img/img_downLoad.png"
                   alt="" />
              <span>保存图片</span>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";

export default {
  data () {
    return {
      toastShow: false, //弹窗
      shareUrl: "",
      imgScr: "",
      showPic: false,
      showDown: false,
      minHeight: false,
      inviteInfo: {}, //邀请信息
      inviteList: [], //邀请列表
      desctext: "", //描述
      shareImg: "", //分享图片
      addOffset: false,
      token: ''
    };
  },
  created () {
    this.util.title("邀请好友");
    console.log(document.body.offsetHeight, document.body.offsetWidth);
    this.minHeight = document.body.offsetHeight > 570 ? false : true;
    if (document.body.offsetHeight == 707 && document.body.offsetWidth == 412) {
      this.addOffset = true;
    }
    this.token = localStorage.getItem("token");
    console.log(this.token);
    this.getInfo();
    this.getList();
    this.getLinkUrl();
  },
  mounted () { },
  methods: {
    getInfo () {
      //获取信息
      this.$get("/app/invitation/statistic").then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.inviteInfo = res.data;
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      });
    },
    getList () {
      //获取列表
      let param = {
        listAll: 1,
      };
      this.$get("/app/invitation/invitedList", param).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          if (res.data.length > 5) {
            this.inviteList = res.data.slice(0, 5);
          } else {
            this.inviteList = res.data;
          }
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      });
    },
    getLinkUrl () {
      //获取短连接
      this.$get("/app/invitation/inviteLink").then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.shareUrl = res.data.inviteLink;
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      });
    },
    toInvite () {
      if (this.token) {
        this.$router.push({
          path: "/activity/myInvite",
        });
      } else {
        this.toLogin();
      }
    },
    shareLink () {
      if (this.token) {
        this.toastShow = true;
        this.showPic = false;
        this.showDown = false;
      } else {
        this.toLogin();
      }
    },
    sharePic () {
      if (this.token) {
        this.toastShow = true;
        this.showPic = true;
        this.showDown = true;
        console.log(this.shareUrl)
        this.$nextTick(() => {
          this.createQrcode(this.shareUrl);
          this.createPoster(); //将二维码拼接进背景图
          this.createPoster2();
        });
      } else {
        this.toLogin();
      }
    },
    newShare (num) {
      //点击分享
      //num:0 朋友圈 1：微信好友
      let json = {};
      if (this.showPic == false) {
        //分享链接
        if (num == 0) {
          this.desctext = "";
        } else {
          this.desctext =
            "您的好友在展业帮成功抢单，现在送您一个红包，即刻领取！";
        }
        json = {
          title: "加入展业帮，即时注册送红包，优质好单天天抢！",
          link: this.shareUrl,
          icon:
            "https://xindaiguanjia-app-prod.oss-cn-hangzhou.aliyuncs.com/file%2FshareImg.jpg",
          desc: this.desctext,
          shareType: num,
        };
      } else {
        //分享图片
        json = {
          title: "",
          link: "",
          icon: this.shareImg,
          desc: "",
          shareType: num,
        };
      }
      console.log(json);
      this.toastShow = false;
      try {
        window.webkit.messageHandlers.share.postMessage(json); //ios
      } catch (err) {
        window.AppJs.share(JSON.stringify(json)); //android
      }
    },
    changeImg (img) {
      let param = {
        file: img,
      };
      this.$post(
        "/app/file/base64Upload",
        { file: img },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      ).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.shareImg = res.data;
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      });
    },
    downImg () {
      let json = {
        imgUrl: this.shareImg,
      };
      console.log(json);
      this.toastShow = false;
      try {
        window.webkit.messageHandlers.saveImg.postMessage(json); //ios
      } catch (err) {
        window.AppJs.saveImg(JSON.stringify(json)); //android
      }
    },
    createQrcode (text) {
      // 生成二维码
      const qrcodeImgEl = document.getElementById("qrcodeImg");
      let qrcode = new QRCode(qrcodeImgEl, {
        width: 65,
        height: 65,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      qrcode.makeCode(text);
    },
    createPoster () {
      // 生成图片
      const vm = this;
      const domObj = document.getElementById("ma");
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        logging: false,
        letterRendering: true,
        onclone (doc) {
          let e = doc.querySelector("#ma");
          e.style.display = "block";
        },
      }).then((canvas) => {
        // 在微信里,可长按保存或转发
        vm.posterImg = canvas.toDataURL("image/png");
        this.imgScr = vm.posterImg;
        console.log(vm.posterImg);
      });
    },
    createPoster2 () {
      // 生成图片
      const vm = this;
      let domObj = document.getElementById("posterHtml");
      setTimeout(() => {
        html2canvas(domObj, {
          useCORS: true,
          allowTaint: false,
          logging: false,
          letterRendering: true,
          onclone (doc) {
            let e = doc.querySelector("#posterHtml");
            e.style.display = "block";
          },
        }).then((canvas) => {
          // 在微信里,可长按保存或转发
          vm.posterImg = canvas.toDataURL("image/png");
          // this.imgScr = vm.posterImg;
          // console.log(vm.posterImg);
          // this.shareImg = vm.posterImg;
          // vm.imgDown(vm.posterImg);
          this.changeImg(vm.posterImg);
        });
      }, 500);
    },

    changeTime (time) {
      let txt = time.split("T");
      return txt[0] + " " + txt[1];
    },
    toLogin () {
      try {
        window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=1'); //ios
      } catch (err) {
        window.AppJs.toClientPath('product_manager_index/?Page=1'); //android
      }
    },
    // -----
    imgDown (img) {
      var alink = document.createElement("a");
      alink.href = img;
      alink.download = this.posterImgName; // 图片名
      alink.click();
    },
  },
};
</script>
