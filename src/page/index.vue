<template>
  <div class="indexBox" style="height: 100%;" >
    <tap-header></tap-header>
    <div >
        <router-view>
        </router-view>
    </div>
    <tap-footer>
    
    </tap-footer>
  </div>

</template>

<style scoped>
  /*@import '../commonStyle/common.css';*/
  .indexBox{
   flex-direction: column;align-items: center;border: 0;    width: 100%;
  }
  .indexBox>.el-container,.el-container>div{
    width: 100%;
  }
  .routerBox{
     box-sizing: border-box;
  }
</style>

<script>
import tapHeader from "../components/tapHeader.vue"
import tapFooter from "../components/tapFooter.vue"
  export default {
    name:"index",
    data(){
      return {
         menuData:[],
        dataAct:true
      }
    },
    components: {
      // <my-component> 将只在父组件模板中可用
      'tap-header': tapHeader,
       'tap-footer': tapFooter
    },
    mounted(){
     this.$nextTick(function () {
    })

    },
    methods:{
    }
  };
</script>
