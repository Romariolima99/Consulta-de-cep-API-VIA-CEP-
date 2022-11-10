function startEvent (){

const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#" +campo))
            document.querySelector("#" +campo).value = result[campo]

        
    }
}
let search = cep.value.replace("-","")

const options = {
    method: 'Get',
    mode: 'cors',
    Cache: 'default',
}

fetch(`https://viacep.com.br/ws/${search}/json/`, options)
.then(Response=>{ Response.json()
.then(data => showData(data)) 
})
.catch (e => console.log("Deu erro:" + e, message));


};

