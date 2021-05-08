<style>
@import 'assets/css/common.css';
#app {
  height: 100%;
  width: 100%;
}
#app > div {
  min-height: 100%;
}
</style>
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import MessageBox from '@/assets/js/message-box.js';
//A+9tdXijEM5SATpMQLGO3A==
// w68RlqzB3hfrNj+LvfheIg==
//HCxjqQ+Ztwtp/Anp3HGMcg==
//7IWNAV4MpoizUCvleWI12w==
//WQIardiMk3fX3aw8ymMcrS3dUGGgnFdQUTkxuXdRYfzga1n7eBLBe8Paz/DoGY9z
//2g9i/+zThPqnCxNP288AsA==

export default {
  data () {
    return {
      deviceInfo: {},
    };
  },
  beforeCreate () { },
  created () {
    window.saveDeviceInfo = this.saveDeviceInfo;
  },
  mounted () {
    // localStorage.setItem("token", 'xbs8DC8didYy7h32hN0ZHzW9dph8hualv5N/RSdaYBFV5t0KAJ6zoUSnOCTJqqmO2Rpx0jzlF2+VGsENME1Kyw==');
    this.getDeviceInfo();
    window.saveDeviceInfo = this.saveDeviceInfo;
  },
  beforeDestroy () { },
  computed: {},
  methods: {
    getDeviceInfo () {
      try {
        window.webkit.messageHandlers.getDeviceInfo.postMessage(""); //ios
      } catch (err) {
        window.AppJs.getDeviceInfo(); //android
      }
    },
    saveDeviceInfo (str) {
      this.deviceInfo = JSON.parse(str);
      localStorage.setItem("token", this.deviceInfo.token);
      localStorage.setItem("customerId", this.deviceInfo.customerId);
      localStorage.setItem("phone", this.deviceInfo.phone);
      localStorage.setItem("deviceCode", this.deviceInfo.deviceCode);
      localStorage.setItem("udid", this.deviceInfo.udid);
      localStorage.setItem("isShowToast", this.deviceInfo.isShowToast);
      localStorage.setItem("appVersion", this.deviceInfo.appVersion);
      localStorage.setItem("channel", this.deviceInfo.channel);
      localStorage.setItem("os", this.deviceInfo.os);
      localStorage.setItem("packageName", this.deviceInfo.packageName);
      localStorage.setItem("deviceId", this.deviceInfo.deviceId);
      localStorage.setItem("oaid", this.deviceInfo.oaid);
      localStorage.setItem("androidId", this.deviceInfo.androidId);
      if (this.deviceInfo.os == 1) {
        localStorage.setItem("location", encodeURI(this.deviceInfo.location));
      } else {
        localStorage.setItem("location", this.deviceInfo.location);
      }
    },
  },
};
</script>
