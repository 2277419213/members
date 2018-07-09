// pages/management/management.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hybh: '',
    je: '',
    sfcz: false,
    sfcztext: '消费'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  srbh: function(e) {
    console.log(e.detail.value)
    this.setData({
      hybh: parseInt(e.detail.value)
    })
  },

  srje: function(e) {
    console.log(e.detail.value)
    this.setData({
      je: parseInt(e.detail.value)
    })
  },

  switch1Change: function(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    if (e.detail.value == true) {
      this.setData({
        sfcz: e.detail.value,
        sfcztext: '充值'
      })
    } else {
      this.setData({
        sfcz: e.detail.value,
        sfcztext: '消费'
      })
    }

  },



})