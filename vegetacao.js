function carregaFlora(){
    var floraCaatinga = {
        veg01: {nome: "Catingueira",
        img: "https://ciplamasces.files.wordpress.com/2016/05/catingueira.jpg",
        nomecientifico: "Nome Científico: Caesalpinia pyramidalis",
        curiosidades: "Popularmente conhecida pelo nome de catingueira, pau-de-rato ou catinga-de-porco. Ocorre nos estados do Piauí, Ceará, Rio Grande do Norte, Paraíba, Pernambuco, Alagoas, Sergipe e Bahia, sendo considerada endêmica da caatinga."},
   
        veg02: {nome: "Aroeira",
        img: "https://1.bp.blogspot.com/-ORAMsYA7pT0/XdR0b_wh-zI/AAAAAAAABX4/sVMiI5AXINsWzSluI_8a-uhPXzfnlkfCwCNcBGAsYHQ/s1600/aroeira%2B1.jpg",
        nomecientifico: "Nome Científico: Myracrodruon urundeuva",
        curiosidades: "Popularmente conhecida como: Aroeira, urundeúva, aroeira do sertão, aroeira do campo, aroeira da serra, aroeira preta, urindeúva, arindeúva, arendeúva. Por suas qualidades, é muito explorada e tornou-se escassa em todas as áreas de ocorrência."},
       
        veg03: {nome: "Angico",
        img:"https://opipoco.com.br/wp-content/uploads/2018/06/angico-300x211.jpg",
        curiosidades: "Com altura entre 12-15 m e tronco de 30-50 cm de diâmetro. Seu crescimento é rápido, não atingindo muitos anos."},

        veg04: {nome: "Craibeira",
        img: "https://portal.unicap.br/documents/475032/0/ip%C3%AA.jpg/3aecdc9f-b36a-a54c-0c48-8d6bbe24da4d?t=1646786270211&download=true",
        nomecientifico:"Nome científico: Tabebuia aurea",
        curiosidades: "Conhecida como: Craibeira, Caraiberia, Caroba-do-Campo, Cinco-em-Rama, Cinco-Folhas-do-Campo, Ipê-Amarelo-do-Cerrado, Pau-d'arco, Paratudo."},
        
        veg05: {nome: "Umbuzeiro",
        img:"https://ruralpecuaria.com.br/painel/img/noticias/13416/noticias_1571935757.jpg",
        nomecientifico: "Nome cientifico: Spondias tuberosa",
        curiosidades: "Árvore centenária, com folhas que desaparecem nos períodos de seca, mas que voltam a renascer ao cair das primeiras chuvas."},
    
        veg06: {nome: "Quixabeira",
        img: "https://i0.wp.com/forumdeculturaigaci.com.br/wp-content/uploads/2021/06/QUIXABEIRA.jpg?fit=300%2C225&ssl=1",
        nomecientifico: "Nome cientifico: Sideroxylon obtusifolium",
        curiosidades: "Também conhecida como quixaba, quixaba-preta, sapotiaba, espinheiro, coronilha,[1] maçaranduba-da-praia ou rompe-gibão. Possui espinhos fortes, folhas oblongas e cartáceas, flores aromáticas e bagas roxo-escuras, doces e comestíveis. A casca tem propriedades antiinflamatórias, sendo utilizada como cicatrizante através de chás ou infusões hidroalcoólicas."},
        
        veg07: {nome: "Quipá",
        img: "https://www.colecionandofrutas.com.br/tacingainamoesubcy_arquivos/image002.jpg",
        nomecientifico: "Nome cientifico: Tacinga subcylindrica",
        curiosidades: "Outros nomes populares: palmatória, palminha, almofada de espinho, orelha-de-mikey-brasileira e gogóia.Arbusto até 35 cm de altura."},

        veg08: {nome: "Mandacaru",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cMv2_eRoR1UUZ9Ke17fXFxtrRcr1jEP3_w&usqp=CAU",
        nomecientifico: "Nome cientifico: Cereus Jamacaru",
        curiosidades: "Pode atingir 5 até 6 metros de altura.Suas flores desabrocham à noite e murcham ao nascer do sol e servem de alimento para as abelhas, especialmente de arapuá.Seus frutos servem de alimento para diversas aves típicas da Caatinga, a exemplo dos periquitos. Pode também ser consumido pelo homem."},

        veg09:{nome: "Faveleira",
        img:"http://3.bp.blogspot.com/-h0I7UfX24lc/UthXboH8GBI/AAAAAAAAHNs/zDb8_2Xo9z0/s1600/Imagem+007.jpg",
       nomecientifico: "Nome cientifico: Cnidoscolus quercifolius Pohl",
        curiosidades: "Nomes populares: Faveleira, Favela, Queimadeira.Uma característica da espécie é a presença de acúleos urticantes nos ramos e folhas."}
    };

    var flora = document.getElementById("flora");

    for(var veg in floraCaatinga){
        flora.innerHTML+='<div class="card">'+
        '<img class="bloco" src="'+floraCaatinga[veg].img+'"/>'+
        '<details><summary>'+floraCaatinga[veg].nome+'</summary>'+
        '<blockquote>'+ floraCaatinga[veg].nomecientifico +'</blockquote>' +
        '<p>'+ floraCaatinga[veg].curiosidades + '</p></summary></details></div>';
        };
};

carregaFlora();