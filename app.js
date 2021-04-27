// 一开始进入时，就会调用和APP这个函数
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   *    生命周期函数；后台存活2个小时
   */
  onLaunch: function () {
    console.log("小程序初始化完成：onLaunch ")
    // 异步调用 获取用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success (res) {
        console.log(res)
      }
    })
    // setTimeout(() => {
    //   throw Error()
    // }, 2000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   *  小程序界面显示出来之后 会执行的生命周期函数
   */
  onShow: function (options) {
    console.log("界面显示出来； onShow ")
    console.log(options)  // 判断小程序的进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时执行：onHide ")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序中发生了一些错误会执行：onError ")
  },
  globalData: {
    name: "zhw",
    age: 20
  }
})
