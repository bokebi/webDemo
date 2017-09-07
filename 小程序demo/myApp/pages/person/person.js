var API_URL = 'https://api.douban.com/v2/movie/celebrity/'
//接口说明：https://api.douban.com/v2/movie/celebrity/12345 => 获取该导演/演员的基本信息
Page({
    data: {
        personDetail: {}
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
                    personDetail : resp.data
                });
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
