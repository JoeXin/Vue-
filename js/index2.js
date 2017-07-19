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
        mtitle:'这是一个提示信息'+ new Date(),
        projname:'Proj name One !'
    },
    methods:{
        reverseMessage:function () {
            this.projname=this.projname.split('').reverse().join('')
        }
    },
    //局部注册组件
    components:{
        'todo-item':{
            template:'<p>这是一个组件</p>',
            props:['todo']
        },
        'app-nav':{
            template:'<div>导航信息' +
            '<ol>'+
            '<li class="col-md-3" >目录一</li>' +
            '<li class="col-md-3" >目录二</li>' +
            '<li class="col-md-3" >目录三</li>' +
            '</ol></div>'
        },
        'my-component':myComponent
    }
});