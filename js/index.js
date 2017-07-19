/**
 * Created by Qx on 2017/7/17.
 */
var module={
    id:'',
    name:''
};
new Vue({
    el:'#app',
    data:{
        edit:true,
        module:module,
        isShow:false,
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
            this.items.splice(index,1);
            if(this.items.length==0){
                this.isShow=true;
            }
        },
        update:function () {
           this.edit=false;
        },
        save:function (item) {
            item.name=item.name;
            item.id=item.id;
            this.edit=true;
        }
    }
})