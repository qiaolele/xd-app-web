var _webSocket = null;
var _webSocketlockReconnect = false;
var _webSocketTimer = null;

function createWebsocket() {
  return new Promise((resolve, reject) => {
    getSocket();
    resolve();
  })
}

function getSocket(t) {
  var url = (location.protocol == 'http:') ? 'ws://' : 'wss://',
    wsUrl = url + location.host + '/ws.do';
  _webSocket = new WebSocket(wsUrl);

  _webSocket.param = function (t) {
    if (_webSocket.readyState === 1) {
      return _webSocket.send(JSON.stringify(t));
    }
  };
  _webSocket.onopen = function () {
    console.log("链接服务器成功!");
    if (_webSocket.readyState === 1) {
      if (t) {
        _webSocket.param(t);
      }
    }
  };
  _webSocket.onsend = function (m) {
    if (_webSocket.readyState === 1) {
      _webSocket.send(JSON.stringify(m));
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
    console.log('WebSocket发生错误: ' + e.code)
    console.log("与服务器断链接异常!")
    reconnect(t)
  };
  _webSocket.onclose = function (e) {
    console.log('WebSocket发生错误: ' + e.code)
    console.log("与服务器断开了链接!")
    reconnect(t)
  };
  _webSocket.msg = function () {

  };
  window._webSocket = _webSocket;
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
  }, 2000);
}
export {
  createWebsocket
};