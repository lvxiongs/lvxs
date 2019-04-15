/*
 * @Author: xiaoshui.candy 
 * @Date: 2019-01-25 17:09:48 
 * @Last Modified by: xiaoshui.candy
 * @Last Modified time: 2019-01-25 17:12:15
 */

<template>
   <!-- 404页面 -->
   <div class="error-page">
      <img src="../assets/img/noinfo.png" alt="">
      <p>程序员小哥哥正在努力开发中...</p>
   </div>
</template>

<script>
export default {
   name: 'error-page',
   data() {
       return {}
   },
   created(){
    document.title = '今日云彩'
  },
}
</script>

<style scoped lang="less">
      /* 404 */
      .error-page{
        height:100vh;
        background-color: #fff;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        img{
          width:2rem;
          height:2.1rem;
          margin-bottom:0.3rem;
        }
        p{
          font-size:0.28rem;
          color:#999;
        }
      }
</style>
