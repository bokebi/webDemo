App({
  getUserInfo:function(e){
    var that = this
    if(this.globalData.userInfo){
      typeof e == "function" && e(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof e == "function" && e(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo: null
  }
})