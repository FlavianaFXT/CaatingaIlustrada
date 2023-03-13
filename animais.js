function carregaAnimais(){
    var animaisCaatinga = {
        anim01: {nome: "Ema",
        img: "https://s3.amazonaws.com/media.wikiaves.com.br/images/8002/2008255_3d89225e3d49a3d0283b1dec851fe204.jpg",
        nomecientifico: "Nome Científico: Rhea americana",
        curiosidades: "É uma ave não voadora que usa suas grandes asas apenas para se equilibrar enquanto corre. Os machos são os responsáveis pela incubação e o cuidado com os filhotes. É considerada a maior ave brasileira."},
    
        anim02:{nome: "Tatu Peba",
        img:"https://live.staticflickr.com/4077/4855948040_a13ac69d18_z.jpg",
        nomecientifico: "Nome Científico: Euphractus sexcinctus",
        curiosidades: "Os tatupebas são escavadores eficientes e formam tocas para viver e procurar presas. É alerta e principalmente solitário. Onívoro, se alimenta de insetos, formigas, carniça e material vegetal. Devido à sua visão deficiente, confiam no olfato para detectar presas e predadores. A União Internacional para a Conservação da Natureza e dos Recursos Naturais (IUCN) classifica-o como menos preocupante, e não há grandes ameaças à sua sobrevivência. Apesar disso, aparece na lista vermelha da Bahia, sobretudo devido à caça"},

        anim03:{nome:"Seriema",
        img:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Sireima_2_REFON.JPG",
        nomecientifico: "Nome Científico: Cariama cristata",
        curiosidades: "Pode chegar até 90 centímetros de comprimento (da ponta do bico até o fim da cauda) e pesar em média 1,4 kg. Tem no canto a sua principal característica, podendo ele ser ouvido a mais de 1 km de distância. Sua alimentação inclui todos os tipos de inseto (que ela mesma caça) e pequenos vertebrados, como lagartos, cobras, vermes e roedores."},

        anim04:{nome:"Carcará",
        img:"https://cultura.jundiai.sp.gov.br/wp-content/uploads/2021/02/gaviao-carcara.jpg",
        nomecientifico: "Nome Científico: Caracara plancus",
        curiosidades: "Também conhecido como caracará, carancho, caracaraí (Ilha do Marajó), gavião-de-queimada e gavião-calçudo. Medindo cerca de 50-60 centímetros da cabeça a cauda, o peso do macho é de 834 g; a fêmea pesa 953 g e mede cerca de 123 centímetros. Não é um predador especializado, e sim um generalista e oportunista. alimenta-se de quase tudo o que acha, de animais vivos ou mortos até o lixo produzido pelos humanos."},

        anim05:{nome:"Saruê",
        img: "https://s2.glbimg.com/L1uiaMHLdLZhJSShEa14v4PnFWI=/0x0:757x528/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/C/B/vDbsG6SxuEsZC4IldEdw/sarue.jpeg",
        nomecientifico: "Nome Científico: Didelphis aurita",
        curiosidades: "Também conhecido como gambá-de-orelha-preta, sariguê,micurê, mucura e timbu. O gambá-de-orelha-preta, em média, possui 37 centímetros de comprimento no corpo, e outros 33 centímetros em sua cauda. Por esse motivo, é uma das maiores espécies de marsupais no Brasil. Pesam entre 1,3 e 1,5 quilo, com as fêmeas sendo ligeiramente mais leves e menores.  é onívoro e se alimenta de artrópodes, pequenos vertebrados (roedores, aves e lagartos) e frutos."},

        anim06:{nome:"Raposa",
        img:"https://3.bp.blogspot.com/_ENHv1rrGPYU/ScLfaP0OylI/AAAAAAAAAp4/tzAeIWUINbk/w1200-h630-p-k-no-nu/Raposa6s.jpg",
        nomecientifico: "Nome Científico: Dusicyon thous",
        curiosidades: "Pequeno mamífero da caatinga que alimenta-se basicamente de pequenos animais, frutos e insetos. São vistas facilmente no período de seca nas estradas e veredas."}
    };

    var animais = document.getElementById("animais");

    for(var anim in animaisCaatinga){
        animais.innerHTML+='<div class="card">'+
        '<img class="bloco" src="'+animaisCaatinga[anim].img+'"/>'+
        '<details><summary>'+animaisCaatinga[anim].nome+'</summary>'+
        '<blockquote>'+ animaisCaatinga[anim].nomecientifico +'</blockquote>' +
        '<p>'+ animaisCaatinga[anim].curiosidades + '</p></summary></details></div>';
        };
};



carregaAnimais();