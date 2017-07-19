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
            this.projname=this.projname.split('').reverse().join('')
        },
        show:function () {
            alert("点击显示！")
        },
        hide:function () {
            this.isShow=false;
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