<template>
  <div class="carerr">
    <Pagetitle pagetitle='Career'></Pagetitle>
    <table>
      <thead>
        <tr v-for="(list, index) in thead" :key="index">
          <td v-for="(item, index) in list" :key="index">
            {{item}}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in tbody" :key="index">
          <td v-for="(item, index) in list" :key="index">
            {{item}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Pagetitle from '@/components/Pagetitle.vue'

export default{
  name:'career',
  data(){
    return{
      thead:[
        ['開始年月','終了年月','プロジェクト内容','使用技術']
      ],
      tbody:[
        ['2016/4','2017/3','自動除雪機開発','C言語,Arduino,PIC,センサー制御'],
        ['2017/4','2017/6','従業員管理システム開発','Java,JavaEE,MySQL'],
        ['2017/6','2017/7','ゲーム開発','C#,Unity'],
        ['2017/7','2017/8','某レンタカー予約アプリ開発・テスト','Java,AndroidStudio'],
        ['2017/9','2017/9','VRゲーム開発','C#,Unity,VR'],
        ['2017/9','2017/11','3DSゲーム スクリプト開発','会社独自ツール'],
        ['2017/12','2018/1','来客対応ロボットシステム開発','Java,AndroidStudio,Python,Pycharm'],
        ['2018/2','2018/9','WMS開発','会社独自フレームワーク,PostgreSQL,JavaScript,Java,SpringBoot'],
        ['2018/10','','物流システム開発','会社独自フレームワーク,JavaScript,OracleDB']
      ]
    }
  },
  components:{
    Pagetitle
  }
}
</script>