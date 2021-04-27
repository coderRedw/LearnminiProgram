// page/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput (e) {
    console.log("键盘输入时", e)
  },
  handleFocus (e) {
    console.log("input获得焦点", e)
  },
  handleBlur (e) {
    console.log("input失去焦点", e)
  }
})