/**
 * JS API
 */
import axios from 'axios';

class datafeeds {

  /**
   * JS API
   * @param {*Object} vue vue实例
   */
  constructor(vue) {
    this.self = vue
    this.subscribers = {}
  }

  /**
   * @param {*Function} callback  回调函数
   * `onReady` should return result asynchronously.
   */
  onReady(callback) {
    
    return new Promise((resolve, reject) => {
      axios.get('/quota/tradingView/config')
      .then(function (d) {
        resolve(d.data)
      })
      .catch(function (error) {});
    }).then(data => callback(data))
  }

  /**
   * @param {*String} symbolName  商品名称或ticker
   * @param {*Function} onSymbolResolvedCallback 成功回调 
   * @param {*Function} onResolveErrorCallback   失败回调
   * `resolveSymbol` should return result asynchronously.
   */
  resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    return new Promise((resolve, reject) => {
      axios.get('/quota/tradingView/symbols',{
          params: {
              symbol: this.self.stockCode
          }
      })
      .then(function (d) {
        resolve(d.data)
      })
      .catch(function (error) {});
    }).then(data => onSymbolResolvedCallback(data)).catch(err => onResolveErrorCallback(err))
  }

  /**
   * @param {*Object} symbolInfo  商品信息对象
   * @param {*String} resolution  分辨率
   * @param {*Number} rangeStartDate  时间戳、最左边请求的K线时间
   * @param {*Number} rangeEndDate  时间戳、最右边请求的K线时间
   * @param {*Function} onDataCallback  回调函数
   * @param {*Function} onErrorCallback  回调函数
   */
  getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback) {
    const onLoadedCallback = data => {
      for (let listenerGuid in this.subscribers) {
        this.subscribers[listenerGuid].lastBarTime = data[0].time
        this.subscribers[listenerGuid].listener(data[0])
      }
    }

    let symbol = this.self.stockCode;
    let _this = this;

    return new Promise(function (resolve, reject) {
      axios.get('/quota/tradingView/history',{
          params: {
              symbol: symbol,
              resolution: resolution,
              from: rangeStartDate,
              to: rangeEndDate
          }
      })
      .then(function (d) {
        let response = d.data;
        if (response.s !== 'ok' && response.s !== 'no_data') {
            reject(response.errmsg);
            return;
        }
        var bars = [];
        var meta = {
            noData: false,
        };
        if (response.s === 'no_data') {
            meta.noData = true;
            meta.nextTime = response.nextTime;
        }
        else {
            var volumePresent = response.v !== undefined;
            var ohlPresent = response.o !== undefined;
            for (var i = 0; i < response.t.length; ++i) {
                var barValue = {
                    time: response.t[i] * 1000,
                    close: Number(response.c[i]),
                    open: Number(response.c[i]),
                    high: Number(response.c[i]),
                    low: Number(response.c[i]),
                };
                if (ohlPresent) {
                    barValue.open = Number(response.o[i]);
                    barValue.high = Number(response.h[i]);
                    barValue.low = Number(response.l[i]);
                }
                if (volumePresent) {
                    barValue.volume = Number(response.v[i]);
                }
                bars.push(barValue);
            }
        }
        resolve({
          bars: bars,
          meta: meta,
        });
        
        _this.self.getBars(resolution,bars[bars.length-1],onLoadedCallback);
      })
    }).then(data => {
      onDataCallback(data.bars,data.meta)
    });
  }

  /**
   * 订阅K线数据。图表库将调用onRealtimeCallback方法以更新实时数据
   * @param {*Object} symbolInfo 商品信息
   * @param {*String} resolution 分辨率
   * @param {*Function} onRealtimeCallback 回调函数 
   * @param {*String} subscriberUID 监听的唯一标识符
   * @param {*Function} onResetCacheNeededCallback (从1.7开始): 将在bars数据发生变化时执行
   */
  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    // this.barsUpdater.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback);
    this.subscribers[subscriberUID] = {
      lastBarTime: null,
      listener: onRealtimeCallback,
      resolution: resolution,
      symbolInfo: symbolInfo
    }

  }

  /**
   * 取消订阅K线数据
   * @param {*String} subscriberUID 监听的唯一标识符
   */
  unsubscribeBars(subscriberUID) {
    delete this.subscribers[subscriberUID]
    //this.barsUpdater.unsubscribeBars(subscriberUID)
  }


}

export default datafeeds