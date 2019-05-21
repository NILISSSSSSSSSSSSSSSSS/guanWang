<template>
   <div class="header">
       <div class="commonWidth headerBox">
          <img src="../assets/logo.png" class="logo" alt="">
          <div class="headerRight">
              <template v-for="(item,index) in menu"  >
                 <router-link :to="item.link" >{{item.text}}33333333333333</router-link>
              </template>   
             
             <!-- <router-link to="/destruction" > OTCEX介绍</router-link>
           
              <! <router-link to="/https://www.lagou.com/" > </router-link> -->

                <a href="https://www.lagou.com/gongsi/214704.html" target="_blank">加入我们</a>
          </div>
      </div>
 
   </div>
</template>


<script type="text/ecmascript-6">
  export default {
    name: 'tapHeader',
    data:function(){
      return{
       isActive:0,
       menu:[
         {"link":"/home","text":"首页"},
         {"link":"/companyJianJie","text":"公司简介"},
         {"link":"/destruction","text":"OTCEX介绍"},
         ]
      }
    },
    created(){
    
    },
   

    methods:{
     changeMenu(index){
       this.isActive=index
     }
    

    }
  }
</script>

<style scoped lang="scss">
   .header{
         width: 100%;
        height: 86px;
      //  opacity: 0.2;
       background:rgba(2,26,45,.2);
      position: absolute;
      top: 0;
     left: 0
   }
  
   .headerBox{
         display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    
     a{
       font-size: 14px;color: white;
       margin-right: 20px;
     }
     a:last-child{
       margin-right: 0px;
     }
     a:hover{
       opacity: 0.7;
     }
      .router-link-active{
     opacity: 0.7;
   }
   }
</style>
