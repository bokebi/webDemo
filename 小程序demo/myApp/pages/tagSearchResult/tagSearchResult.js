
//接口说明：豆瓣电影正在热映中
var API_URL = 'https://api.douban.com/v2/movie/search?q=';
var TAG_URL = 'https://api.douban.com/v2/movie/search?tag='
Page({
  data: {
    movies:[]
  },
  onLoad:function (params){
    var keyword = params.keyword;
    console.log(keyword);
    var that = this;
    //2、进入后显示loading状态
    wx.showToast({
      title:"加载中",
      icon:"loading",
      duration:5000
    });
    //3、发送数据请求
    wx.request({
      url: TAG_URL + keyword,
      data: {},
      header: {
        'Content-Type' : 'application/json,application/json'
      },
      success: function(resp){
          wx.hideToast();
          var data = resp.data;
          that.setData({
            movies:resp.data.subjects
          });
          console.log(resp.data);
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
