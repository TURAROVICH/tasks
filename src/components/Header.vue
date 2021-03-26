
<template>
<div>
 <div v-if="!rout.includes('auth')" class="app-main-layout">
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons black-text" @click="fade = !fade">dehaze</i>
          </a>
          <span class="black-text">{{ date | Year }} {{date | Hour}}:{{ date | Minutes }}:{{ date | Seconds }}</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <p
                class="dropdown-trigger black-text"
                data-target="dropdown"
                ref="dropdown"
            >
             {{ localName }}
              <i class="material-icons right">arrow_drop_down</i>
            </p>

            <ul id='dropdown' class='dropdown-content'>
              <li>
                <router-link to="/profile" class="black-text">
                  <i class="material-icons">account_circle</i>
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li @click="clearLocal">
                <router-link to="/auth/login" class="black-text">
                  <i class="material-icons">assignment_return</i>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>


<transition name="hide">
    <ul v-if="fade" class="sidenav app-sidenav open">
      <li>
        <router-link to="/" class="waves-effect waves-orange pointer">Счет</router-link>
      </li>
      <li>
        <router-link to="/history" class="waves-effect waves-orange pointer">История</router-link>
      </li>
      <li>
        <router-link to="/planning" class="waves-effect waves-orange pointer">Планирование</router-link>
      </li>
      <li>
        <router-link to="/categories" class="waves-effect waves-orange pointer">Новая категория</router-link>
      </li>
    </ul>
</transition>


        <div :class="{ml:!fade}" class="app-content">
        <div class="app-page">
        <slot></slot>
        </div>
        </div>


<div class="fixed-action-btn">
  <router-link to="/categories" class="btn-floating btn-large blue">
    <i class="large material-icons">add</i>
  </router-link>
</div>
</div>


<div class="" v-else>
   <slot></slot>
</div>

    </div>
</template>

<script>
import M from  "../../node_modules/materialize-css/dist/js/materialize.min"

export default {
    data:()=>({
     fade:false,
     date:new Date(),
     name:localStorage.getItem('name')
    }),
    methods:{
    down(){
      M.Dropdown.init(this.$refs.dropdown);
    },
     time(){
      return setInterval(()=>this.date=new Date,1000)
    },
    clearLocal(){
      localStorage.clear()
    }
    },
    computed:{
      rout(){
         return this.$route.path
      },
      localName(){
        return localStorage.getItem('name')
      }
    },
    mounted(){
     
      this.time()
      this.down()
    },
    created(){
      if(!localStorage.getItem('name')){
         this.$router.push({ path: `/auth/login` })
      }
    }

}
</script>


<style scoped>
.ml{
    transition: all 2s ease;
    margin-left: -200px;
}
.hide-enter-active {
  transition: all .3s ease;
}
.hide-leave-active {
  transition: all .8s ease;
}
.hide-enter-active{
   transition: all .8s ease;
}
.hide-enter, .hide-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(300px);
}
.hide-enter-to{
   opacity: 1;
}
.hide-leave-to{

  opacity: 0;
}


@media screen and (max-width:580px) {
  .sidenav{
    width: 200px;
  }
}
</style>