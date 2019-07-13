<template>
    <div>
        详情
    </div>
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
       beforeCreate(){
         console.log(this.$route.query)
       },

        created() {

        },
        mounted() {

        }
    }
</script>
<style scoped lang="">

</style>
