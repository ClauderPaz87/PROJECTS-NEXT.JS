import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';

  const foods = [
    {
      id: 1,
      name: "Hambúrguer Artesanal",
      price: 25.9,
      description: "Pão brioche, carne 180g, queijo cheddar e bacon.",
      grade: 9.0,
      image: "https://i.postimg.cc/ht1TypwD/hambrguer-artesanal.jpg",
      isLiked: Boolean,

    },
    {
      id: 2,
      name: "Pizza Margherita",
      price: 49.9,
      description: "Molho de tomate, mussarela, manjericão e azeite de oliva.",
      grade: 9.4,
      image:"https://i.postimg.cc/nzHvpSRz/pexels-martins-antonio-1063288031-31263302.jpg",
      isLiked: Boolean,

    },
    {
      id: 3,
      name: "Sushi Combinado",
      price: 79.9,
      description: "12 peças de sushi variado com salmão e atum.",
      grade: 7.7,
      image:
        "https://i.postimg.cc/SR01kgGX/pexels-rajesh-tp-749235-2098085.jpg",
      
    },
    {
      id: 4,
      name: "Pastel de Carne",
      price: 8.5,
      description: "Pastel frito crocante recheado com carne moída temperada.",
      grade: 5.3,
      image:
        "https://i.postimg.cc/nLPwwFjG/pexels-nadin-sh-78971847-20095446.jpg",
      
    },
    {
      id: 5,
      name: "Açaí na Tigela",
      price: 18.0,
      description:
        "Açaí batido com banana e coberto com granola e leite condensado.",
      grade: 8.6,
      image:
        "https://i.postimg.cc/d0sBFLTK/pexels-piotr-arnoldes-7862031-6771602.jpg",
      
    },
    {
      id: 6,
      name: "Tacos Mexicanos",
      price: 35.0,
      description: "Tortilhas recheadas com carne temperada, guacamole e queijo.",
      grade: 6.9,
      image: "https://i.postimg.cc/05h1Nqf4/pexels-thishanabee-3642718.jpg",
      
    },
    {
      id: 7,
      name: "Macarrão Carbonara",
      price: 39.9,
      description: "Espaguete ao molho carbonara com pancetta e parmesão.",
      grade: 4.7,
      image:
        "https://i.postimg.cc/85nwtNcg/pexels-nadin-sh-78971847-12918198.jpg",
      
    },
    {
      id: 8,
      name: "Bolo de Chocolate",
      price: 15.0,
      description:
        "Bolo de chocolate com recheio cremoso e cobertura de ganache.",
      grade: 10.0,
      image: "https://i.postimg.cc/cCghz2tg/pexels-elli-559179-1854652.jpg",
      
    },
    {
      id: 9,
      name: "Coxinha de Frango",
      price: 7.0,
      description: "Massa crocante recheada com frango desfiado e catupiry.",
      grade: 8.0,
      image: "https://i.postimg.cc/CMRVYKjD/pexels-vikeph-17409458.jpg",
      
    },
    {
      id: 10,
      name: "Pão de Queijo",
      price: 4.5,
      description: "Pãozinho mineiro feito com queijo e polvilho.",
      grade: 7.2,
      image: "https://i.postimg.cc/g0sgLvPJ/pexels-japy-20450299.jpg",
      
    },
    {
      id: 11,
      name: "Frango Assado",
      price: 30.0,
      description: "Frango temperado assado lentamente no forno.",
      grade: 5.5,
      image:
        "https://i.postimg.cc/QC6xp2tP/pexels-mahmoud-salem-899704013-31233881.jpg",
      
    },
    {
      id: 12,
      name: "Lasanha de Frango",
      price: 45.0,
      description: "Massa com molho branco, frango desfiado e queijo.",
      grade: 8.0,
      image: "https://i.postimg.cc/4dPJgDzd/pexels-jaulani7-2765875.jpg",
      
    },
    {
      id: 13,
      name: "Empada de Palmito",
      price: 5.0,
      description: "Empadinha recheada com palmito e creme especial.",
      grade: 4.5,
      image: "https://i.postimg.cc/k5N1Yqm2/pexels-mali-103888.jpg",
      
    },
    {
      id: 14,
      name: "Filé de Salmão",
      price: 55.0,
      description: "Filé de salmão grelhado com legumes.",
      grade: 9.0,
      image:
        "https://i.postimg.cc/dVg3NcBc/pexels-horizon-content-2100060-3763847.jpg",
      
    },
    {
      id: 15,
      name: "Camarão na Moranga",
      price: 75.0,
      description: "Camarões cozidos no molho dentro de uma moranga.",
      grade: 4.8,
      image:
        "https://i.postimg.cc/dVg3NcBc/pexels-horizon-content-2100060-3763847.jpg",
      
    },
    {
      id: 16,
      name: "Strogonoff de Carne",
      price: 38.0,
      description: "Carne ao molho de creme de leite com arroz e batata palha.",
      grade: 7.0,
      image: "https://i.postimg.cc/8CgXbsq8/strogonoff.jpg",
      
    },
    {
      id: 17,
      name: "Arroz de Polvo",
      price: 65.0,
      description: "Arroz cremoso com polvo e especiarias.",
      grade: 9.5,
      image:
        "https://i.postimg.cc/RFNPSftH/pexels-itslauravillela-31286799.jpg",
      
    },
    {
      id: 18,
      name: "Quiche de Espinafre",
      price: 20.0,
      description: "Torta salgada recheada com espinafre e queijo.",
      grade: 4.6,
      image: "https://i.postimg.cc/k5N1Yqm2/pexels-mali-103888.jpg",
      
    },
    {
      id: 19,
      name: "Bife Acebolado",
      price: 29.9,
      description: "Bife grelhado com cebolas caramelizadas.",
      grade: 10.0,
      image:
        "https://i.postimg.cc/HxyQvt5B/pexels-itslauravillela-31286802.jpg",
      
    },
    {
      id: 20,
      name: "Sopa de Abóbora",
      price: 18.0,
      description: "Creme de abóbora com especiarias.",
      grade: 8.5,
      image: "https://i.postimg.cc/t4xmPFvt/pexels-pixabay-209540.jpg",
      
    },
    {
      id: 21,
      name: "Escondidinho de Carne Seca",
      price: 32.0,
      description: "Carne seca desfiada coberta com purê de mandioca.",
      grade: 10.0,
      image: "https://i.postimg.cc/YSVB6Q1p/escodidinho.jpg",
      
    },
    {
      id: 22,
      name: "Churrasco Gaúcho",
      price: 89.9,
      description: "Picanha, linguiça, coração de frango e acompanhamentos.",
      grade: 10.0,
      image: "https://i.postimg.cc/6qVsxSF3/pexels-pixabay-533325.jpg",
      
    },
    {
      id: 23,
      name: "Pavê de Chocolate",
      price: 15.0,
      description: "Camadas de biscoito, creme e chocolate.",
      grade: 8.2,
      image: "https://i.postimg.cc/FsgvMdQZ/pave.jpg",
      
    },
    {
      id: 24,
      name: "Moqueca Baiana",
      price: 70.0,
      description: "Peixe cozido no molho de dendê e leite de coco.",
      grade: 7.2,
      image:
        "https://i.postimg.cc/JhtWHpH6/pexels-one-click-445040244-24246337.jpg",
      
    },
    {
      id: 25,
      name: "Rocambole de Doce de Leite",
      price: 25.0,
      description: "Bolo enrolado recheado com doce de leite.",
      grade: 8.0,
      image: "https://i.postimg.cc/xCzDtqRL/pexels-larissafarber-7368319.jpg",
      
    },
    {
      id: 26,
      name: "Omelete Caprese",
      price: 19.9,
      description: "Omelete com queijo, tomate e manjericão.",
      grade: 6.4,
      image: "https://i.postimg.cc/zGxrfsvH/pexels-enginakyurt-1437268.jpg",
      
    },
    {
      id: 27,
      name: "Panqueca de Nutella",
      price: 22.0,
      description: "Panqueca recheada com Nutella e morangos.",
      grade: 10.0,
      image: "https://i.postimg.cc/y6RsTpQ2/pexels-roman-odintsov-5902967.jpg",
      
    },
    {
      id: 28,
      name: "Cupcake de Baunilha",
      price: 7.0,
      description: "Bolinho de baunilha com cobertura de chantilly.",
      grade: 9.7,
      image:
        "https://i.postimg.cc/sx5zD1G3/pexels-vojtech-okenka-127162-1055271.jpg",
      
    },
    {
      id: 29,
      name: "Suflê de Queijo",
      price: 28.0,
      description: "Suflê leve e aerado de queijo parmesão.",
      grade: 2.5,
      image: "https://i.postimg.cc/KvyFp7Cj/pexels-razaneadra-13878326.jpg",
      
    },
    {
      id: 30,
      name: "Brigadeiro de Leite Ninho",
      price: 3.5,
      description: "Doce cremoso de leite Ninho com leite condensado.",
      grade: 5.0,
      image: "https://i.postimg.cc/fLtZp8wt/pexels-azulandeira-16156995.jpg",
      
    },
    {
      id: 31,
      name: "Escondidinho Frango",
      price: 35.0,
      description: "Carne seca desfiada coberta com purê de mandioca gratinado.",
      grade: 6.7,
      image:
        "https://i.postimg.cc/ht6xQP2H/escondidinho-de-frango-interna.jpg",
      
    },
    {
      id: 32,
      name: "Feijoada Completa",
      price: 45.0,
      description: "Feijão preto com carnes variadas, arroz, couve e laranja.",
      grade: 9.7,
      image:
        "https://i.postimg.cc/x1cMdb3v/pexels-valdenilson-santos-bautz-2148642704-30221327.jpg",
      
    },
    {
      id: 33,
      name: "Cachorro Quente",
      price: 15.0,
      description: "Omelete fofinho recheado com queijo muçarela e orégano.",
      grade: 10.0,
      image: "https://i.postimg.cc/DZdbNQ7T/pexels-caleboquendo-3023479.jpg",
      
    },
    {
      id: 34,
      name: "Frango Xadrez",
      price: 32.0,
      description: "Frango salteado com pimentões, cebola e molho shoyu.",
      grade: 7.8,
      image: "https://i.postimg.cc/kMvxYC5b/Frango-xadrez.jpg",
      
    },
    {
      id: 35,
      name: "Yakissoba de Carne",
      price: 29.9,
      description: "Macarrão oriental frito com carne, legumes e molho especial.",
      grade: 6.8,
      image:
        "https://i.postimg.cc/7YPSpRCQ/yakisoba-tradicional-de-carne.webp",
      
        
    },
    {
      id: 36,
      name: "Bife à Parmegiana",
      price: 38.0,
      description:
        "Filé à milanesa coberto com molho de tomate e queijo gratinado.",
      grade: 10.0,
      image: "https://i.postimg.cc/brp1YCmr/bife-a-parmegiana.jpg",
      
    },
    {
      id: 37,
      name: "Bolovo",
      price: 9.0,
      description: "Bolinho empanado recheado com carne e um ovo cozido no meio.",
      grade: 4.6,
      image: "https://i.postimg.cc/hj99BWbN/Bolovo.jpg",
      
    },
    {
      id: 38,
      name: "Bruschetta Italiana",
      price: 22.0,
      description: "Pão italiano torrado com tomate, manjericão e azeite.",
      grade: 4.7,
      image:
        "https://i.postimg.cc/0NSSYR3r/pexels-shameel-mukkath-3421394-5639421.jpg",
      
    },
    {
      id: 39,
      name: "Mousse de Maracujá",
      price: 14.0,
      description: "Sobremesa cremosa de maracujá com calda de chocolate.",
      grade: 7.0,
      image: "https://i.postimg.cc/SRdCn6Pr/Mousee.webp",
      
    },
    {
      id: 40,
      name: "Petit Gateau",
      price: 28.0,
      description: "Bolinho de chocolate quente com recheio cremoso e sorvete.",
      grade: 8.0,
      image: "https://i.postimg.cc/3RMgVJpg/Petiti.jpg",
    },
  ];

  const filteredFoods = searchTerm 
    ? foods.filter(food => 
        food.name.toLowerCase().includes(searchTerm) ||
        food.description.toLowerCase().includes(searchTerm))
    : foods;

  return NextResponse.json(filteredFoods);

}
