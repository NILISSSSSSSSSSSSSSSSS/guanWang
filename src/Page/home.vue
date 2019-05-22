<template class="template"  >

<div>
      <div class="bannerBox"  >
        <div class="bannerWrapper commonWidth">
          <h3 class="tit1">
            OTCEX Saas云 
          </h3>
            <p class="tit2">
           全球首个为区块链金融落地、流动性支撑、衍生品创新设计的自主化软件服务云系统。
            </p>
            <div class="more" @click="$router.push({path: '/destruction'})">
                了解更多
            </div>
        </div>
      </div>
      <!--  -->
      <div class="sectionWhite">
          <div class="commonWidth">
              <h3 class="section_tit">OTCEX-Saas云服务</h3>
              <h3 class="section_p">
                   OTCEX Saas是为增强全球范围数字币资产流动性服务、为资产安全服务的金融系统开放云。
              </h3>
              <div class="sectionBottom">
                  <div class="sectionColumn">
                      <img src="../assets/5.png" alt="" >
                      <p>混合交易云计算</p>
                  </div>
                  <div class="sectionColumn">
                        <img src="../assets/../assets/2.png" alt="" >
                        <p>混合交易与风控</p>
                    </div>
                    <div class="sectionColumn">
                            <img src="../assets/../assets/7.png" alt="" >
                            <p>高自由度易配置的金融应用落地</p>
                    </div>
                  <div class="sectionColumn">
                        <img src="../assets/4.png" alt="" >
                        <p>多种金融应用场景无缝对接</p>
                    </div>
              </div>
          </div>  
      </div>
      <!-- 第三屏 -->
     <div class="sectionBlack">
            <img src="../assets/line.png"  class="line" alt="">
            <div class="commonWidth dianWrapper">
                <h3 class="section_tit">OTCEX-Saas云应用场景</h3>
                <h3 class="section_p">
                     OTCEX SaaS云通过对金融业务的合理拆分，用户可通过自由组合实现多种金融场景落地。
                </h3>
                <div class="textBann">
                    <div class="smallQiu smallPosition1"></div>
                    <div class="smallQiu smallPosition2" style=""></div>
                    <div class="smallQiu smallPosition3"></div>
                    <div class="smallQiu smallPosition4"></div>
                    <div class="smallQiu smallPosition5"></div>
                    <div class="smallQiu smallPosition6"></div>
                    <div class="smallQiu smallPosition7"></div>
                     <p class="dianText"> <span class="circle "></span> 数字币支付</p>
                    <p class="dianText position2"> <span class="circle "></span> P2P融资理财</p>
                    <p class="dianText position3"> <span class="circle "></span> 数字币交易市场</p>
                    <p class="dianText position4"> <span class="circle "></span> 个人基金理财</p>
                    <p class="dianText position5"> <span class="circle "></span> 转账和汇款</p>
                    <p class="dianText position6"> <span class="circle "></span> 期货交易市场</p>
                </div>
            </div>  
        </div>
        <!-- 第四屏幕 -->
      <div class="sectionWhite sectionWhite2">
            <div class="commonWidth">
                <h3 class="section_tit">otcex云服务和传统金融解决方案的差别</h3>
                <h3 class="section_p">
                     OTCEX系统可以更好的适应多变的金融市场业务调整需求，提供体系化的安全解决方案，并通过赋予的云支付、云计算等能力实现单一场景的流动性扩容和应用普及。
                </h3>
                <div class="sectionBottom">
                    <div class="sectionColumn">
                        <img src="../assets/3.png" alt="" >
                        <p>更好的金融流通性</p>
                    </div>
                     <div class="sectionColumn">
                          <img src="../assets/2.png" alt="" >
                          <p>更丰富.易部署的落地实施方案</p>
                      </div>
                      <div class="sectionColumn">
                              <img src="../assets/1.png" alt="" >
                              <p>更系统化的安全解决方案</p>
                      </div>
                      <div class="sectionColumn">
                          <img src="../assets/6.png" alt="" >
                          <p>拥有专业的技术、运营支撑</p>
                      </div>
                </div>
            </div>  
        </div>
   </div>
</template>

<script>



   let dateArray;
    export default {
      name: 'homeView',
      data:function(){
         return{

         }
      },
   
      mounted(){
          if(window.screen.availWidth<=768){
             document.getElementsByClassName("textBann")[0].style.width="900px"
           }
      },
     
      methods:{
   
  
      }
    }
</script>

<style scoped lang="scss">
.sectionBlack{
    position: relative
}

.smallQiu{
    width: 0px;
    height: 1px;
    background: #46ece4;
    border-radius: 50%;
    box-shadow: 0 0 20px 4px #46ece4;
    box-shadow: 0 0 15px 3px #46ece4;
    position: absolute;
    top: 340px;
    left: 300PX;
     animation: smallDh 3s alternate infinite;
}

.smallPosition1{
    left: -30px;
    top: 425px;
    box-shadow: 0 0 15px 6px #46ece4;
    box-shadow: 0 0 10px 5px #46ece4;
   animation: unset;
    animation: unset;
}
.smallPosition2{
    left: 699px;
    top: 58px;
    box-shadow: 0 0 13px 3px #46ece4;
    box-shadow: 0 0 13px 5px #46ece4;
    animation: 0;
    animation: 0;
}
.smallPosition3{
left:1750px;top:400px
}
.smallPosition4{
    left: 1384px;
    top: -7px;
    box-shadow: 0 0 12px 5px #46ece4;
}
.smallPosition5{
    left: 1300px;
    top: 400px;

    box-shadow: 0 0 13px 6px #46ece4;
}
.smallPosition6{
       top: 129px;
    left: -301px;
   animation: unset;
    box-shadow: 0 0 15px 5px #46ece4;
}
.smallPosition7{
    box-shadow: 0 0 10px 3px #46ece4;
    top: 180px;
    left: 521PX;
}
.dianWrapper{
    padding-left: 94px;
}

.circle:after{
    content:"";
    position: absolute;
    left: 0;
    top:0;
    
}
.circle, .circle:after{
    width: 15px;
    height: 15px;
    display: inline-block;
    border-radius: 50%;
    background: rgba(70, 236, 228,1);
        margin-right: 10px;
}
.circle{
    position: relative;
   animation: dh 2s alternate infinite;
}
// 小球光晕动画
@keyframes dh {
    from{
    background: rgba(70, 236, 228,1);
    /* transform: scale(1.5); */
    box-shadow: 0 ;
    }
    to{
    background: rgba(70, 236, 228,.1);
    /* transform: scale(2.5); */
    box-shadow: 0 0 5px 13px rgba(70, 236, 228,.2);
    }
}

// 小球移动动画
@keyframes smallDh {
    from{
     transform: translate(0,0)
    }
    to{
     transform: translate(-5px,-5px)
    }
}

.dianText{ 
       position: absolute;
    // font-family: PingFangSC-Medium;
    font-size: 22px;
    color: #FFFFFF;
    left: 93px;
   top: 105px;
   LETTER-SPACING: 2PX;
}
.position2{
    left: 334px;
    top: 280px;
    font-size: 22px;

    .circle{
       animation-delay: .5s;
    }
}
.position3{
    top: auto;
        bottom: 6px;
    left: 485px;font-size: 20px;

    .circle{
        animation-delay: 2s;
    }
}
.position4{
    bottom: auto;
    left: auto;
    right: 260px;
    font-size: 20px;
    top: 150px;
     .circle{
         animation-delay: 3s;
    }
}
.position5{
       bottom: auto;
    left: auto;
    right: 75px;
    font-size: 20px;
    top: 290px;
}
.position6{
       bottom: auto;
    left: auto;
    right: 20px;
    font-size: 18px;
    top: 55px;
}



  .bannerBox {
        height: 556px;
          background: url(../assets/bannerBg.jpg) no-repeat bottom right;
        background-size: cover;  
    }
    .bannerWrapper{
      display: flex;height: 100%;
          height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;

             
    }
    .tit1{

            margin-top: 50px;
          margin-bottom: 48px;
        font-size: 48px;
        color: white;
    
        letter-spacing: 4px;
    line-height: 48px;
            width: 100%;
    text-align: left;
    }
    .tit2{
          width: 467px;
        height: 48px;
        text-align: left;
        color: #FFFFFF;
        letter-spacing: 1px;
        line-height: 24px;
        margin-bottom: 78px;
        margin-left: 0px;
    }
    .more{
      text-align: center;
      width: 200px;height: 40px;color: white;
      background: #157FFC;
      line-height: 40px;
      border-radius: 40px;
      cursor: pointer;
      align-self:flex-start;
    }
    .sectionWhite{
             padding: 127px 0 116px 0;
        text-align: center;
         
          
    }
    .sectionWhite2{
         padding-bottom: 97px;
    }
    .section_tit{
        // font-family: PingFangSC-Medium;
        font-size: 36px;
        color: #333333;
        letter-spacing: 3px;
        line-height: 46px;
        margin-bottom: 35px;
    }
    .section_p{
        // font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 1px;
        line-height: 26px;
        width:724px;;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .sectionBottom{
        display: flex;
        justify-content: space-around;

    }
    .sectionColumn{
       width: 264px;
    background: #FFFFFF;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 45px 61px 54px 61px;
    height: 260px;

    }
    .sectionColumn>img{
        width: 130px;
        height: 130px;
        margin-bottom: 20px;
    }
    .sectionColumn>p{
        // font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        letter-spacing: 1px;
        text-align: center;
    }
    .sectionWhite2 .sectionColumn{
             box-shadow: 0 0;
                 background: transparent;
    }
    .sectionBlack{
           position: relative;
           padding-top: 137px;
            height: 768px;
            box-sizing: border-box;
             background: url(../assets/service.jpg) no-repeat bottom right;
            background-size: cover;  
             overflow: hidden;
         .textBann{
             width: 1200px;
             position: absolute;
            height: 440px;
               bottom: 70px;
            margin-left: 0;
        
            margin-left: 2px;
           
        }
         .line{
              bottom: 0;
            position: absolute /* width: 100%; */ /* height: 100%; */;
         }
         .textBann,.line{
           left: 50%;
            transform: translate(-50%);
         }
        .section_tit,.section_p{
            text-align: left;
        }
        .section_tit{
            color: white;margin-bottom: 30px;
        }
        .section_p{
            margin-left: 0px;    color: #b2b8b8;width: 790px;
        }
    }
    .sectionWhite{
        background: url(../assets/earth.jpg) no-repeat top center;
        background-size: 938px 467px;
        // background-size: cover;
    }


      @media screen and (max-width: 768px) {
        .sectionBlack .textBann{
            width: 800px!important;
        }
      }
</style>