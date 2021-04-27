// page/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleScroll (e) {
    console.log("滚动:", e)
  },
  scrolltolower (e) {
    console.log("滚动到顶部，但是是你指定与顶部的距离", e)
  }
})