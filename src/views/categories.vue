<template>
    <div>
  <div class="page-title">
    <h3>Создать категорию</h3>
  </div>
  <section>
    <div class="row">
      <div class="col s12 m12">
        <div>
          <form @submit.prevent="newCategory">
            <div class="input-field">
              <input
                  id="name"
                  type="text"
                  v-model="categoryName"
              >
              <label for="name">Название</label>
              <span v-if="nameError" class="helper-text invalid">{{ nameError }}</span>
            </div>




         <div>
 


    <div class="input-field" >
      <select>
        <option
        >name cat</option>
      </select>
      <!-- <label>Выберите категорию</label> -->
    </div>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="consomtionOrIncome"
        />
        <span>Доход</span>
      </label>
    </p>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="consomtionOrIncome"
        />
        <span>Расход</span>
      </label>
    </p>

    <div class="input-field">
      <input
          id="amount"
          type="number"
          v-model="sum"
      >
      <label for="amount">Сумма</label>
      <span v-if="error" class="helper-text invalid">{{error}}</span>
    </div>

    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model="description"
      >
      <label for="description">Описание</label>
      <span
            v-if=" descriptionError"
            class="helper-text invalid">{{ descriptionError}}</span>
    </div>


</div>






            <button class="btn waves-effect waves-light" type="submit">
              Создать
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</div>

</template>

<script>

export default {
  data:()=>({
    categoryName:'',
    consomtionOrIncome:'',
    sum:'',
    description:'',
    error:'',
    nameError:'',
    descriptionError:''
  }),
  methods:{
    newCategory(){
      if(! +0 > +this.sum ){
       this.error= 'нелзя использовать знак минус'
      }
      else if(this.categoryName.length<= 0){
       this.nameError='имя не должно быть пустым!'
      }
      else if(this.description.length < 20){
       this.descriptionError = 'описание не должно быть меньше 20 символов!'
      }
      else{

       let arr =  JSON.parse(localStorage.getItem('categories'))
       const OBJ = {
        date:new Date(),
        name:this.categoryName,
        consomtionOrIncome:  this.consomtionOrIncome,
        sum:this.sum,
        description:this.description
        }
       arr.push(OBJ)
       localStorage.removeItem('categories')

       localStorage.setItem('categories',JSON.stringify(arr))
       return this.$router.push({ path: `/history` })


      }
    }


  }
}
</script>