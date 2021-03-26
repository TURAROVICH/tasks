<template>
    <div>
  <div class="page-title">
    <h3>Планирование</h3>
    <h4>{{ money }}</h4>
  </div>

  <section>
    <div v-for="(i,k) in categories" :key="k">
      <p>
        <strong>name:{{ i.name }}</strong>
        {{ beforMoney }} <strong v-if="i.consomtionOrIncome=='income'">+ {{i.sum}} = {{ +beforMoney+ +i.sum }}</strong>  <strong v-else>- {{ i.sum }} = {{+beforMoney- +i.sum}}</strong>
      </p>
      <div class="progress" >
        <div
           :class="{green :i.consomtionOrIncome=='income',red:i.consomtionOrIncome=='outcome'}"
            class="determinate"  
            style="width:100%"
        ></div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data:()=>({
    
  }),
  computed:{
    money(){
      let money = JSON.parse(localStorage.getItem('categories'))
      let newSum = +localStorage.getItem('money')
      let i = 0
      for(i of money){
        if(i.consomtionOrIncome=='income'){
          newSum+= +i.sum
        }else{
          newSum-= +i.sum
        }
      }
      return newSum
    },

    categories(){
      return JSON.parse(localStorage.getItem('categories'))
    },

    beforMoney(){
      return localStorage.getItem('money')
    }

  },
  mounted(){
 
  }

}
</script>