<template>
  <div class="pagetitle">
    <p> {{pagetitle}} </p>
  </div>
</template>

<script>
export default{
  name:'pagetitle',
  props:{
    pagetitle:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">
.pagetitle p{
  text-align: center;
  margin:0px;
  font-size:50px;

}
</style>