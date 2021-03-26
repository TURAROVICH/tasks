<template>
  <div id="app">
    <div class="nav">
      <HeaderMain> <router-view/></HeaderMain>
    </div>

  </div>
</template>

<script>
import HeaderMain from './components/Header'

export default {
  components:{
    HeaderMain

  },
  date:()=>({
 
  }),
  mounted(){
 
     
  },
  computed:{
 
  }
}
</script>

<style lang='scss'>
 @import "~materialize-css/dist/css/materialize.min.css"; 
 @import "assets/index.css";
</style>
