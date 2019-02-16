<template>
  <div class="pagetitle">
    <h1> {{pagetitle}} </h1>
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