var app = getApp()
Page({
  data: {
    userInfo: {},
    imgUrls: [
      {
        url: ' http://www.yunysr.com/uploads/focus_img/201610/1477717082912145995.jpg',
        txt: '连接一切艺术人'

      },
      {
        url: 'http://www.yunysr.com/uploads/focus_img/201609/1475198242690217409.jpg',
        txt: '小旭音乐'
      },
      {
        url: 'http://www.yunysr.com/uploads/focus_img/201611/1479783276420045364.jpg',
        txt: '可可小爱火热招聘中'

      },
      {
        url: 'http://www.yunysr.com/uploads/focus_img/201609/1474459040920995091.jpg',
        txt: '精准匹配'
      },
      {
        url: 'http://www.yunysr.com/uploads/focus_img/201610/1476150542968586071.jpg',
        txt: '身临其境诚招VR'
      }
    ],
    // 需不需要导航小点
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  onLoad: function(){
    var ths = this;
    app.getUserInfo(function(userInfo){
      ths.setData({
        userInfo: userInfo
      })
    })
  }
})