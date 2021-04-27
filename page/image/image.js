// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: ''
  },
  handleChooseAlbum () {
    wx.chooseImage({
      success: (res) => {
        const { tempFilePaths } = res
        this.setData({
          images: tempFilePaths
        })
      },
    })
  },
  handleImageLoad () {
    console.log('图片加载完成')
  }
})