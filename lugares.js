function carregaLugares(){
    var lugaresCaatinga = {
        lug01: {nome: "Piranhas-AL",
        img: "https://turismoemalagoas.com.br/images/noticias/138/e49365ee94fb6c9501ddaf2d1a05a531.jpg",
        sobre: "Cidade histórica com várias opções de passeios, inclusive para conhecer a história do cangaço."},

        lug02: {nome: "Cânions do Rio São Francisco-SE",
        img: "https://www.jaraguaturismo.com/wp-content/uploads/2016/11/canions-do-sao-francisco.jpg",
        sobre: "Passeio saindo do Karranca's Bar na cidade de Canindé do São Francisco-SE."},

        lug03: {nome: "Chapada Diamantina-BA",
        img:"https://www.melhoresdestinos.com.br/wp-content/uploads/2019/10/chapada-diamantina.jpg",
        sobre: "Está situada no centro do estado da Bahia. A região é composta por 24 municípios, mas a porta de entrada para grande parte dos turistas que visitam o local é a cidade de Lençóis-BA."},

        lug04: {nome: "Parque Nacional Serra da Capivara -PI",
        img:"https://bolsadeviagem.com.br/wp-content/uploads/2017/03/Parque-Nacional-Serra-da-Capivara-no-Piaui.jpg",
        sobre: "Unidade de conservação que atua na proteção da natureza e unidade de conservação arqueológica que preserva vestígios preservados por séculos.Está localizado no sudeste do Estado do Piauí e ocupa parte dos municípios de São Raimundo Nonato, João Costa, Brejo do Piauí e Coronel José Dias."},

        lug05: {nome: "Areia Branca-RN",
        img:"https://media-cdn.tripadvisor.com/media/photo-s/14/2b/2c/85/o-encontro-do-sertao.jpg",
        sobre: "Onde o sertão encontra o mar. Esse pedacinho do litoral nordestino continua inexplorado, possui praias paradisiacas e desertas."},
        
        lug06: {nome: "Açude Cedro-CE",
        img: "http://s2.glbimg.com/pTW0jYWuqLxHjD3DMtylYmzh-rI=/s.glbimg.com/jo/g1/f/original/2015/04/05/cedro2.jpg",
        sobre: "Localizado na cidade de Quixadá-CE, é considerado o primeiro açude do país."},
        
        lug07: {nome: "Lajedo de Pai Mateus - PB",
        img: "https://www.viajanteforadacurva.com/wp-content/uploads/2018/09/DSC02953.jpg",
        sobre: "Localizado na cidade de Cabaceiras-PB, conhecida como a holiúde nordestina, por ser cenário frequente de series e filmes, a exemplo do 'Auto da Compadecida'."},
    
        lug08: {nome: "Triunfo-PE",
        img:"https://turistaprofissional.com/wp-content/uploads/2020/10/triunfo-pernambuco.jpg",
        sobre: "Clima do sul em pleno sertão Pernambucano. Possui uma variedade de passeios como: Engenhos de Rapadura, Museu do Cangaço, Teatro Guarany, Pico do Papagaio, Chico Santeiro, entre outros."}
    
    }

    var lugares = document.getElementById("lugares");

    for(var lug in lugaresCaatinga){
        lugares.innerHTML+='<div class="card">'+
        '<img class="bloco" src="'+lugaresCaatinga[lug].img+'"/>'+
        '<details><summary>'+lugaresCaatinga[lug].nome+'</summary>'+
        '<p>'+ lugaresCaatinga[lug].sobre + '</p></summary></details></div>';
        };
};

carregaLugares();