<template>
  <div class="portfolio">
    <Pagetitle pagetitle="Portfolio"></Pagetitle>
    <div class="box">
      <button onclick="window.open('https://twitter.com/dragonnn16?lang=ja')">
        <img src="@/assets/Portfolio1.png">
        <p>ポートフォリオ</p>
        <p>Vue.js+VueRouter</p>
      </button>
    </div>
  </div>
</template>

<script>
import Pagetitle from '@/components/Pagetitle.vue'

export default{
  name:'pagetitle',
  components:{
    Pagetitle
  }
}
</script>

<style lang="scss">
.portfolio{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-135deg, #E4A972, #9941D8);
}
.portfolio .box{
  display: flex;
  width: 300px;
  margin: 30px;
  flex-direction: column;
  flex-wrap: wrap;
}
.portfolio button{
  border-radius: 20px;
  border: solid 10px;
}
</style>