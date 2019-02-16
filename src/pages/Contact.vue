<template>
  <div class="contact">
    <Pagetitle pagetitle='Contact'></Pagetitle>
    <p>facebook又はtwitterでコンタクトを取ってください</p>
    <button onclick="window.open('https://twitter.com/dragonnn16?lang=ja')">
      <img src="@/assets/twitter.png">
    </button>
    <button onclick="window.open('https://www.facebook.com/ryuta.bump')">
      <img src="@/assets/facebook.png">
    </button>
  </div>
</template>

<script>
import Pagetitle from '@/components/Pagetitle.vue'

export default{
  name:'contact',
  components:{
    Pagetitle
  }
}
</script>
