

var headerTemplate = `<div class="menu_box">
         <a v-for="(item,index) in menus" :key="index" @click="chooseMenu(item.url)" :class="{'choose':menu==index}">
          <img :src="item.icon" class="icon">
          <img :src="item.choose" class="selected">
          <p>{{item.name}}</p>
        </a>
      </div>`
Vue.component('bottom-menu', {
    template: headerTemplate,
    props:['menu'],
    data() {
        return {
            menus:[
                {
                    name:'首页',
                    url:'../index/index.html',
                    icon: '../../static/img/menu/index.png',
                    choose: '../../static/img/menu/index1.png'

                },{
                    name:'客服',
                    url:'../customer/customer.html',
                    icon: '../../static/img/menu/customer.png',
                    choose: '../../static/img/menu/customer1.png'
                },{
                    name:'首页',
                    url:'../home/home.html',
                    icon: '../../static/img/menu/home.png',
                    choose: '../../static/img/menu/home1.png'
                },
            ]
        }
    },
    mounted(){

    },
    methods: {
        chooseMenu(url) {
            window.location.href = url;
        }
    }
})
