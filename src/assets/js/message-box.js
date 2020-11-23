// import msg from '~/locales/lang.js'
// var ft = msg[window.localStorage.getItem('locale')].jsdata;
// var CONFIRM_TEXT = ft.ok;
// var CANCEL_TEXT = ft.no;

import Vue from 'vue'
import msgboxVue from '@/components/message-box.vue'

var defaults = {
  title: '',
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: false,
  lockScroll: false,
  closeOnClickModal: true,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  showCancleIcon: false
}

var merge = function (target) {
  defaults.confirmButtonText = '确定'
  defaults.cancelButtonText = '取消'
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i]
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

var MessageBoxConstructor = Vue.extend(msgboxVue)

var currentMsg, instance
var msgQueue = []

const defaultCallback = action => {
  if (currentMsg) {
    var callback = currentMsg.callback
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action)
      } else {
        callback(action)
      }
    }
    if (currentMsg.resolve) {
      var $type = currentMsg.options.$type
      if ($type === 'confirm') {
        if (action === 'confirm') {
          if (instance.showInput) {
            currentMsg.resolve({ value: instance.inputValue, action })
          } else {
            currentMsg.resolve(action)
          }
        } else if (action === 'cancel' && currentMsg.reject) {
          currentMsg.reject(action)
        }
      } else {
        currentMsg.resolve(action)
      }
    }
  }
}

var initInstance = function () {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })

  instance.callback = defaultCallback
}

var showNextMsg = function () {
  if (!instance) {
    initInstance()
  }

  if (!instance.value || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift()

      var options = currentMsg.options
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'showCancleIcon'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true
        }
      })
      document.body.appendChild(instance.$el)

      Vue.nextTick(() => {
        instance.value = true
      })
    }
  }
}

var MessageBox = function (options, callback) {
  if (typeof options === 'string') {
    options = {
      title: options
    }
    if (arguments[1]) {
      options.message = arguments[1]
    }
    if (arguments[2]) {
      options.type = arguments[2]
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function(resolve, reject) { // eslint-disable-line
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      })

      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults || {}, options),
      callback: callback
    })

    showNextMsg()
  }
}

MessageBox.setDefaults = function (defaults) {
  MessageBox.defaults = defaults
}

MessageBox.alert = function (message, title, options) {
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options))
}

MessageBox.confirm = function (message, title, options) {
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options))
}

MessageBox.close = function () {
  if (!instance) return
  instance.value = false
  msgQueue = []
  currentMsg = null
}

export default MessageBox
export { MessageBox }
