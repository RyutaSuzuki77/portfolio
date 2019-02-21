<template>
  <div class="contact">
    <Pagetitle pagetitle='Contact'></Pagetitle>
    <p id="message">twitter又はfacebookでコンタクトを取ってください</p>
    <div class="image_block">
      <button id="twitter_button" onclick="window.open('https://twitter.com/dragonnn16?lang=ja')">
        <img id="twitter_img" src="@/assets/twitter.png">
      </button>
      <button id="facebook_button" onclick="window.open('https://www.facebook.com/ryuta.bump')">
        <img id="facebook_img" src="@/assets/facebook.png">
      </button>
    </div>
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

<style lang="scss">
.contact{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-135deg, #E4A972, #9941D8);
}
.contact #message{
  margin-top: 50px;
  text-align: center;
  font-size: 30px;
}

.contact #facebook_img, #facebook_button{
  border-radius: 50px;
  margin: 30px;
}
.contact #facebook_img, #twitter_img:hover{
  cursor: pointer;
}
.contact #facebook_button{
  border: 0;
  background: none;
}
.contact #twitter_button{
  border-radius: 50px;
  background: none;
  border: 0;
}
.image_block{
  display: block;
  vertical-align: middle;
  text-align: center;
}
</style>