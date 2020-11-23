import Vue from "vue";
import axios from "axios";
import qs from "qs";
import Util from "./util";
let _isJson = 0;
const baseUrl = process.env.NODE_ENV === "production" ? "" : "/api";
axios.defaults.timeout = 30000;
axios.defaults.baseURL = "";
// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers = {
      // "Content-Type": _isJson
      //   ? "application/json"
      //   : "application/x-www-form-urlencoded",
      customerId: localStorage.getItem("customerId")
        ? localStorage.getItem("customerId")
        : "",
      token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
      jxwUserToken: localStorage.getItem("jxwUserToken")
        ? localStorage.getItem("jxwUserToken")
        : "",
      phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : "",
      isShowToast: localStorage.getItem("isShowToast")
        ? localStorage.getItem("isShowToast")
        : 1,
      deviceCode: localStorage.getItem("deviceCode")
        ? localStorage.getItem("deviceCode")
        : "",
      udid: localStorage.getItem("udid") ? localStorage.getItem("udid") : "",
      appVersion: localStorage.getItem("appVersion")
        ? localStorage.getItem("appVersion")
        : "",
      channel: localStorage.getItem("channel")
        ? localStorage.getItem("channel")
        : "",
      packageName: localStorage.getItem("packageName")
        ? localStorage.getItem("packageName")
        : "",
      os: localStorage.getItem("os") ? localStorage.getItem("os") : "",
      deviceId: localStorage.getItem("deviceId")
        ? localStorage.getItem("deviceId")
        : "",
      oaid: localStorage.getItem("oaid") ? localStorage.getItem("oaid") : "",
      androidId: localStorage.getItem("androidId")
        ? localStorage.getItem("androidId")
        : "",
      location: localStorage.getItem("location")
        ? localStorage.getItem("location")
        : "",
    };
    config.data = config.data;
    return config;
  },
  (error) => {
    return Promise.reject(err);
  }
);
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params: Object.assign(params, {
          _: new Date().getTime(),
        }),
      })
      .then((response) => {
        response.data.httpTime =
          response.headers && response.headers.date
            ? response.headers.date
            : "";
        resolve(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.data.code == 503) {
        } else {
          // Util.toast({
          //   msg: 'Network busy. Please try again later!',
          //   type: 'fail'
          // })
        }
      });
  });
}

export function post(url, data = {}, o, isJson) {
  _isJson = isJson;
  // o 是否是表单提交
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + url, o ? data : qs.stringify(data)).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
        if (err.response && err.response.data.code == 503) {
        } else {
          Util.toast({
            msg: "Network busy. Please try again later!",
            type: "fail",
          });
        }
      }
    );
  });
}
