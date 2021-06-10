<template>
  <div class="contato">
    <h1>Cursos</h1>
    
    <div v-if="loading">
      Carregando..
    </div>

    <div v-if="api">
    <p>{{api}}</p>
    </div>
    
  </div>
</template>

<script>
import fetchData from '../mixins/fetchData.js'

export default {
name:"Cursos",
mixins:[fetchData],
created(){
  this.fetchData("/cursos")//chamado logo apos o componente ser criado
  //a palavra "/contato" é o parametro que vai ser enviado ao mixins que ira fazer a requisição a api 
}

}
</script>

<style>

</style>