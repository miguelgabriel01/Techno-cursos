<template>
  <div class="contato">
    <div v-if="loading">
      <page-loading/>
    </div>

   <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
       <p>{{api.descricao}}</p>
       <ul>
         <li>
           <b>Email: </b>
           {{api.contato.email}}
         </li>
         <li>
           <b>Telefone: </b>
           {{api.contato.telefone}}
         </li>
         <li>
           <b>Endereço: </b>
           {{api.contato.endereco}}
         </li>
       </ul>
      </div>
   </transition>

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