<template>
    <header>
         <div class="top"><img src="../../static/images/banner-2.png"/></div>
         <div class="bottom">
              <span><img src="../../static/images/avatar.jpg"/></span>
              <h3>爱时尚精品屋</h3>
           <p>公告：欢迎光临,流行爆款库存有限请尽早下单,谢谢.</p>
         </div>
    </header>
</template>
<script>
    export default {
        props: {},
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        created() {

        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
     header{
       width:100%;
       height: 50%;
       .top{
         width: 100%;
         position: relative;
         img{
           width:100%;
         }
       }
       .bottom{
         width:100%;
         height: 100px;
         display: flex;
         flex-direction: column;
         /*justify-content: center;*/
         align-items: center;
         font-size:14px;
         position: absolute;
         top:15%;
          span{
            width:80px;
            height: 80px;
            border-radius: 50%;
              img{
                width: 100%;
                border-radius: 50%;
                border:1px solid #eee;
              }
          }
       }
     }
</style>
