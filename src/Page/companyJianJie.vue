<template class="template"  >
<div>
      <div class="serviceBox"  >
        <div class="serviceWrapper commonWidth">
          <h3 class="tit1">
            恒安金链
          </h3>
            <p class="tit2">
            以技术推动区块链金融落地、以安全为立身根本、以易用为服务宗旨，为全球范围的金融流动性和区块链服务
            </p>
       
        </div>
      </div>
         <div class="titBox2">
            <div class="titName">
                <h3 >
                    公司简介
                </h3>
                <div class="hengLine">
                    <p>COMPANY INTRODUCTION</p>
                </div>
            </div>
         </div>
         <div class="serviceCon">
             <div class="service_row commonWidth">
                    <p class="destructionImg"></p>
                    <!-- <img src="../assets/companyDestruction1.jpg" alt=""> -->
                    <div >
                       恒安金链,是新加坡OTCEX Ltd在成都设立的研发中心，
                       是全球首家从事区块链金融解决方案及Saas云提供商，专注于区块链及数字资产的金融落地及相关金融衍生品的系统研发。
                    </div>
             </div>
                <div class="service_row service_row2 commonWidth">
                       <div >
                       OTCEX由极客资本 、iTechBlack联合投资，在成都、杭州、香港、新加坡设有分支机构，
                       以加强全球范围内数字资本流动性，推进区块链落地为己任，为全球范围内的金融服务、支付服务提供易用、安全的成套解决方案。
                    </div>
                     <p class="destructionImg2"></p>
                     <!-- <img src="../assets/companyDestruction2.jpg" alt=""> -->
                 
             </div>
               <div class="titBox2">
                <div class="titName">
                    <h3 >
                        公司环境
                    </h3>
                    <div class="hengLine">
                        <p>COMPANY ENVIRONMENT</p>
                    </div>
                </div>
            </div>
            <!-- 轮播 -->
               <div class="lunBoWrapper">
                   <div class="lunBo ">
                 <!--div swiper1 -->
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <swiper-slide class="slide-4"></swiper-slide>
                         <swiper-slide class="slide-5"></swiper-slide>
                        <swiper-slide class="slide-6"></swiper-slide>
                        <swiper-slide class="slide-7"></swiper-slide>
                        <swiper-slide class="slide-8"></swiper-slide>
                  
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <swiper-slide class="slide-4"></swiper-slide>
                         <swiper-slide class="slide-5"></swiper-slide>
                        <swiper-slide class="slide-6"></swiper-slide>
                        <swiper-slide class="slide-7"></swiper-slide>
                        <swiper-slide class="slide-8"></swiper-slide>
                    </swiper>
                      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </div>
                   <div class="addressBox">
                        <h3 class="room">办公大楼</h3>
                        <p class="address">四川省成都市武侯区银泰城17栋8楼</p>
                   </div>
               </div>
            <!--  -->
         
             <div class="titBox2">
                    <div class="titName">
                <h3 >
                   加入我们
                </h3>
                <div class="hengLine">
                    <p>JOIN US</p>
                </div>
           </div>
           <div class="join">
               <h3>
                   欢迎优秀的你的加入
               </h3>
               <p>
                   电话：028-86645411
               </p>
               <div onclick="window.open('https://www.lagou.com/gongsi/214704.html')">
                   加入我们
               </div>
           </div>
           

         </div>
     </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionTop: {
           spaceBetween: 14,
          loop: true,
          loopedSlides: 4, //looped slides should be the same
         initialSlide :1,
            width: 741,
        },
        swiperOptionThumbs: {
         spaceBetween: 14,
         centeredSlides:true,
         initialSlide :1,
          slidesPerView: 3,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 4, //looped slides should be the same
          slideToClickedSlide: true,
          direction : 'vertical',

           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed(){
    

    },
    mounted() {
      this.$nextTick(() => {
 


        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style scoped lang="scss">
.destructionImg{

  background: url(../assets/companyDestruction6.jpg) no-repeat center;
  background-size: cover;
}
.destructionImg2{
  background: url(../assets/companyDestruction10.jpg) no-repeat center;
  background-size: cover;
  margin-left: 0!important;
}

    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    
 .serviceBox {
    background: url(../assets/destruction.jpg) no-repeat center;
  background-size: cover;  
}
.addressBox{
        margin-top: 14px;
    text-align: left;
    /* margin-left: 30px; */
    // width: 1046px;

    .room{
        padding-left: 12px;
        line-height: 18px;
        border-left: 2px solid  #333333;
        // font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #333333;
    letter-spacing: 1.33px;
    margin-bottom: 6px
    }
    .address{
    // font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #666666;
    letter-spacing: 1.07px;

    
    }
}


// 

.lunBo{
    display: flex;
    height: 508px;
        justify-content: center;
    margin-top: 80px;
     position: relative;

       .gallery-top {
            height: 100%!important;
            width: 780px; 
            margin-right: 14px;
       
        }
        .swiper-button-prev, .swiper-button-next {
            background-color: #157FFC;
            width: 39px;
            height: 111px;
            background-size: 29px 24px;
            transform: rotate(90deg);
            bottom: -89px;top: auto;
            left: auto;
        }
           .swiper-button-prev, .swiper-button-next {
           
            right: 36px!important;
            left: auto;
        }
        .swiper-button-prev{
            right: 161px!important;
            
        }
        .gallery-thumbs {
            
            box-sizing: border-box;
             margin-left: 0;
        
            height: 100%;
            width: 250px;
        }
        .gallery-thumbs .swiper-slide {
            width: 100%;
            height: 33%;
            // opacity: 0.7;
            background-size: cover;
            position: relative;
        }
        .gallery-thumbs .swiper-slide:after{
          position: absolute;
          content:"";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,.5)
        }
        .gallery-thumbs .swiper-slide-active:after {
            background: transparent;
        }
 }
        
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image:url('../assets/companyDestruction10.jpg');
    }
    &.slide-2 {
     background-image:url('../assets/companyDestruction6.jpg');
    }
    &.slide-3 {
     background-image:url('../assets/companyDestruction11.jpg');
    }
  &.slide-4 {
      background-image:url('../assets/companyDestruction4.jpg');
    }
    &.slide-5 {
     background-image:url('../assets/companyDestruction5.jpg');
    }
    &.slide-6 {
      background-image:url('../assets/companyDestruction9.jpg');
    }
    &.slide-7 {
     background-image:url('../assets/companyDestruction7.jpg');
    }
  &.slide-8 {
      background-image:url('../assets/companyDestruction8.jpg');
    }
  }
.lunBoWrapper{
       max-width: 991px;
    margin: 0 auto;
}
</style>
