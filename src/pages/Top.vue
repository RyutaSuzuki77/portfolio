<template>
  <div class="top">
    <Pagetitle pagetitle='Top'></Pagetitle>
    <p id="text">Doragon's Portfolio</p>
  </div>
</template>

<script>
import Pagetitle from '@/components/Pagetitle.vue'

export default{
  name:'top',
  components:{
    Pagetitle
  }
}
</script>

<style lang="scss">
.top{
  background: linear-gradient(-135deg, #E4A972, #9941D8);
  margin:0;
  width: 100vw;
  height: 100vh;
}

#text{
  font-size:100px;
  padding:50px;
  text-align: center;
}
</style>