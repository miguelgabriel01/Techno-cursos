<template>
  <div class="home">
    <div v-if="loading">
      <page-loading/>
    </div>

   <transition>
      <div v-if="api" class="conteudo">
        <div>
    <h1>Sobre a {{api.titulo}}</h1>
    <p>{{api.descricao}}</p>
     <router-link to="/cursos" tag="button" class="btn-cursos">Cursos</router-link>
       <p>{{api}}</p>
       <div>
         <h2>Avaliações</h2>
         <ul>
           <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
              <p>{{avaliacao.nome}}</p>
              <p>{{avaliacao.descricao}}</p>
           </li>
         </ul>
       </div>
        </div>
      <img src="@/assets/aprender.png" alt="Aprenda Web Design">
      </div>
   </transition>

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

<style>
  .btn-cursos{
    padding: 15px 20px;
    font-size: 1rem;
    margin-bottom: 40px;
    border: none;
    background: #4b8;
    border-radius:4px;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 2px rgba(0,0,0,0.1);
  }
</style>
