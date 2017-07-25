//index.js
//获取应用实例
var app = getApp()
// Page() 函数用来注册一个页面
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    // 打开新页面,调用API wx.navigateTo()
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

