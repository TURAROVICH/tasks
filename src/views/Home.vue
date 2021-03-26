<template>
<div>
  <div class="page-title">
    <h3>Счет</h3>

    <button class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
    </button>
  </div>

  <div class="row">
    <div class="col s12 m6 l4">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Счет в валюте</span>

          <p class="currency-line">
            <span>{{ money }} Р</span>
          </p>
        </div>
      </div>
    </div>

    <div class="col s12 m6 l8">
      <div class="card orange darken-3 bill-card">
        <div class="card-content white-text">
          <div class="card-header">
            <span class="card-title">Курс валют</span>
          </div>
          <table>
            <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>10 руб</td>
              <td>50</td>
              <td>{{ time | Year }} {{time | Hour}}:{{ time | Minutes }}:{{ time | Seconds }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>


export default {
  name: 'Home',
 data:()=>({
  time:new Date()
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

    },
  methods:{
   date(){ return setInterval(()=>this.time=new Date,1000)}
  },
  mounted(){
    this.date()
  }
}
</script>


<style scoped>
.row{
  flex-wrap: wrap;
}
</style>
