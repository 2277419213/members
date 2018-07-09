// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    glshow: 0,
    show: 0,
    userid: 0,
    zje:0,
    ye:0,
    hybh:0,
    rq:0,
    hym:'',
    hytx:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.BaaS.login(false).then(res => {
      console.log(res)
      this.setData({
        userid: res.id
      })
      this.cx();
    }, res => {})
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
    this.cx();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.cx();
  },

  gl: function() {
    wx.navigateTo({
      url: '../management/management'
    })
  },

  // 查询是否会员
  cx: function() {
    console.log(this.data.userid)
    let query = new wx.BaaS.Query();
    query.compare('created_by', '=', this.data.userid);
    let Product = new wx.BaaS.TableObject(43037);
    Product.setQuery(query).find().then(res => {
      console.log(res)
      if (res.data.objects.length == 0){
        // 不是会员
        this.setData({
          show:0
        })
      }else{
        // 是会员
        this.setData({
          show: 1,
          hym: res.data.objects[0].name,
          hytx: res.data.objects[0].headimg,
          hybh: res.data.objects[0].created_by,
          ye: res.data.objects[0].balance,
          zje: res.data.objects[0].amount,
          glshow: res.data.objects[0].management
        })
      }
    }, err => {
      // err
    })
  },

  // 注册会员
  userInfoHandler(data) {
    wx.BaaS.handleUserInfo(data).then(res => {
      console.log(res);
      let Product = new wx.BaaS.TableObject(43037);
      let product = Product.create();
      let apple = {
        name: res.nickName,
        headimg: res.avatarUrl,
      }
      product.set(apple).save().then(res => {
        console.log(res);
        this.cx()
      })
    }, res => {
      
    })
  }

})