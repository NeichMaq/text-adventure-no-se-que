var monedero= 0;
var vidajugador= 20;
var pegar= 1;
var nivel=1;

//montruos
//nivel 1
const zombie ={
    monedasalmorir : 1,
    vida : 2,
    daño : 4,
}
const esqueleto ={
    monedasalmorir : 4,
    vida : 6,
    daño : 4
}
const bully ={
    monedasalmorir : 3,
    vida : 3,
    daño : 10 //viste lo que hice XD daño emocional grave
}
const perro ={
    monedasalmorir : 2,
    vida : 5,
    daño : 2
}
//nivel 2 (el demonio es muy chungo para nivel 1)
const demonio ={
    monedasalmorir : 8,
    vida: 12,
    daño: 6
}
//herramientas
const espadainicial={
    daño: 2
}
//armadura
const botasiniciales ={
    armadura : 2
}
const pecherainicial ={
    armadura : 6
}
const pantalonesiniciales ={
    armadura :4
}
const initialhelmet ={
    armadura :3
}
//numero aleatorio entero entre 2 numeros
function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getRandomIntInclusive2(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
/*funcion para sacar mobs= caminar()
function caminar() { 
    getRandomIntInclusive2();
    if (getRandomIntInclusive2==1){
        var mob = zombie
    } else if(getRandomIntInclusive2==2){
        var mob = esqueleto
    } else if(getRandomIntInclusive2==3){
        var mob = bully
    } else if(getRandomIntInclusive2==4){
        var mob = perro
    }
}
  // Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.
    //pelear¿?
    if (mob==zombie){
        while(zombie.vida>0){
        console.log("En el camino, te encuentras con un zombie buscando un buen puñetazo, ¿Que quieres hacer?")
        decision1 =parseInt(prompt("1- Vamos a pelear /n 2- Mejor me voy /n 3-Lo meo"))
        switch (parseInt) {
            case 1:
                zombie.vida= zombie.vida - pegar()
            break;
    
            case 2:
                getRandomIntInclusive()
                  if(getRandomIntInclusive==1){
                    console.log("Escapada con exito")
                  } else if(getRandomIntInclusive!=1){
                    console.log(`No puedes escapar esta vez. A lo lejos oyes a alguien decir "JODETE"`)
                  }
                  break;
            case 3:
                console.log("Lo meas encima,solo lo enfurece más")
                break;
        
            default:
                console.log("El zombie te empieza a pegar por imbecil")
                vidajugador=vidajugador - zombie.daño
                break;
        }
    
        for(zombie.vida==0;;monedero++){
            console.log("Zombie derrotado, ganas 1 moneda")
        }
    }} else if( mob==esqueleto){
        while(esqueleto.vida>0){
        console.log("En el camino, te encuentras con un esqueleto, ¿Que quieres hacer?")
        decision1 =parseInt(prompt("1- Vamos a pelear /n 2- Mejor me voy /n 3-Lo meo"))
        switch (parseInt) {
            case 1:
                esqueleto.vida= esqueleto.vida - pegar()
            break;
    
            case 2:
                getRandomIntInclusive
                  if(getRandomIntInclusive==1){
                    console.log("Escapada con exito")
                  } else if(getRandomIntInclusive!=1){
                    console.log(`No puedes escapar esta vez. A lo lejos oyes a alguien decir "JODETE"`)
                  }
                  break;
            case 3:
                console.log("Lo meas encima,solo lo enfurece más")
                break;
        
            default:
                console.log("El esqueleto te empieza a pegar por imbecil")
                vidajugador=vidajugador - esqueleto.daño
                break;
        }
    
        for(esqueleto.vida==0;;monedero+=4){
            console.log("Esqueleto derrotado, ganas 4 monedas")
        }
    }} else if(mob==bully){
        while(bully.vida>0){
        console.log("En el camino, te encuentras con un bully, ¿Que quieres hacer?")
        decision1 =parseInt(prompt("1- Vamos a pelear /n 2- Mejor me voy /n 3-Lo meo"))
        switch (parseInt) {
            case 1:
                perro.vida= bully.vida - pegar()
            break;
    
            case 2:
                function getRandomInt(min , max) {
                    min = Math.ceil(1);
                    max = Math.floor(2);
                    return Math.floor(Math.random() * (max - min) + min);
                  }
                  if(getRandomInt==1){
                    console.log("Escapada con exito")
                  } else if(getRandomInt!=1){
                    console.log(`No puedes escapar esta vez. A lo lejos oyes a alguien decir "JODETE"`)
                  }
                  break;
            case 3:
                console.log("Lo meas encima,solo lo enfurece más")
                break;
        
            default:
                console.log("El bully te empieza a pegar por imbecil")
                vidajugador=vidajugador - bully.daño
                break;
        }
        console.log("Bully te pega con su daño emocional.")
        vidajugador=vidajugador - bully.daño
    
        for(bully.vida==0;;monedero+=3){
            console.log("Bully derrotado, ganas 3 monedas")
        }
    }} else if(mob==perro){
        while(perro.vida>0){
        console.log("En el camino, te encuentras con un perro sarnoso, ¿Que quieres hacer?")
        decision1 =parseInt(prompt("1- Vamos a pelear /n 2- Mejor me voy /n 3-Lo meo"))
        switch (parseInt) {
            case 1:
                perro.vida= perro.vida - pegar()
            break;
    
            case 2:
                function getRandomInt(min , max) {
                    min = Math.ceil(1);
                    max = Math.floor(2);
                    return Math.floor(Math.random() * (max - min) + min);
                  }
                  if(getRandomInt==1){
                    console.log("Escapada con exito")
                  } else if(getRandomInt!=1){
                    console.log(`No puedes escapar esta vez. A lo lejos oyes a alguien decir "JODETE"`)
                  }
                  break;
            case 3:
                console.log("Lo meas encima,solo lo enfurece más")
                break;
        
            default:
                console.log("El perro te empieza a morder por imbecil")
                vidajugador=vidajugador - bully.daño
                break;
        }
        console.log("El perro te muerde.")
        vidajugador=vidajugador - bully.daño
    
        for(bully.vida==0;;monedero+=2){
            console.log("Perro derrotado, ganas 2 monedas")
        }
    }}

  
*/
//lugares nivel 1

console.log("A donde quieres ir?")
var lugares=parseInt(prompt("1- A la playa /n 2- A la taberna /n 3- A la montaña"))
monedero=monedero+1
if(lugares==1){
        console.log("llendo a la playa te encuentras con una figura a lo lejos ¿Que sera?");
        //caminar();
        playa();
} /*else if(lugares==2){
        console.log("llendo a la taberna te encuentras con una figura a lo lejos ¿Que sera?")
        //caminar();
        tabernanoche()
} else if(lugares==3){
    console.log("llendo a la montaña te encuentras con una figura a lo lejos ¿Que sera?");
    var montaña;
    //caminar();
    montaña()
}*/
function playa(){
    do{
        console.log("Quieres ir a la playa pero no hay nadie para acompañarte, así que emprendes el viaje solo.")
        monedero=monedero+1
        var decisionplaya1= parseInt(prompt("Al llegar hasta la playa escuchas que algo raro pasa¿Deseas escuchar lo que pasa( 1 ) /n o hacerte el que no escucho? ( 2 )"))
        if(decisionplaya1==1){
                escuchar();
        }else if(decisionplaya1==2){
                noescuchar();
                
        }
    } while(decisionplaya1<1 && decisionplaya1>2) {
        console.log("opción incorrecta")
    }
}
function noescuchar(){
    do{
        console.log("Prefieres no escuchar y disfrutar tranquilamente de la playa. Al anochecer piensas ver algo verde a la distancia a tu derecha, y unos ruidos extraños a tu izquierda, aunque tranquilamente te podrías ir.")
        var decisionnoescucha= parseInt(prompt("¿Vas a la derecha(1), a la izquierda(2), o te vas acobardado(3)?"))
        monedero=monedero+1
        if(decisionnoescucha==1){
                verde()
        }else if (decisionnoescucha==2){
                cueva()
        }else if(decisionnoescucha==3){
                Irsedelaplaya()

        }
    } while(decisionnoescucha>3 && decisionnoescucha<1){
        console.log("decision incorrecta")
    }
}
function tabernanoche(){
    console.log("Te vas directo a la taberna.Una vez llegado, cruzas la puerta y te encuentras solo con el cantinero.")
    var opciontn =parseInt(prompt("¿Qué vas a hacer? 1- Pedir algo. /n 2- Preguntar sobre las noticias del pueblo. n/ 3-Irte"))
    monedero=monedero+1
    if(opciontn==1){
        pediralgo()
    } else if(opciontn==2){
        noticiaspueblo()
    } else if (opciontn==3){
        irsetaberna()
    }
}
function irsetaberna(){
    monedero=monedero+1
    console.log("A medida que vas saliendo, escuchas explosiones a la distancia¿Será tu fin por no decidir bien?¿Será porque elegiste irte de todos lados? Solo el destino lo sabrá.")
}
function verde(){
    do{
        monedero=monedero+1
      console.log("Vas a ver que pasa allí, pero la luz va aumentando la intensidad hasta que no ves nada. Al rato te despiertas todo desnudo y en medio de un pentagrama.¿Que habra pasado?")  
      console.log("No se sabe, pero lo único que se sabe es que te encuentras en el medio del pentagrama con las manos y pies atados en el piso creando una estrella perfecta, junto a la escena de un crimen por estacadas a una persona(ya no, es claro que murio.")
      var decisionverde= parseInt(prompt("¿Que haras? /n 1-Esperar un rato mientras recobras el aliento. /n 2-Desatarte e irte, asumiendo la culpa."))
      switch (decisionverde>=1 && decisionverde<=2){
        case 1:
            esperar();
            break;
        case 2:
            escaparplaya();
            break;
      }
    
    }while(decisionverde<1 && decisionverde>2){
        console.log("decision incorecta")
    }
}
function casa(){
    monedero=monedero+1
    console.log("Vas hasta tu casa. En el camino ves una figura pero no logras terminar de saber que es por la noche.")
    console.log("A medida que te vas acercando te das cuenta de lo que es.")
    //caminar()
    console.log("Una vez pasado esa cosa, a medida que vas llegando pero ves como desaparece a medida que te acercas.")
    do{
        var decisioncasa1= parseInt(prompt("Y en su lugar queda un portal /n 1-¿Cruzarlo en busca de respuestas? o /n 2-¿volver atrás a la taberna?"))
        switch(decisioncasa1<=2 && decisioncasa1>=1){
            case 1:
                console.log("Cruzas el portal y llegas a un lugar desconocido")
                console.log("INTERMISION")
                console.log("Gracias por probar mi primer text-adventure, nos vemos la siguiente")
                break;
            case 2:
                tabernanoche()
                break;
        }
    }while(decisioncasa1>=3 && decisioncasa1<=0){
        console.log("Casi terminabas la primera parte del text-adventure, hasta la proxima! No hay nada detras del portal PORAHORA")
    }
}
function escaparplaya(){
    monedero=monedero+1
    console.log("Te terminas de desatar y llegas a tu casa, al rato, parece que esa escena capto la atención de los policías, pues en todos los canales de noticias se habla sobre el pentagrama y la escena de un crimen con el cuerpo que viste allí")
    console.log("si tratas de explicar algo no sabrás que hacer. Asique te quedas en tu casa.")
    console.log("Nos vemos en la segunda temporada de este text-adventure, o cuando lo expanda. Por Ahora puedes explorar las distintas opciones.")
}
function esperar(){
    monedero=monedero+1
    console.log("Mientras recobras la cordura, al ratito de quedarte escuchas un ruido extraño como de ascensor, o algo asi. Pues se esta abriendo algo.")
    console.log("Cuando te das cuenta estas bajando, donde hay una puerta gigantesca a algun lugar, ya no puedes ver la salida, pues no llegas a irte.")
    prompt("1-Pasar a traves de la puerta")
    puerta()
}
function puerta(){
    monedero=monedero+1
    console.log("Ya no puedes escapar, pues cuando cruzas la puerta parece ser una mazmorra o algo parecido, donde se encuentra una sociedad secreta")
}
function escuchar(){
    monedero=monedero+1
    do{
        console.log("Dicen que cuando oscurece hay una luminiscencia verde que viene de una parte de la playa, hasta hay personas que practican magia negra allí y sacrifican otras cosas, otras que fueron hasta allí y no se los vio más.")
        console.log("Para el otro lado, cerca de una cueva, se escuchan ruidos raros provenir de las profundidades, dicen que son almas en pena de gente que fue llevada alli por razones desconocidas a matarse.")
        var decisionescuchaplaya=parseInt(prompt("A medida de que se va haciendo de noche tienes intrigas que responder/n 1- ¿Iras a ver que se trata el resplandor verde? /n 2-¿Iras a ver que son esos ruidos que se dijeron?/n 3-¿Te acobardarse y te iras de la playa?"))
        switch(decisionescuchaplaya<=3 && decisionescuchaplaya>=1){
            case 1:
                verde()
                break;
            case 2:
                cueva();
                break;
            case 3:
                Irsedelaplaya();
                break;
        }
    }while(decisionescuchaplaya<1 && decisionescuchaplaya>3){
        console.log("opción incorrecta")
    }
}
function cueva(){
    monedero=monedero+1
    console.log("Vas a fijarte que pasa que se dice que se escuchan ruidos extraños, pero no encuentras nada.")
    var decisioncueva1= parseInt(prompt("¿Deseas volver mas tarde(1) o irte directamente de la playa()2?"))
}
function volvermastarde(){}

function Irsedelaplaya(){
    do{
        console.log("Te vas de la playa tranquilamente pero puedes elegir entre ir a una taberna o ir a tu casa")
        var decisionirseplaya1= parseInt(prompt("1-ir a taberna                   2-ir a casa"))
        if(decisionirseplaya1==1){
            tabernanoche()
        } else if(decisionirseplaya1==2){
            casa()
        }
    } while(decisionirseplaya1>2 && decisionirseplaya1<1){
        console.log("Decision culera, vayase trate otra vez")
    }
}




/*if(decision=="ver el monedero"){
    console.log("Tienes " + monedero + "monedas, pero todavia quedan mas por agarrar")
}

/*tiendas
if(decision=="Ir a la tienda inicial"){
    console.log(`Mientras entras por la puerta de madera a la tienda, escuchas que te dicen "Bienvenido a la tienda para jugadores iniciales..."`)
    let comprar = parseInt(prompt(`¿Que le gustaria comprar...? (ingresar numero) /n 1- espada inicial(100 monedas) /n 
    2- Botas iniciales(20 monedas) /n 3- Pantalones Iniciales(40 monedas) /n 4- Pechera inicial(60 monedas) /n 5-Casco inicial (30 monedas)`))
} else if(decision=="Ir a la tienda costosa")*/