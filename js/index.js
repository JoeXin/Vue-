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
        module:module,
        isShow:false,
        items:[
            { name:"西游记",id:1,edit:false},
            { name:"水浒传",id:2,edit:false},
            { name:"三国演义",id:3,edit:false},
            { name:"红楼梦",id:4,edit:false}
        ]
    },
    methods:{
        insert:function(){
            if(this.module.name==null||this.module.name==''){
                alert("名称不能为空");
                return
            }
            if(this.module.id==null||this.module.id==''){
                alert("Id不能为空");
                return
            }
            this.items.push({name:this.module.name,id:this.module.id,edit:false});
            if(this.items.length!=0){
                this.isShow=false;
            }
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
        update:function (item) {
            item.edit=true;
        },
        save:function (item) {
            item.edit=false;
        }
    }
});