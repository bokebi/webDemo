var helloData = {
    name: "Zhangsan",
    
    message: "数据绑定",
    
    array: [1,2,3,4,5],
    
    view: 'APP',
    
    staffA: { 
        firstName:'张',
        lastName: '三'
    },
    staffB: { 
        firstName:'李',
        lastName: '四'
    },
    staffC: { 
        firstName:'王',
        lastName: '五'
    },

    count: 123,

    a: 1,
    b: 2,
    c: 3,

    length: 7,

    object:{key: '您好：'},
    arr: ['李四'],

    zero: 0,

    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    },

array1: [
    {message:'列表'},
    {message:'渲染'}
], 
array2: [
    {message:'自定义'},
    {message:'列表渲染'}
],     

}

// 注册一个页面
Page({
    data: helloData,

    changeName: function(e){
        //发送数据改变视图
        this.setData({
            name: "张三"
        })
    },

    add: function(e){
        this.setData({
            count: this.data.count + 1
        })
    }
})