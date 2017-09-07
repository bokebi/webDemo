//index.js
//1、 获取豆瓣电影前250名资源
var API_URL = 'https://api.douban.com/v2/movie/top250';
var app = getApp();
Page({
  data: {
    movies:[]
  },
  onLoad:function(){
    var that = this;
    //2、进入后显示loading状态
    wx.showToast({
      title:"加载中",
      icon:"loading",
      duration:5000
    });
    //3、发送数据请求
    wx.request({
      url: API_URL,
      data: {},
      header: {
        //豆瓣的请求格式比较奇葩application/json,application/json
        'Content-Type' : 'application/json,application/json'
      },
      // 请求成功以后隐藏加载框
      success: function(resp){
          wx.hideToast();
          var data = resp.data;
          console.log(data);
          that.setData({
            title:data.title,
            movies:data.subjects
          });
          // console.log(resp.data);
      }
    });
  },
  movieDetail: function (e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
        url:"../movie/movie?id=" + id
    })
  }
})
