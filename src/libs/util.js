/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import CryptoJS from "crypto-js";
import Vue from "vue";
import JsEncrypt from "jsencrypt";

let util = {};
// aes加密
const key = CryptoJS.enc.Latin1.parse("eqYgjJlPJE2HvAYY"); //加密的key
const iv = CryptoJS.enc.Latin1.parse("NxH6AaMiFkkOaXak"); //加密的iv
/**
 * @param {*需要加密的字符串 注：对象转化为json字符串再加密} word
 * @param {*aes加密需要的key值，这个key值后端同学会告诉你} key
 */

util.encrypt = function(word) {
  var encrypted = CryptoJS.AES.encrypt(word, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });
  return encrypted.toString();
};

util.decrypt = function(word) {
  //解密
  var decrypted = CryptoJS.AES.decrypt(word, key, {
    iv: iv,
    padding: CryptoJS.pad.ZeroPadding,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

util.encruption = function(obj) {
  // 实例化一个JSEncrypt对象
  let encrypt = new JsEncrypt();

  let publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkZeUix/8VbtXMPKAu2wyIsJk4MqJwSWJlKSpfuDwwXqkBGISXbAEfJyrV9wcjJ+RfTbHrh8JVB8oxSnO896MFvUz7s4izvwtBmU6A08fyummslEEttWNCd1kBWqTGgpaYA7k/eNS+My2If9nZ+3ZMEtYbgVeJMOsD0PMtFPGULA6H8SnaXYZ/oj2cpT6vjnZZtHMnDC4Fj/8JiEy2J9XJAfjlJ8WmK95pbHk5PV9fv7FZAPfAqD0jwb+5uwMKGnc7jJl0wP/rCZfMz92wPq4PP2nv43eMP6SNvuzGaxsTBa/XHFVFq0kkzJhoWjTUiLEj2uRFQLAhCsnp4ZTmFHidwIDAQAB`; //把之前生成的贴进来，实际开发过程中，可以是后台传过来的

  encrypt.setPublicKey(publicKey); // 设置公钥
  return encrypt.encrypt(obj);
};

util.decrypt1 = function(obj) {
  // 实例化一个JSEncrypt对象
  let decrypt = new JsEncrypt();

  let privateKey = `MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCRl5SLH/xVu1cw8oC7bDIiwmTgyonBJYmUpKl+4PDBeqQEYhJdsAR8nKtX3ByMn5F9NseuHwlUHyjFKc7z3owW9TPuziLO/C0GZToDTx/K6aayUQS21Y0J3WQFapMaClpgDuT941L4zLYh/2dn7dkwS1huBV4kw6wPQ8y0U8ZQsDofxKdpdhn+iPZylPq+Odlm0cycMLgWP/wmITLYn1ckB+OUnxaYr3mlseTk9X1+/sVkA98CoPSPBv7m7AwoadzuMmXTA/+sJl8zP3bA+rg8/ae/jd4w/pI2+7MZrGxMFr9ccVUWrSSTMmGhaNNSIsSPa5EVAsCEKyenhlOYUeJ3AgMBAAECggEAegj5XMhZxS67ve520yK0v4f78KQ0ZW5mbO68l/pKM5Lt6jKePGNuz1ivEn0QfRq/Y5pIM34WXqmjjegmbSmMeS3c8v1cFe0wfFzbDK0E9Bt3O55Hek1z4+HrldKoLLqi2EOD0//4q01EGSkw7t9iHmX5YHclW2GcVks5Samy4Cwi7KF/A+05b98EZ1RVkEPEVGGAxxKAAV5qQiis0KJjplNlqxUTXk9hMicEdNTtwXePpHK+TwHgVq2SDdyu+tARAAktSOF80PlUahUiCC8WjX4760jnpf7wIycg39J2ea8DZAeNRr4DJEbhJaTOEPwog99I3PXoZv8YUP4ydRKtCQKBgQDLETBRqhP2ZeqflkhLFZPGlC+HfAg10Kt2xtm3mjHYSsTHLI4FeXFkoEK54lCV4MIggATH/7R0HM3ScmiZsSC3OioE9gY1GAVtptDr4XCrurUrFzDlZFw5n3uIXEpI1I+yhiJwG+PMM8kJFNajnjjDqmTavQeeb85qL650i5DdawKBgQC3iwruEKNL7N+LOdFFHl+sZlTBfFJ5S/xq781nAMk3eClam+KHHfiwZS1yW+ngwtY4ojOdy6hLCZZ4+VXvprU7kYvXfSs/oJW0H/n/xMxf1x5r/rVmYCj74rTB51VGYqD6sdea9b9ZfWP/pyYE7qe20y2yPwbM9gWbQc0Iv4wmJQKBgQCAcILLZHPz6UqZXgij1SX++EOHwl+/Chkpq2SRyKm2ULRd9kRuGf4q02LhB9BIvDyNKevcRFPzDTTx4wNeErbKrbNeJ+6NLoBgdp62U4VcWV+1vZljvjLHD6Sm/xjNMAUjucuWdU2EH00MvW11V+I3gFMCN4XWJIm+iCIj/RLHuQKBgEAHAyMVLsH3uevJmZUxCVMMx5hPlD24Ii/zw4WhIpB1HIf9RUK5U93FDduM8MN1dGGBQ9xSBT1X9OPypuXZE/PZzBy6D3I8xLx3QzDUKC9uzbACxKkX9nQYG9JgrsDE+z849uuZusyvD0lJt9uUnXELri82CVtKn54PkETy/SL5AoGBAMkExrYm5qg4DxdsSOE6mGcvLcGFg3boG/A4Nd6t5hfY8CDF03Vsf7w5Qy7oSQvGLbT1ABrDKZR9U70KOrmIizY/C92XELbD1ZLLmJci13yTwOLSkrSIo8KCDF3og/u08Wqga0CAwrIdJEYRHxkuL3JBZuIP4HdaY2NwlXR+50RF`;

  decrypt.setPrivateKey(privateKey);

  return decrypt.decrypt(obj); // 解密
};
util.getYMDHMS = function(timestamp) {
  let time = new Date(timestamp);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hours = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  return (
    year + "-" + month + "-" + date + " " + hours + ":" + minute + ":" + second
  );
};
util.checkPhone = function(val) {
  let reg = /^(\d{3})\d*(\d{4})$/;
  let str2 = val.replace(reg, "$1****$2");
  return str2;
};
// 这三个参数的含义：str：字符串，frontLen：前面保留位数，endLen：后面保留位数。
util.checkIdCard = function(str, frontLen, endLen) {
  var len = str.length - frontLen - endLen;
  var xing = "";
  for (var i = 0; i < len; i++) {
    xing += "*";
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
};
//排序的函数
util.objKeySort = function(obj) {
  var newkey = Object.keys(obj).sort();
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
  for (var i = 0; i < newkey.length; i++) {
    //遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
  }
  return newObj; //返回排好序的新对象
};
util.trim = function(s) {
  return s.replace(/(^\s*)|(\s*$)/g, "");
};

util.allTrim = function(str) {
  return str.replace(/\s+/g, "");
};
util.getQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};
util.platform = function() {
  let u = navigator.userAgent,
    p = "";
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  let isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  p = isAndroid ? "android" : isIos ? "ios" : "h5";
  return p;
};
util.title = function(title) {
  window.document.title = title;
};
//客户端页面跳转统一方法
util.toClientPath = function(pageType, one) {
  let json = {
    pageType: pageType,
    param: {
      one: one,
      two: one,
      three: one,
    },
  };
  try {
    window.webkit.messageHandlers.toClientPath.postMessage(json); //ios
  } catch (err) {
    window.AppJs.toClientPath(JSON.stringify(json)); //android
  }
};
// 客户端接口统一方法
util.toClientHost = function(json) {
  try {
    window.webkit.messageHandlers.toClientHost.postMessage(json); //ios
  } catch (err) {
    window.AppJs.toClientHost(JSON.stringify(json)); //android
  }
};
//sdk认证页面
util.toSdkAuth = function(authId, one) {
  let json = {
    authId: authId,
    param: {
      one: one,
    },
  };
  try {
    window.webkit.messageHandlers.toSdkAuth.postMessage(json); //ios
  } catch (err) {
    window.AppJs.toSdkAuth(JSON.stringify(json)); //android
  }
};
util.formatDuring = function(mss) {
  var days = parseInt(mss / (1000 * 60 * 60 * 24));
  var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = (mss % (1000 * 60)) / 1000;
  return days + "天" + hours + ":" + minutes + ":" + seconds;
};
/**
 * 数字转整数 如 100000 转为10万
 * @param {需要转化的数} num
 * @param {需要保留的小数位数} point
 */
util.tranNumber = function(num, point, isGetYan) {
  let numStr = num.toString();
  // 十万以内直接返回
  if (numStr.length <= 4) {
    return isGetYan ? numStr + "元" : numStr;
  }
  // 大于8位数是亿
  else if (numStr.length > 8) {
    let decimal = numStr.substring(
      numStr.length - 8,
      numStr.length - 8 + point
    );
    return parseFloat(parseInt(num / 100000000) + "." + decimal) + "亿";
  }
  // 大于6位数是十万 (以10W分割 10W以下全部显示)
  else if (numStr.length > 5) {
    let decimal = numStr.substring(
      numStr.length - 4,
      numStr.length - 4 + point
    );
    return parseFloat(parseInt(num / 10000) + "." + decimal) + "万";
  }
  // 大于4位数是万 (以1w分割 1w以下全部显示)
  else if (numStr.length > 4) {
    let decimal = numStr.substring(
      numStr.length - 3,
      numStr.length - 3 + point
    );
    return parseFloat(parseInt(num / 10000) + "." + decimal) + "万";
  }
};
//三位一逗号分隔
util.formatNum = function(n) {
  var b = parseInt(n).toString();
  var len = b.length;
  if (len <= 3) {
    return b + "元";
  }
  var r = len % 3;
  return r > 0
    ? b.slice(0, r) +
        "," +
        b
          .slice(r, len)
          .match(/\d{3}/g)
          .join(",") +
        "元"
    : b
        .slice(r, len)
        .match(/\d{3}/g)
        .join(",") + "元";
};

/**
 ** s:数字
 ** p:小数位
 ** z:是否补0,true为补0，false：不补
 */
util.toFixed = function(s, p, z) {
  if (s === 0) return p === 2 ? "0.00" : "0";
  if (!s) return;
  let n = (
    parseInt(s * Math.pow(10, p) + (s > 0 ? 0.5 : -0.5)) / Math.pow(10, p)
  )
    .toFixed(p)
    .toString();
  if (z) {
    let i = n.indexOf(".");
    if (i < 0 && p > 0) {
      n = n + ".";
      for (let i = 0; i < p; i++) {
        n = n + "0";
      }
    } else {
      i = n.length - i;
      for (let j = 0; j < p - i + 1; j++) {
        n = n + "0";
      }
    }
  }
  return n;
};
util.format = function(r, a, t) {
  a = a || "Y-M-D h:m:s";
  let e = function(e, r) {
    return (!r && e < 10 ? "0" : "") + e;
  };
  for (
    var c = r.getTime ? r : new Date(r), s = a.length, g = a, n = 0;
    s > n;
    n++
  ) {
    switch (a.charAt(n)) {
      case "Y":
        g = g.replace(/Y/g, e(c.getFullYear(), t));
        break;
      case "y":
        g = g.replace(/y/g, e(c.getFullYear(), t).substring(2));
        break;
      case "M":
        g = g.replace(/M/g, e(c.getMonth() + 1, t));
        break;
      case "D":
        g = g.replace(/D/g, e(c.getDate(), t));
        break;
      case "h":
        g = g.replace(/h/g, e(c.getHours(), t));
        break;
      case "m":
        g = g.replace(/m/g, e(c.getMinutes(), t));
        break;
      case "s":
        g = g.replace(/s/g, e(c.getSeconds(), t));
    }
  }
  return g;
};
util.toast = function(obj) {
  let opt = {
    duration: 1500,
    msg: "",
    type: "succ",
  };
  opt = Object.assign(opt, obj);
  if (document.querySelector(".bit-toast")) return;
  let _toast = document.createElement("div");
  _toast.setAttribute("class", "bit-toast");
  _toast.innerHTML = opt.msg;
  document.body.appendChild(_toast);
  let o = document.querySelector(".bit-toast");
  setTimeout(() => {
    o.className = "bit-toast bit-toast-op " + opt.type;
  }, 10);

  function opNone() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        o.className = "bit-toast " + opt.type;
        resolve();
      }, 1000);
    });
  }
  opNone().then((res) => {
    setTimeout(() => {
      document.body.removeChild(o);
    }, 500);
  });
};
util.getCookie = function(name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(name + "=");
    if (c_start != -1) {
      c_start = c_start + name.length + 1;
      var c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
};
util.setCookie = function(name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    value +
    (expiredays == null ? "" : ";expires=" + exdate.toGMTString()) +
    "; path=/";
};

util.moneyFormat = function(money, num) {
  money = money + "";
  let point = money.split(".");
  if (point[0].length > 8) {
    let n = num || num == 0 ? num : 2;
    money = (money / 100000000).toFixed(n) + "亿";
  } else if (point[0].length > 4) {
    let n1 = num || num == 0 ? num : 1;
    money = (money / 10000).toFixed(n1) + "万";
  } else {
    let n2 = num || num == 0 ? num : 1;
    money = (money - 0).toFixed(n2);
  }
  return money;
};

/*
 ** 时间戳显示为多少分钟前，多少天前的处理
 ** eg.
 ** console.log(dateDiff(1411111111111));  // 2014年09月19日
 ** console.log(dateDiff(1481111111111));  // 9月前
 ** console.log(dateDiff(1499911111111));  // 2月前
 ** console.log(dateDiff(1503211111111));  // 3周前
 ** console.log(dateDiff(1505283100802));  // 1分钟前
 */
util.dateDiff = function(timestamp) {
  // 补全为13位
  var arrTimestamp = (timestamp + "").split("");
  for (var start = 0; start < 13; start++) {
    if (!arrTimestamp[start]) {
      arrTimestamp[start] = "0";
    }
  }
  timestamp = arrTimestamp.join("") * 1;

  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - timestamp;

  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return "不久前";
  }

  // 计算差异时间的量级
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;

  // 数值补0方法
  var zero = function(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };

  // 使用
  if (monthC > 12) {
    // 超过1年，直接显示年月日
    return (function() {
      var date = new Date(timestamp);
      return (
        date.getFullYear() +
        "年" +
        zero(date.getMonth() + 1) +
        "月" +
        zero(date.getDate()) +
        "日"
      );
    })();
  } else if (monthC >= 1) {
    return parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return parseInt(dayC) + "天前";
  } else if (dayC <= 2 && dayC > 1) {
    return parseInt(dayC) + "昨天";
  } else if (hourC >= 1) {
    return parseInt(hourC) + "小时前";
  } else if (minC >= 5) {
    return parseInt(minC) + "分钟前";
  }
  return "刚刚";
};

export default util;
