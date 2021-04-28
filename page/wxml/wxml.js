// page/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "你好 小程序",
    firstName: 'z',
    lastName: 'zhw',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['喜洋洋', '熊出没', '小猪佩奇'],
    nums: [
      [1, 32, 235, 235, 25],
      [25,252,3636,252,36],
      [325, 235,35,252,3,253]
    ],
    letter: ['a', 'b', 'c', 'd']
  },
  onLoad () {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleChageColor () {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow () {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleAddCounter () {
    this.setData({
      score: this.data.score + 6
    })
  }

})