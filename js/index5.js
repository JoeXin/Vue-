/**
 * Created by Qx on 2017/7/22.
 */
Vue.filter('filterHtml',{
    read:function(input) {
        input.replace(/<[^<]+>/g,'');
    },
    write:function(val){
       console.log(val);
    }});
new Vue({
    el:'#app',
    data:{
        msg:'<strong>welcome</strong>',
        a:'<div>sdfsdf</div>',
        message:12
    },
    created:function () {
        alert("实例已经创建")
    },
    beforeCompile:function () {
        alert("编译之前")
    },
    compiled:function () {
        alert("编译之后")
    },
    ready:function () {
        alert("插入到文档中")
    },
    beforeDestroy:function () {
        alert("销毁之前")
    },
    destroyed:function () {
        alert("销毁之后")
    }
});
document.onclick=function () {
    
}