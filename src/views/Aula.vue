<template>
<div>
  <div v-if="loading">
    <page-loading/>
  </div>
  <transition>
    <div v-if="api">
      <h2>{{api.nome}}</h2>
      <iframe width="560"
       height="315"
       :src="`https://www.youtube.com/embed/${api.youtube}`"
       frameborder="0" 
       allow="accelerometer; 
       clipboard-write; 
       encrypted-media; 
       gyroscope; 
       picture-in-picture"
       allowfullscreen
       ></iframe>
      </div>  
  </transition>
</div>
</template>

<script>
import fetchData from '../mixins/fetchData.js'

export default {
  name:'aula',
  props:['aula'],
  mixins:[fetchData],
  created(){
    this.fetchData(`/aula/${this.aula}`)
  },
  beforeRouteUpdate (to, from, next) {
    // usado quando um link muda a url e se precisa que o conteudo da tela seja alterado
    this.fetchData(`/aula/${to.params.aula}`)
    next()
  }
}
</script>

<style>

</style>