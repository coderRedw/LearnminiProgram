// page/home/home.js
const app = getApp()
const { name, age } = app.globalData
console.log(name)
console.log(age)

Page({
  data: {
    list: []
  },
  handleGetUserInfo (event) {
    console.log(event)
  },
  // 页面被加载出来
  onLoad () {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  }
})
