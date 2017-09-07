var API_URL = 'https://api.douban.com/v2/movie/subject/';
// 接口说明：https://api.douban.com/v2/movie/subject/1292063 通过这一条url可以查到对应电影的全部信息
Page({
    data:{
        movie:{}
    },
    onLoad:function(params){
        var that = this;//必不可少
        // console.log(params);
        wx.request({
            //在首页挂上参数
            url: API_URL + params.id,
            data: {},
            method: 'GET',
            header: {
                //豆瓣的请求格式比较奇葩'Content-Type':'application/json,application/json'
                'Content-Type' : 'application/json,application/json'
            },
            success: function(resp){
                console.log(resp.data);
                that.setData({
                    movie : resp.data
                });
            }
        });
    },
    personDetail: function (e){
        //点击导演/演员时跳转到对应的基本信息介绍页 =》 data-id 绑定事件的取值方法
        var id = e.currentTarget.dataset.id;
        wx.redirectTo({
          url: '../person/person?id=' + id
        })
    }

})