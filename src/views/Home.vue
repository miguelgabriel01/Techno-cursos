<template>
  <div class="home">
    <h1>Home</h1>

    <div v-if="loading">
      Carregando..
    </div>

    <div v-if="api">
    <p>{{api}}</p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import fetchData from '../mixins/fetchData.js'

export default {
  name: 'Home',
  mixins:[fetchData],
  components: {
  },
  created(){
    this.fetchData("/home")//assim que o componente é criado ele chama a função que faz o fatch
    //usamos os parenteses para informar qual o aramentro da requisição a api
  }
}
</script>
