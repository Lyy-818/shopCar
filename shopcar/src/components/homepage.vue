<template>
    <div class="content">
      <Header></Header>
      <main>
        <ul class="sort">
          <li @click="upFn">价格升序</li>
          <li @click="downFn">价格降序</li>
          <li @click="numUp">销量升序</li>
          <li @click="numDown">销量降序</li>
        </ul>
        <div class="list-data">
            <List v-for="item in goodList" :key="item.id" :Item="item"></List>
        </div>
      </main>
    </div>
</template>
<script>
  import Header from "../components/header"
  import List from "../components/list"
    export default {
        props: {

        },
        components: {
          Header,List
        },
        data() {
            return {
              goodList:[]
            }
        },
        computed: {},
        methods: {

          //价格升序
          upFn(){
            this.goodList.sort((a,b)=>{
              return a.price - b.price;
            })
          },
        // 价格降序
          downFn(){
            this.goodList.sort((a,b)=>{
              return b.price - a.price;
            })
          },
          numUp(){
            this.goodList.sort((a,b)=>{
              return a.buyCount - b.buyCount;
            })
          },
          numDown(){
            this.goodList.sort((a,b)=>{
              return b.buyCount - a.buyCount;
            })
          }
        },
        created() {
            this.$axios.get("/api").then((res)=>{
                 this.goodList = res.data.goodList
            })
        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
  .content{
    width:100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  main{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
.sort{
  width:100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
  .list-data{
    width:100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
</style>
