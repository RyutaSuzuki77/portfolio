<template>
  <div class="portfolio">
    <Pagetitle pagetitle="Portfolio"></Pagetitle>
    <div>
      <img src="@/assets/logo.png">
      <p>ポートフォリオ</p>
      <p>Vue.js+VueRouter</p>
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