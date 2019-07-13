<template>
    <dl @click="detailFn(Item)" >
        <dt><img :src="Item.pic"/></dt>
        <dd>
          <b>{{Item.name}}</b>
          <p>已售：{{Item.buyCount}}件</p>
          <div class="add"><p>单件：<span>￥{{Item.price}}</span></p><button>加入购物车</button></div>
        </dd>
    </dl>
</template>
<script>
    export default {
        props: [
          "Item"
        ],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
          detailFn(Item){
            // console.log(Item.detailLink);
            this.$router.push({path:"/detail/",query:{item:Item}});
          }
        },
        created() {
        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
  dl{
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    dt{
      width:30%;
      img{
        width:100%;
      }
    }
    dd{
      width:70%;
      font-size:16px;
      padding-left:10px;
    }
  }
  .add{
    width:100%;
    display: flex;
    justify-content: space-between;
    span{
      color: tomato;
    }
    button{
      width:100px;
      height: 30px;
      background: tomato;
      border:0;
      list-style: none;
      border-radius: 5px;
    }
  }
</style>
