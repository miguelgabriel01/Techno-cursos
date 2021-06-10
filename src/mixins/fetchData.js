export default{
  data(){
    return{
      loading:true,
      api:null,
    }
  },
  methods:{
    fetchData(url){
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
      .then(resposta => resposta.json())
      .then(resposta => {
        setTimeout(() => {
          this.api = resposta;
          console.log(this.api)
          this.loading = false;  
        },1000)
      })
    }
  }
}