<template>
    <div class="grey darken-1 empty-layout">

<form @submit.prevent="login" class="card auth-card">
  <div class="card-content">

    <span class="card-title">Домашняя бухгалтерия <br> 
    <div class="card-panel" v-if="error || mainError">
    <span class="red-text text-darken-2">{{ error }}{{ mainError }}</span>
  </div>
  
  </span>


    <div class="input-field">
      <input
          id="email"
          type="text"
          class="validate"
          v-model="email"
      >
      <label for="email">Email</label>
      <small class="helper-text invalid">Email</small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
      >
      <label for="password">Пароль</label>
      <small class="helper-text invalid">Password</small>
    </div>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Войти
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Нет аккаунта?
      <router-link to="/auth/register">Зарегистрироваться</router-link>
    </p>
  </div>
</form>

</div>
</template>

<script>
export default {
    data:()=>({
    email:'',
    password:'',
    error:'',
    mainError:''
    }),
    methods:{
        login(){
            if(localStorage.getItem('name')){
                if(localStorage.getItem('email')==this.email && localStorage.getItem('password')==this.password){
                    this.$router.push({ path: `/` }) 
                }else{
    this.error=` У вас не корректный email или password`
                }
            }else{
           this.mainError='У вас нет данные в базе'
            }
        }
    }
}
</script>

