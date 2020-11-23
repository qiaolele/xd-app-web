var _webSocket = null;
var _webSocketlockReconnect = false;
var _webSocketTimer = null;

function getSocket(t) {
  var url = (location.protocol == 'http:') ? 'ws://' : 'wss://',
    wsUrl = url + 'uc.coinicle.info/ws.do';
  /*wsUrl='ws://qh.esongbai.abc/ws.do'; */
  _webSocket = new WebSocket(wsUrl);

  _webSocket.getallList = function () {
    var agent = {},
      agentInfo = localStorage.agent ? JSON.parse(localStorage.agent) : {};
    var allList = {
      code: 103,
    }
    return allList;
  };
  _webSocket.param = function (t) {
      if (_webSocket.readyState === 1) {
        return _webSocket.send(JSON.stringify(t));
      }
    },
    _webSocket.onopen = function () {
      console.log("链接服务器成功!");
      if (_webSocket.readyState === 1) {
        _webSocket.send(JSON.stringify(_webSocket.getallList()));
        _webSocket.param(t);
      }
    };
  _webSocket.onsend = function (m) {
    if (_webSocket.readyState === 1) {
      _webSocket.send(m);
    }
  };
  _webSocket.onmessage = function (t) {
    var i = JSON.parse(t.data);
    if (i.code == 201) {
      var b = {};
      b.code = 202;
      _webSocket.send(JSON.stringify(b))
      return;
    }
    _webSocket.msg && _webSocket.msg(t.data)
  };
  _webSocket.onerror = function (e) {
    var b = {};
    b.code = 205;
    console.log('开始断开之前链接');
    _webSocket.send(JSON.stringify(b))
    console.log('WebSocket发生错误: ' + e.code)
    //console.log("与服务器断链接异常!")
    reconnect(t)
  };
  _webSocket.onclose = function (e) {
    var b = {};
    b.code = 205;
    console.log('开始断开之前链接');
    _webSocket.send(JSON.stringify(b))
    console.log('WebSocket发生错误: ' + e.code)
    //console.log("与服务器断开了链接!")
    _webSocket = null;
    reconnect(t)
  };
  _webSocket.msg = function () {

  };
  return _webSocket;
}

function reconnect(t) {
  if (_webSocketlockReconnect) {
    return;
  };
  _webSocketlockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  _webSocketTimer && clearTimeout(_webSocketTimer);
  _webSocketTimer = setTimeout(function () {
    getSocket(t);
    _webSocketlockReconnect = false;
  }, 500);
}