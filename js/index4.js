/**
 * Created by Qx on 2017/7/21.
 */
// 注册
Vue.component('my-component', {
    template:'<div>这个是组件</div>'
});
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    }
});
Vue.component('boy', {
    // 声明 props
    props: ['message'],
    // 就像 data 一样，prop 可以用在模板内
    // 同样也可以在 vm 实例中像“this.message”这样使用
    template: '<span>{{ message }}</span>'
});
Vue.component('girl', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
});
Vue.component('son',{
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
});
var Child={
    template: '<div>A custom component!</div>'
};

// 创建根实例
var vm=new Vue({
    // el:'#app',
    aa:11, //自定义属性
    show:function () {
        alert(1);
    },
    data: {
        items:[
            'a','b','c'
        ],
        isActive: true,
        isShow:false,
        hasError:true,
        parentMsg:'',
        list:'',
        classObject: {
            isShow: true,
            'text-danger': false
        },
        isActives: true,
        error: null,
        activeClass: 'active',
        errorClass: 'text-danger',
        url:'https://www.baidu.com/img/bd_logo1.png',
        w:'200px',
        c:{
            color:'red'
        },
        b: {
            backgroundColor: 'blue'
        },
        aaa:{
            color:'green'
        },
        a:123,
        msg:"信息",
        rawhtml:'<span>原始的html</span>',
        ab:"Welcome",

    },
    computed: {
        classObjects: function () {
            return {
                active: this.isActives && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    },
    methods:{
        add:function () {
            this.items.push('ab');
        }
    },
    components: {
        // <t-child> 将只在父模板可用
        'mt-child': Child
    }
}).$mount('#app');
//手动挂起
console.log(vm.$el);//元素
console.log(vm.$data.a);//就是data
console.log(vm.$options.aa); //自定义属性
vm.$options.show();
// console.log(vm.$log());
