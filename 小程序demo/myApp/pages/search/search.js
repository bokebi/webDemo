// 接口说明 https://api.douban.com/v2/movie/search?q=搜索内容
var API_URL = 'https://api.douban.com/v2/movie/search';
Page({
    data:{
        movies:[],
        hotKeyword: ['功夫熊猫', '烈日灼心', '摆渡人', '长城', '我不是潘金莲', '这个杀手不太冷', '驴得水', '海贼王之黄金城', '西游伏妖片', '我在故宫修文物', '你的名字'],
        hotTag: ['动作', '喜剧', '爱情', '悬疑']
    },
    // 1、主搜索函数
    search:function(e){
        // 先判断输入框里面是否为空，为空则退出，不为空则执行搜索操作
        if(!e.detail.value){
            return;
        }else{
            wx.showToast({
                title:'加载中',
                icon:'loading',
                duration:3000
            });
            var that = this;
            // 请求数据
            wx.request({
                // url : API_URL + '?q=' + e.detail.value,
                url : API_URL + '?q=' + e.detail.value.keyword,
                data:{},
                header:{
                    'Content-Type' : 'application/json,application/json'
                },
                success: function(resp){
                    console.log(resp.data);
                    that.setData({
                        movies : resp.data.subjects
                    });
                }
            });
        }
    },
    //2、 热门搜索函数
    searchByKeyword: function (e) {
        var that = this
        var keyword = e.currentTarget.dataset.keyword
        wx.navigateTo({
            url: '../searchResult/searchResult?url=' + encodeURIComponent(API_URL) + 'q=&keyword=' + keyword
        })
    },
    //3、 标签搜索函数
    searchByTag: function (e) {
        var that = this
        var keyword = e.currentTarget.dataset.keyword
        wx.navigateTo({
            url: '../tagSearchResult/tagSearchResult?url=' + encodeURIComponent(API_URL) + 'tag=&keyword=' + keyword
        })
    }
});

