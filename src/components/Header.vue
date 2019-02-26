<template>
  <div>
    <header class="header">
      <router-link to="/">Top</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/career">Career</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </header>
  </div>
</template>

<style lang="scss">
.header{
  text-align: center;
  padding: 5px;
  font-size:30px;
}
.header a{
  color: #000000;
  margin: 60px;
  text-decoration: none;
}
.header a:hover{
  text-decoration: underline;
}

@media screen and (max-width:479px){
  .header a{
    color: #ffff;
  }
}
</style>