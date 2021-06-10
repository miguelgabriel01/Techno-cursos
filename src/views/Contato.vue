<template>
  <div class="contato">
    <h1>Contato</h1>
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
name:"Contato",
mixins:[fetchData],
  created(){
    this.fetchData("/contato")//chama o fatch assim que o componente for criado
    //usamos os parenteses para informar qual o aramentro da requisição a api
  }
}
</script>

<style>

</style>