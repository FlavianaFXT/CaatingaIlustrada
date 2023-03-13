function carregaCategorias(){
    var categorias = {
    cat01: {nome: 'Animais',
    imagem: "https://www.efecadepatos.com.br/wp-content/uploads/2020/02/SERIEMA.jpg",
    html: "animais.html"},
   
    cat02: {nome: 'Vegetação',
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/15/Sideroxylon_obtusifolium.jpg" ,
    html: "vegetacao.html"},
        
    cat03: {nome:'Lugares', 
    imagem: "https://blog.buscaonibus.com.br/wp-content/uploads/2022/04/destinos-turisticos-caatinga-chapada-diamantina.jpg",
    html: "lugares.html"}
};

var content=document.getElementById("categories");

    for(var cat in categorias){
        categories.innerHTML+='<div class="card">'+
        '<img class="bloco" src="'+categorias[cat].imagem+'"/>'+
        '<a href= "'+categorias[cat].html+ '"target="_blanck">'+'<h2>'+categorias[cat].nome+'</h2></a></div>';
        };
};

carregaCategorias();

document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario ( ) { 
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("mensagem").value != ""){ 
        alert ("Mensagem Enviada!Breve você receberá um retorno no seu Email");
    } else{
    alert("Por favor, preencha todos os campos.");
};
};




