<template>
  <div class="contato">    
    <div v-if="loading">
      <page-loading/>
    </div>

   <transition>
      <div v-if="api" class="conteudo">
        <div>
       <h1>{{api.titulo}}</h1>
       <p>{{api.descricao}}</p>
        </div>
       <ul>
         <li v-for="curso in api.cursos" :key="curso.id">
           <h2>
             <router-link :to="{name:'Curso',params: {curso: curso.id}}">
             {{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas
             </router-link>
             </h2>
           <p>{{curso.descricao}}</p>
         </li>
       </ul>
      </div>
   </transition>


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