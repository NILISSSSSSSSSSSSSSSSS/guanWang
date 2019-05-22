<template>
  <div class="footer">
       <div class="footerBox commonWidth">
           <div class="footerColumn">
               <p class="tit">关于我们</p>
               <div class="footerItems"> 
                    <span @click="$router.push({path: '/companyJianJie'})">公司简介</span>
                    <span @click="$router.push({path: '/destruction'})">OTCEX介绍</span>
                    <span  onclick="window.open('https://www.lagou.com/gongsi/214704.html')">加入我们</span>
                 </div>
           </div>

             <div class="footerColumn">
               <p class="tit">联系我们</p>
               <div class="footerItems"> 
                  <span>电话：028-86645411</span>
                  <span>邮箱：service@chainexcloud.com</span>
                 </div>
           </div>
        </div> 
        <p class="banQuan">Copyright © 2018 成都恒安金链科技有限公司</p>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  background: #021a2d;
}
.footerBox {
  padding: 34px 0;
  justify-content: space-around;
  display: flex;
}
.tit {
  color: white;
  letter-spacing: 1.17px;
  margin-bottom: 24px;

  text-align: left;
}
.footerItems > span {
  opacity: 0.7;
  /* font-family: PingFangSC-Medium; */
  cursor: pointer;
  color: #ffffff;
  letter-spacing: 1.17px;
  margin-right: 60px;
}
.footerBox .footerColumn:nth-child(2) span {
  cursor: auto;
}
.tit:hover {
  opacity: 0.7;
}
.footerItems > span:hover {
  opacity: 1;
}
.banQuan {
  line-height: 42px;
  border-top: 1px solid #979797;
  opacity: 0.5;
  /* font-family: PingFangSC-Medium; */
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.17px;
}
.footerColumn {
  text-align: left;
  flex: 1;
}
.footerItems{
    display: flex;
    
}
</style>
<script>
export default {
  mounted() {
    if (window.screen.availWidth < 540) {
        var allBox=document.getElementsByClassName("footerItems");
        for(let i=0;i<=allBox.length;i++){
            allBox[i].style.flexDirection = "column"
        }

    }
  }
};
</script>




