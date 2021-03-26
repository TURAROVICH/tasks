<template>
    <section>
              <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Сумма</th>
        <th>Дата</th>
        <th>Категория</th>
        <th>Тип</th>
        <th>Открыть</th>
      </tr>
      </thead>

     
     <tbody>
      <tr v-for="(i,k) in categories" :key="k">
        <td>{{ k+1 }}</td>
        <td>{{ i.sum }}</td>
        <td> {{ new Date(i.date) | Year }} {{new Date(i.date)  | Hour}}:{{ new Date(i.date) | Minutes }}:{{ new Date(i.date)  | Seconds }}</td>
        <td>{{i.name }}</td>
        <td>
          <span :class="{red:i.consomtionOrIncome == 'outcome',green:i.consomtionOrIncome=='income' }" class="white-text badge">{{ i.consomtionOrIncome}}</span>
        </td>
        <td>
          <button @click="$router.push({ path: `/history/${k}` })" class="btn-small btn">
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
</tbody>
      
    </table>
  </section>
</template>

<script>

export default {
  components:{

  },
   mounted(){
 
    },
    computed:{
        categories(){
           return JSON.parse(localStorage.getItem('categories'))
        }
    }
}
</script>