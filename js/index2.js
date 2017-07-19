/**
 * Created by Qx on 2017/7/19.
 */
//局部组件
var myComponent=Vue.extend({
    template:'<span>this is 另一种创建组件</span>'
});
new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js!',
        msg:'这是一个消息',
        mtitle:'这是一个提示信息'+ new Date(),
        projname:'Proj name One !',
        arr:['红茶','绿茶','雪碧','可乐'],
        json:{a:'红茶',b:'绿茶',c:'雪碧',d:'可乐'},
        isShow:true
    },
    methods:{
        reverseMessage:function () {
            this.projname=this.projname.split('').reverse().join('');
        },
        show:function () {
            alert("点击显示！");
        },
        hide:function () {
            this.isShow=false;
        },
        isEvent:function (ev,a) {
            alert(ev.clientX);
            alert(a);
        },
        show2:function () {
            alert(2);
        },
        show3:function (ev) {
            alert(4);
            ev.cancelBubble=true;
        },
        show4:function () {
            alert(4);
        },
        show5:function (ev) {
            alert("右击显示");
            ev.preventDefault();
        },
        showKey:function (ev) {
            if(ev.keyCode==13){
                alert("回车已按！");
            }else {
                alert(ev.keyCode);
            }
        },
        showEnter:function () {
            alert("回车已按！");
        }

    },
    //局部注册组件
    components:{
        'todo-item': {
            template: '<p>这是一个组件</p>',
            props: ['todo']
        },
        'my-component':myComponent
    }
});