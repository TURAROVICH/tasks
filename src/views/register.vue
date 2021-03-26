<template>
    <div class="grey darken-1 empty-layout">


<form @submit.prevent="local" class="card auth-card">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          v-model="email"
          id="email"
          type="text"
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
    <div class="input-field">
      <input
          id="name"
          type="text"
          class="validate"
          v-model="name"
      >
      <label for="name">Имя</label>
      <small class="helper-text invalid">Name</small>
    </div>
    <p>
      <label>
        <input v-model="chbox" type="checkbox" />
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/auth/login">Войти!</router-link>
    </p>
  </div>
</form>

</div>
</template>

<script>
export default {
    data:()=>({
        name:'',
        password:'',
        email:'',
        chbox:false
    }),
    methods:{
        local(){
            let t = this
            localStorage.setItem('name',t.name)
            localStorage.setItem('password',t.password)
            localStorage.setItem('email',t.email)
            localStorage.setItem('checbox',t.chbox)
            localStorage.setItem('money',0) 
            localStorage.setItem('categories',JSON.stringify([{sum:0,date:new Date()}])) 

                t.$router.push({ path: `/` })
        }
    }
}
</script>