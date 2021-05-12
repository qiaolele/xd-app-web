<style scoped>
.wrap {
  font-family: PingFangSC-Regular, PingFang SC;
  background: #ffffff;
}
.title {
  width: 100%;
  height: 0.36rem;
  background: #ffeee7;
  color: #ff6119;
  font-size: 0.13rem;
  text-align: center;
  line-height: 0.36rem;
}
.info {
  width: 100%;
  padding: 0.04rem 0.15rem;
}
.info_title {
  display: flex;
  align-items: center;
  padding: 0.12rem 0;
}
.info_title span {
  margin-left: 0.04rem;
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: 600;
}
.info_icon {
  width: 0.03rem;
  height: 0.14rem;
  background: #ff5618;
}
.info_list {
  padding: 0.16rem 0;
  color: #2f2f2f;
  border-top: 0.01rem solid #f6f7f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info_left {
  font-size: 0.16rem;
}
.info_right {
  color: #999999;
}
.show_line {
  widows: 100%;
  height: 0.1rem;
  background: #f8f8f8;
}
.select_tip {
  font-size: 0.16rem;
  color: #999999;
}
.right_icon {
  width: 0.12rem;
  height: 0.12rem;
  margin-left: 0.04rem;
}
.show_pic {
  padding: 0.16rem 0;
  color: #2f2f2f;
  border-top: 0.01rem solid #f6f7f8;
}
.prove {
  display: flex;
  margin-top: 0.18rem;
}
.video {
  width: 1.1rem;
  height: 1.1rem;
}
.info_pic {
  display: flex;
}
>>> .van-uploader__upload,
>>> .van-uploader__preview-image {
  /* width: 1.1rem; */
  width: 29.5vw;
  height: 1.1rem;
}
>>> .van-uploader__wrapper {
  flex-wrap: nowrap;
}
.forPreview_video {
  position: relative;
  width: 29.5vw;
  height: 1.1rem;
  margin-right: 2vw;
}
.pic_img {
  width: 100%;
  height: 100%;
}
.audio_img {
  width: 100%;
  height: 100%;
}
.btnBox {
  padding: 0 0.15rem;
  padding-bottom: 0.2rem;
}
.btn {
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.25rem;
  font-size: 0.16rem;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 0.5rem;
  margin-top: 0.1rem;
  /* margin-bottom: 0.2rem; */
}
.coupon {
  padding: 0.15rem;
  display: inline-flex;
  align-items: center;
}
.coupon img {
  width: 0.16rem;
  height: 0.16rem;
}
.coupon p {
  font-size: 0.16rem;
  color: #2f2f2f;
  margin-left: 0.08rem;
}
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
.wrapper_toast {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.loading_txt {
  color: #fff;
}
</style>

<template>
  <div class="wrap">
    <div class="title">退单审核时间为1-2个工作日，退单后平台将收回订单</div>
    <div class="info">
      <div class="info_title">
        <p class="info_icon"></p>
        <span>基本信息</span>
      </div>
      <div class="info_list">
        <span class="info_left">用户信息</span>
        <span class="info_right">{{chargeInfo.name}}</span>
      </div>
      <div class="info_list">
        <span class="info_left">用户手机号</span>
        <span v-if="chargeInfo.phone"
              class="info_right">{{getPhone(chargeInfo.phone)}}</span>
      </div>
      <div class="info_list">
        <span class="info_left">订单价格</span>
        <span class="info_right">{{chargeInfo.goldCount}}</span>
      </div>
      <div class="info_list">
        <span class="info_left">抢单时间</span>
        <span v-if="chargeInfo.grabTime"
              class="info_right">{{getTime(chargeInfo.grabTime)}}</span>
      </div>
    </div>
    <div class="show_line"></div>
    <div class="reason info">
      <div class="info_title">
        <p class="info_icon"></p>
        <span>原因说明</span>
      </div>
      <div class="info_list"
           @click="showReasonChoose = true">
        <span class="info_left">退单原因</span>
        <div class="info_right">
          <span v-if="chargeReason==''"
                class="select_tip">请选择</span>
          <span v-else>{{chargeReason}}</span>
          <img class="right_icon"
               src="@/assets/img/vip/right_icon.png"
               alt="">
        </div>
      </div>
      <!--  -->
      <van-popup v-model="showReasonChoose"
                 round
                 position="bottom">
        <van-picker show-toolbar
                    :columns="columns"
                    @cancel="showReasonChoose = false"
                    @confirm="confirmReason" />
      </van-popup>
      <!--  -->
      <div class="show_pic">
        <p>通话视频（录屏请开启麦克风）</p>
        <div class="prove">
          <!-- <div class="info_pic">
            <div class="forPreview_video"
                 v-for="(item, index) in imgList"
                 :key="index">
              <img class="pic_img"
                   :src="item"
                   alt="">
              <div class="van-uploader__preview-delete"
                   @click="removeImg(index)">
                <i class="van-icon van-icon-cross van-uploader__preview-delete-icon"></i>
              </div>
            </div>
            <van-uploader v-show="imgList.length < 2"
                          accept="image/*"
                          :after-read="afterReadImg"
                          upload-text="上传图片" />
          </div> -->
          <div>
            <div class="forPreview_video"
                 v-show="videoUrl!=''">
              <!-- <video class="audio_img"
                     :src="videoSrc"></video> -->
              <img :src="videoUrl"
                   class="audio_img"
                   alt="">
              <div class="van-uploader__preview-delete"
                   @click="removeVideo">
                <i class="van-icon van-icon-cross van-uploader__preview-delete-icon"></i>
              </div>
            </div>
            <van-uploader :before-read="beforeReadVideo"
                          :max-count="1"
                          accept="video/*"
                          v-show="videoSrc==''"
                          upload-text="上传视频" />
          </div>
          <!-- <div>
            <div class="forPreview_video"
                 v-for="(item, index) in audioList"
                 :key="index">
              <img class="audio_img"
                   src="@/assets/img/audio_icon.png"
                   alt="">
              <div class="van-uploader__preview-delete"
                   @click="removeAudio">
                <i class="van-icon van-icon-cross van-uploader__preview-delete-icon"></i>
              </div>
            </div>
            <van-uploader :before-read="beforeReadAudio"
                          :max-count="1"
                          accept="audio/*"
                          v-show="audioList.length==0"
                          upload-text="上传音频" />
          </div> -->
        </div>
      </div>
    </div>
    <div class="show_line"></div>
    <div class="coupon"
         v-if="showCoupon"
         @click="selectCoupon=!selectCoupon">
      <img v-show="!selectCoupon"
           src="@/assets/img/icon_coupon_unchecked.png"
           alt="">
      <img v-show="selectCoupon"
           src="@/assets/img/icon_coupon_select.png"
           alt="">
      <p>使用无理由退单券</p>
    </div>
    <div class="btnBox">
      <div class="btn"
           @click="submitInfo">提交</div>
    </div>
    <!--  -->
    <van-overlay :show="showLoading">
      <div class="wrapper_toast">
        <van-loading color="#fff"
                     type="spinner"
                     vertical>
          <span class="loading_txt">上传中...</span>
        </van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showReasonChoose: false, //选择退单理由
      columns: [{ num: 0, text: '无人接听' }, { num: 1, text: '不需要贷款' }, { num: 2, text: '同行测试单' }],
      chargeReason: '',//退单理由
      imgList: [],//图片列表
      audioList: [],//音频
      videoSrc: '',//视频链接
      videoUrl: '',//视频封面
      orderId: Number,//订单id
      chargeInfo: {},//退单信息
      showCoupon: true,//是否显示
      selectCoupon: true,//1：选中 false：不选中
      showLoading: false, //展示loading
    }
  },
  created () {
    this.util.title("申请退单");
    this.orderId = this.$route.query.orderId;
    this.getInfo();
    this.getCouponDetail();
  },
  methods: {
    getInfo () {
      this.$get("/app/v1/order/singleOrderInfo", { orderId: this.orderId }).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.chargeInfo = res.data;
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      });
    },
    getCouponDetail () {
      this.$get("/app/admin/v1/member/backCouponDetail").then((res) => {
        // console.log(res);
        if (res.code == 200) {
          if (res.data) {
            this.showCoupon = true;
          } else {
            this.showCoupon = false;
            this.selectCoupon = 0;
          }
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      });
    },
    confirmReason (value) {
      // console.log(value);
      this.chargeReason = value.text;
      this.showReasonChoose = false;
    },
    afterReadImg (file) {
      let formData = new FormData(); // 为上传文件定义一个formData对象
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('img', file.file);
      this.showLoading = true;
      this.$post("/app/file/uploadImg", formData, config)
        .then((res) => {
          console.log(res)
          this.showLoading = false;
          if (res.code == 200) {
            // this.taskList = e.data;
            this.imgList.push(res.data.url)
            console.log(this.imgList)
          } else {
            this.util.toast({ msg: e.msg });
          }
        })
        .catch((error) => { });
    },
    beforeReadVideo (file) {
      console.log(file);
      let formData = new FormData(); // 为上传文件定义一个formData对象
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('file', file);
      this.showLoading = true;
      this.$post("/app/file/uploadWithImg", formData, config)
        .then((res) => {
          console.log(res);
          this.showLoading = false;
          if (res.code == 200) {
            this.videoSrc = res.data.videoUrl;
            this.videoUrl = res.data.coverImg;
          } else {
            this.util.toast({ msg: e.msg });
          }
        })
        .catch((error) => { });
    },
    beforeReadAudio (file) {//上传音频
      console.log(file);
      let formData = new FormData(); // 为上传文件定义一个formData对象
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('file', file);
      this.showLoading = true;
      this.$post("/app/file/upload", formData, config)
        .then((res) => {
          console.log(res);
          this.showLoading = false;
          if (res.code == 200) {
            // this.videoSrc = res.data;
            this.audioList.push(res.data);//音频
          } else {
            this.util.toast({ msg: e.msg });
          }
        })
        .catch((error) => { });
    },
    removeVideo () {
      this.videoSrc = '';
      this.videoUrl = '';
    },
    removeAudio () {
      this.audioList = [];
    },
    removeImg (index) {
      let tmp = [];
      for (let i = 0;i < this.imgList.length;i++) {
        if (this.imgList[i] !== this.imgList[index]) {
          tmp.push(this.imgList[i]);
        }
      }
      this.imgList = tmp;
    },
    submitInfo () {
      if (!this.chargeReason) {
        this.util.toast({ msg: '请选择退单原因' });
      }
      else if (this.videoSrc == '') {
        this.util.toast({ msg: '请上传视频' });
      }
      // else if (!this.imgList.length) {
      //   this.util.toast({ msg: '请上传截图' });
      // }
      // else if (!this.audioList.length) {
      //   this.util.toast({ msg: '请上传录音' });
      // } 
      else {
        let param = {
          id: '',
          orderId: this.orderId,
          singleRemark: this.chargeReason,
          // singleImage: this.imgList.concat(this.audioList).toString(),
          singleImage: this.videoSrc,
          rejectReason: '',
          backChannel: this.selectCoupon ? 1 : 0,
          gmtCreate: '',
          gmtModified: ''
        };
        console.log(param);
        this.$post("/app/v1/order/singleBackOrder/coupon", param, 1, 1)
          .then((res) => {
            var e = res;
            if (e.code == 200) {
              this.$router.push({
                path: "/activity/chargeBackSuccess",
                query: {
                  selectCoupon: this.selectCoupon ? 1 : 0,
                },
              });
            } else {
              this.util.toast({ msg: e.msg });
            }
          })
          .catch((error) => { });
      }
    },
    getPhone (str) {
      return str.substr(0, 3) + '****' + str.substr(7, 10);
    },
    getTime (str) {
      return str.split(' ')[0];
    }
  },
}
</script>