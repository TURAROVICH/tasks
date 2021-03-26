<template>

  <div>
    <div style="word-wrap: break-word;" class="breadcrumb-wrap">
      <router-link to="/history" class="breadcrumb">История</router-link>
      <a class="breadcrumb">
       {{bd.consomtionOrIncome}}
      </a>
    </div>
    <div class="row">
      <div class="col s12 m10">
        <div  :class="{green :bd.consomtionOrIncome=='income',red:bd.consomtionOrIncome=='outcome'}" class="card">
          <div class="card-content white-text">
            <p>Описание:{{bd.description}}</p>
            <p>Сумма:{{ bd.sum }}</p>
            <p>Категория:{{ bd.name }}</p>

            <small>{{ new Date(bd.date) | Year }} {{new Date(bd.date)  | Hour}}:{{ new Date(bd.date) | Minutes }}:{{ new Date(bd.date)  | Seconds }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    data:()=>({
      id:0,
      bd:null
    }),
    mounted(){
        this.id = +this.$route.path.slice(9,this.$route.path.lenght)
        this.oneCategory()
    },

    computed:{
        category(){
            return JSON.parse(localStorage.getItem('categories'))
        }

    },
    methods:{
         oneCategory(){
            for(let i in this.category){
                if(i==this.id){
                   let num = [...this.category]
                   this.bd= num[this.id]
                }
            }
         
        }
    }

}
</script>