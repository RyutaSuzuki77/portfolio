<template>
  <div class="about">
    <Pagetitle pagetitle="About"></Pagetitle>
    <div class="profile">
      <img src="@/assets/profile.jpg" alt="プロフィール画像">
      <table id="table">
        <tbody>
          <tr v-for="(line, index) in table" :key="index">
            <td v-for="(item, index) in line" :key="index">
              <div v-if="item.indexOf('<a') !== -1">
                <p v-html="item"></p>
              </div>
              <p v-else>
                {{item}}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Pagetitle from '@/components/Pagetitle.vue'

export default{
  name:'about',
  data(){
    return{
      table:[
        ['名前','鈴木 龍太'],
        ['ニックネーム','ドラゴン'],
        ['生年月日','1994-09-25'],
        ['資格','Java SE8 Silver, 普通免許(AT)'],
        ['Github','<a href="https://github.com/RyutaSuzuki77">RyutaSuzuki77</a>'],
        ['Qiita','<a href="https://qiita.com/dragonnn">dragonnn</a>']
      ]
    }
  },
  components:{
    Pagetitle
  }
}
</script>

<style lang="scss">
.about{
  background: linear-gradient(-135deg, #E4A972, #9941D8);
  width: 100vw;
  height: 100vh;
}
#table{
  font-size: 20px;
}
.profile{
  text-align: center;
  margin: 30px;
}
.profile #table{
  display:inline-block;
  vertical-align: middle;
}
.profile img{
  width:20%;
  height:20%;
  margin: 50px;
  display: inline;
  vertical-align: middle;
  border-radius: 50%;
}
</style>