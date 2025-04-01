'use client'
import Image from "next/image";
import profile from "../../../../public/image_profile.png";
import { ChartColumnDecreasing, Download,Heart,MessageSquare,RefreshCcw,} from "lucide-react";
import { useTwitterStore } from "@/store/TwitterStore";
import { useUser } from "@clerk/nextjs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import Link from "next/link";
import { useEffect } from "react";
import DialogReploy from "./DialogReploy";

const RandomTweets = () => {
  const {clickLike,clickCommenter,likeComment,randomTweets,addRandomTweets } = useTwitterStore();
  const { user } = useUser()
 

  const addRandomTweetsTwitter = ()=>{
    const RandomTweetsMath = [
        "Acordei inspirado hoje! Bora conquistar o mundo! 🚀🔥",
        "Se a vida te der limões, faça uma limonada... ou uma caipirinha. 🍋😂",
        "Nada como um café forte para começar o dia! ☕",
        "Aprendi mais errando do que acertando. Bora continuar! 💪",
        "Será que um dia o sono vai vencer a insônia? 💤",
        "HTML e CSS são fáceis… até você precisar alinhar algo. 😵‍💫",
        "A tecnologia evolui, mas meu carregador de celular continua sumindo. 🔌",
        "Nunca confie em alguém que coloca ketchup na pizza. 🍕❌",
        "Twitter, o único lugar onde eu posso reclamar sem ninguém me interromper. 😂",
        "Aquele momento que você abre o Twitter para dar uma olhada e já se passaram 2 horas. ⏳",
        "Só queria estar na praia agora... 🌊☀️",
        "Fome? Sono? Não sei. Só sei que preciso de algo. 🤔",
        "Se programar fosse fácil, não existiriam tantos bugs. 🐞",
        "JavaScript me ensinou que tudo pode ser verdade e falso ao mesmo tempo. 😵‍💫",
        "Preciso começar a academia... segunda eu vou! 💪 (ou não 😂)",
        "Deveria estar estudando, mas o Twitter sempre vence. 🤷‍♂️",
        "Hoje o dia tá tão parado que até o Wi-Fi desistiu. 📶",
        "Aquela sensação de dever cumprido... pena que nunca senti. 😂",
        "Se alguém descobrir como ganhar dinheiro dormindo, me avisa! 🤑",
        "O verdadeiro terror é abrir o banco e ver o saldo negativo. 😱",
        "É impossível ficar triste comendo um hambúrguer. 🍔",
        "Odeio quando o despertador toca no melhor momento do sonho. 😭",
        "Eu juro que ia dormir cedo... aí lembrei que tenho internet. 🌙",
        "Se reclamar adiantasse, eu já estaria milionário. 💰😂",
        "O dia só começa depois do primeiro café. ☕",
        "Preciso de férias das minhas férias. 😩",
        "Será que um dia eu vou conseguir organizar minha vida? 🧐",
        "O bug não é um erro, é um recurso não documentado. 👨‍💻",
        "Se a bateria do celular durasse tanto quanto a do controle remoto... 🔋",
        "Cansado de estar cansado. 😴",
        "Quem inventou segunda-feira claramente não gostava de ninguém. 😡",
        "Se apaixonar é fácil, difícil é fazer a crush notar. ❤️😂",
        "Eu deveria estar trabalhando, mas estou no Twitter. Prioridades! 🤷‍♂️",
        "Hoje eu só queria ficar deitado, comendo e assistindo série. 🍕📺",
        "Meu maior sonho? Ganhar na loteria sem jogar. 💸",
        "O Wi-Fi da vizinha é melhor que o meu. Como faz pra trocar? 🤔",
        "Todo dia eu acordo pensando em ficar rico. Até agora, sem sucesso. 💵😂",
        "Se beber, não digite código! 🍻💻",
        "Vida adulta é só boleto, cansaço e saudade da infância. 😢",
        "Por que as coisas nunca saem como planejamos? 🤦‍♂️",
        "Aquele momento que você percebe que é segunda-feira... 😭",
        "Dormir 8h? Impossível. Tomar 5 cafés? Fácil. ☕☕☕☕☕",
        "Um dia ainda vou entender como os gatos pensam... 🐱",
        "Alguém aí também procrastina até a procrastinação dar errado? 😂",
        "Saudades do tempo em que o maior problema era a lição de casa. 📚",
        "Mudar de vida? Só se for para um lugar onde não existe segunda-feira! 🌴",
        "Eu só queria um salário compatível com meus boletos. 💳",
        "Gastar dinheiro é tão fácil, ganhar que é o problema. 😅",
        "Sexta-feira: felicidade. Segunda-feira: depressão. 😭",
        "Queria ser fit, mas a comida não colabora. 🍕🍩",
        "Sorria! A vida é curta demais para ficar de mau humor. 😃",
        "Nada como um bom meme para melhorar o dia. 😂",
        "Por que as férias acabam tão rápido? 😭",
        "O Twitter é tipo um diário coletivo de gente aleatória. 📝",
        "Me iludo fácil... inclusive achei que hoje ia ser produtivo. 😅",
        "Se eu ganhasse dinheiro toda vez que falo 'amanhã eu começo', já tava rico. 😂"
      ];
    const randomNames =[
        "Lucas Mendes", "Ana Clara Souza", "Gabriel Oliveira", "Mariana Ferreira",
        "João Pedro Lima", "Beatriz Rocha", "Rafael Costa", "Larissa Almeida",
        "Matheus Santos", "Camila Ribeiro", "Pedro Henrique Nunes", "Juliana Martins",
        "Vinícius Alves", "Fernanda Duarte", "André Luiz Cardoso", "Bianca Castro",
        "Gustavo Moreira", "Isabela Figueiredo", "Thiago Barbosa", "Aline Vasconcelos",
        "Eduardo Pereira", "Carolina Assis", "Felipe Moura", "Vanessa Carvalho",
        "Leonardo Teixeira", "Daniela Gomes", "Bruno Silveira", "Patrícia Medeiros",
        "Diego Rezende", "Natália Fonseca", "Rodrigo Campos", "Amanda Xavier",
        "Samuel Tavares", "Letícia Santana", "Henrique Monteiro", "Thaís Nascimento",
        "Everton Dias", "Sabrina Lemos", "Victor Hugo Sena", "Renata Paiva",
        "Alexandre Pacheco", "Júlia Mendes", "Wagner Brito", "Tainá Albuquerque",
        "Ricardo Sampaio", "Luana Xavier", "Marcelo Vasques", "Cláudia Amaral",
        "Daniel Farias", "Cecília Andrade"
    ]

    const date = new Date().toLocaleString([], { hour:"2-digit", minute:"2-digit"})

    const randomImage =  `https://picsum.photos/200/300?random=${Math.random()}`
    const random = Math.random() > 0.4 ? randomImage : null

    const mathRandom = RandomTweetsMath[Math.floor(Math.random() * RandomTweetsMath.length)];
    const mathRandomNames = randomNames[Math.floor(Math.random() * randomNames.length)];

    const seed = Math.random().toString(36).substring(7);
    const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/png?seed=${seed}`;

    addRandomTweets(mathRandomNames,date,mathRandom,avatarUrl,random)
  }

  useEffect(() => {
    const interval = setInterval(() => {
        addRandomTweetsTwitter();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {randomTweets.map((tweet) => (
        tweet.comments.map((comment)=>(
          <div key={comment.id} className="flex flex-col border-b border-b-zinc-700 mt-2"> 
            <div className="flex justify-between">
              <div className="flex gap-3 h-auto items-center">
                <Image
                  src={comment ? comment.image : profile }
                  alt="Image"
                  width={300}
                  height={100}
                  className="w-12 h-12 mr-2 rounded-full"
                />
                <p className="text-zinc-100">{user.firstName}</p>
                <p className="text-sm text-zinc-400">@{user.firstName} - {tweet.date}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-500 pl-17 mb-3">Replying to 
                <span className="text-blue-500 hover:underline">
                  @{comment.name}
                </span>
              </p>
            </div>
            <div className="pl-17">
              <p className="text-zinc-100 break-words whitespace-normal">{comment.post}</p>
            </div>
            <div className="flex mt-2.5 pl-10 md:pl-17 mb-2 gap-10 sm:gap-20 md:gap-16 lg:gap-10 xl:gap-20">
              <Tooltip>
                  <TooltipTrigger asChild>
                      <button type="button" className="cursor-pointer">
                          <RefreshCcw className="text-zinc-500" />
                      </button>
                  </TooltipTrigger>
                  <TooltipContent>Repost</TooltipContent>
              </Tooltip>
              <Tooltip>
                  <TooltipTrigger asChild>
                      <button 
                      onClick={()=>likeComment(comment.id)}
                      type="button" 
                      className="cursor-pointer">
                          <Heart className={`hover:text-red-700 duration-300 ${comment.like ? "text-red-700" : "text-zinc-500"} 
                          ${comment.like ? "fill-red-400" : "fill-accent-foreground"}`} 
                      />
                      </button>
                  </TooltipTrigger>
                  <TooltipContent>Like</TooltipContent>
              </Tooltip>
              <Tooltip>
                  <TooltipTrigger asChild>
                      <button
                      type="button"
                      className="text-sm text-zinc-500 flex gap-3 cursor-pointer"
                      >
                      <ChartColumnDecreasing className="text-zinc-500" />
                          24.000
                      </button>
                  </TooltipTrigger>
                  <TooltipContent>View</TooltipContent>
              </Tooltip>
              <Tooltip>
                  <TooltipTrigger asChild>
                      <button type="button" className="cursor-pointer">
                          <Download className="text-zinc-500" />
                      </button>
                  </TooltipTrigger>
                  <TooltipContent>Share</TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))
      ))}
      {randomTweets.map((tweet) => (
        <div 
        key={tweet.id} className={`flex flex-col gap-2 ${tweet.comments.length ? "mt-4" : "mt-2"}
        border-b border-b-zinc-700`}>
          <div className="flex justify-between">
            <div className="flex gap-3 h-auto items-center">
              <Link href={`/twitter/randomTwitter/${tweet.id}`}>
                <Image
                  src={tweet.image}
                  alt="Image"
                  width={700}
                  height={100}
                  className="w-12 h-12 mr-2 rounded-full"
                />
              </Link>
              
              <Link href={`/twitter/randomTwitter/${tweet.id}`} className="text-zinc-100">{tweet.name}</Link >
              <p className="text-sm text-zinc-400">@{tweet.name} - 2m</p>
            </div>
          </div>
          <div className="mt-2 pl-17 w-full h-full">
            <p className="text-zinc-100 break-words whitespace-normal">{tweet.post}</p>
          </div>
          {tweet.tweetImage && 
            <div>
              <Image
                src={tweet.tweetImage}
                alt="Tweet image"
                width={700}
                height={200}
                className="w-full h-96 rounded-md mt-2"
              />
            </div>
          }
         
          <div className="flex mt-8 pl-10 md:pl-17 gap-10 sm:gap-20 md:gap-16 lg:gap-10 xl:gap-18">
            <Tooltip>
                <TooltipTrigger className="gap-1.5 flex h-auto items-center" 
                asChild>
                    <button 
                    onClick={()=>clickCommenter(tweet.id,true)}
                    type="button" 
                    className="cursor-pointer">
                        <MessageSquare className="text-zinc-500 hover:text-blue-400 duration-300"/>
                        <span className="text-zinc-500 text-sm">
                          {tweet.comments.length}
                        </span>
                    </button>
                </TooltipTrigger>
                <TooltipContent>Comment</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button type="button" className="cursor-pointer">
                        <RefreshCcw className="text-zinc-500" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>Repost</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button 
                    onClick={()=>clickLike(tweet.id)}
                    type="button" 
                    className="cursor-pointer">
                        <Heart className={`hover:text-red-700 duration-300 ${tweet.like ? "text-red-700" : "text-zinc-500"} 
                        ${tweet.like ? "fill-red-400" : "fill-accent-foreground"}`} 
                    />
                    </button>
                </TooltipTrigger>
                <TooltipContent>Like</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                    type="button"
                    className="text-sm text-zinc-500 flex gap-3 cursor-pointer"
                    >
                    <ChartColumnDecreasing className="text-zinc-500" />
                        24.000
                    </button>
                </TooltipTrigger>
                <TooltipContent>View</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button type="button" className="cursor-pointer">
                        <Download className="text-zinc-500" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>Share</TooltipContent>
            </Tooltip>
          </div>
          <DialogReploy tweet={tweet}/>
        </div>
      ))}
    </div>
  );
};

export default RandomTweets;
