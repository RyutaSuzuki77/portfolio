<template>
  <div class="about">
    <Pagetitle pagetitle="About"></Pagetitle>
    <table>
      <tbody>
        <tr v-for="line in table">
          <td v-for="(item) in line">
            <p v-if="item.indexOf('<a') !== -1">
              <a v-html="item"></a>
            </p>
            <p v-else>
              {{item}}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Pagetitle from '@/components/Pagetitle.vue'

export default{
  name:'about',
  data(){
    return{
      table:[
        ['Name','Suzuki Ryuta'],
        ['NickName','Dragon'],
        ['Birthday','1994-09-25'],
        ['License','Java SE8 Silver, 普通免許(AT)'],
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