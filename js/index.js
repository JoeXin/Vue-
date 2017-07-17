/**
 * Created by Qx on 2017/7/17.
 */
//局部组件
var myComponent=Vue.extend({
    template:'<span>this is 另一种创建组件</span>'
})
var module={
    id:'',
    name:''
};
new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js!',
        mtitle:'这是一个提示信息'+ new Date(),
        projname:'Proj name One !',
        edit:true,
        module:module,
        items:[
            { name:"西游记",id:1},
            { name:"水浒传",id:2},
            { name:"三国演义",id:3},
            { name:"红楼梦",id:4}
        ]
    },
    methods:{
        insert:function(){
            this.items.push({name:this.module.name,id:this.module.id})
            this.module.name='';
            this.module.id='';
        },
        del:function (item) {
            var index=this.items.indexOf(item);
            this.items.splice(index,1)
        },
        update:function () {
           this.edit=false;
        },
        save:function (item) {
            item.name=item.name;
            item.id=item.id;
            this.edit=true;
        },
        reverseMessage:function () {
            this.projname=this.projname.split('').reverse().join('')
        },
        openTagModalCheck:function(tag){
            //console.info(tag)
            //打开模态框的要求
            this.showModalCheck = true;
            this.selectTagCheck = tag;
        },
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
                      '<li class="col-md-3" style="float: left">目录一</li>' +
                      '<li class="col-md-3" style="float: left">目录二</li>' +
                      '<li class="col-md-3" style="float: left">目录三</li>' +
                      '</ol></div>'
        },
        'app-view':{
            template:'<div><p>视图</p></div>',
            components:{
                'app-sidebar':{
                    template:'<div>边框信息内容</div>'
                },
                'app-content':{
                    template:'<div>文章信息内容</div>'
                },
            }
        },
        'modal-check':{
            props: ['myTagCheckL'],
            template: '#modal-template-check'
        },
        'my-component':myComponent
    }
})