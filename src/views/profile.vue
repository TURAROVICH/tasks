<template>
    <div>
  <div class="page-title">
    <h3>Профиль</h3>
  </div>

  <form @submit.prevent="localUpdate" class="form">
    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model="name"
      >
      <label for="description">Имя</label>
      <span
            class="helper-text invalid">name</span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Обновить
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>
</template>


<script>
export default {
    data:()=>({
        name:''
    }),
    mounted(){
        this.name = localStorage.getItem('name')
    },
    methods:{
        localUpdate(){
           localStorage.removeItem('name')
           localStorage.setItem('name',this.name)
            this.$router.push({ path: `/` })
        }
    }
}
</script>