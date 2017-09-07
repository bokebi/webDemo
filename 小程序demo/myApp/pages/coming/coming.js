//接口说明：豆瓣电影即将上映电影接口
var API_URL = 'https://api.douban.com/v2/movie/coming_soon';
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
            movies:data.subjects
          });
          // console.log(resp.data);
      }
    });
  },
  detailTap: function (e) {
        //一个film的tap事件 filmList   filmItem catchtap处理函数，
        // bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。
        //id 通过data-id在wxml中绑定
        var id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: "../movie/movie?id=" + id
        })
  }
})
