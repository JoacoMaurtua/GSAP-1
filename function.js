/**********Hay 3 formas para crear una interpolacion***********/

//1ra: Usando new para crear una instancia
//const t1 = new TweenLite.method(element,duration,vars)

//2da:
//const t1 = TweenLite.method(element,duration,vars)

//3ra:
//TweenLite.method(element,duration,vars)


//element --> Es literalmente el elemento que queremos animar
//duration --> Duracion de la animacion
//vars --> objeto que contiene las propiedades que cambiaremos a lo largo de la aplicacion

/***********Metodos GSAP***********/

// to --> Este metodo establece los valores de las propiedades
//        y el objeto como se estable el estado final del elemento

// set --> Lo mismo que to pero hace la animacion al instante

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');

const hello =()=>{
  window.alert('Start!');
}

const bye =()=>{
  window.alert('Finished!')
}

  TweenLite.to(square1, 4, {
  backgroundColor: '#ffea00',
  y: 200,
  autoAlpha: 1,
  //onStart: hello, --> alerta que se ejecuta antes de la animacion
  //onComplete: bye --> alerta que se ejecuta despues de la animacion
}) 

/* TweenLite.set(square2, { //No necesita duracion
  backgroundColor: '#ffea00',
  y: 200,
  autoAlpha: 0
}) */

TweenLite.to(square2,4, { 
  backgroundColor: 'deepskyblue',
  y: 200,
  autoAlpha: 1
})

TweenLite.from(square3, 4, { //Lo contario a to
  backgroundColor: '#ffea00',
  y: ()=>{
    return Math.random()*300
  },
  autoAlpha: 0
}) 

TweenLite.fromTo(square4, 2, { //Lo contario a to
    backgroundColor: '#ffea00',
    y: 200,
    autoAlpha: 0,
    ease: Power4.easeOut
  },

  {
    backgroundColor: '#ffea00',
    y: -50,
    autoAlpha: 1,
    ease: Power2.easeIn
  }

); 

//Podemos agrupar elementos en array y aplicarles los metodos

/* const squaresArray = [square1, square3];

TweenLite.to(squaresArray,4,{
  backgroundColor: 'red',
  y: 200,
  autoAlpha: 0
})
 */
//O por su id 

/* const squares = document.querySelectorAll('.square');

TweenLite.from(squares, 1,{
  backgroundColor: 'red',
  y: 200
}) */

/*******Algunas propiedades importantes********/

//ease --> Funcion de sincronizacion: de que potencia a que potencia va el elemento

//onStart --> Toma una funcion que se activa antes de que comience la animacion

//onComplete --> Lo contrario a onStart

/*********TWEEN MAX*******/

//Tiene 3 metodos adicionales

//Tiene algunas propiedades adicionales: al
      //repeat: especificar el numero de repeticiones que puede tener un objeto
      //yoyo: Vaya al estado final de la animacion y regrese y viceversa
      //cycle: Crea un patron de movimientos gracias que puede tomar un array de propiedades


//staggerTo --> Anima los objetos despues de un rtraso que podemos especificar 

//staggerFrom --> Igual que form pero s epuede especificar retraso

//staggerFromTo

const squaresMaxArray = document.querySelectorAll('.squareMax')

 /* TweenMax.staggerTo(squaresMaxArray,1,{
  backgroundColor: '#ffea00',
  y: 200,
  stagger: 0.5,
  repeat: 10
})  */

/* TweenMax.staggerFrom(squaresMaxArray,1,{
  backgroundColor: '#ffea00',
  y: 200,
  //stagger: 0.5,
  repeat:-1,
  yoyo:true
})  */

/*  TweenMax.staggerFromTo(squaresMaxArray,1,{
      backgroundColor: '#ffea00',
      y:200
    },
    {
      backgroundColor: '#ff1493',
      y: -100,
      stagger: 0.5
    }
);  */

TweenMax.staggerFrom(squaresMaxArray,1,{
  cycle:{
    backgroundColor: ['#ffea00', '#ffea00'],
    y: [-100,100]
  },
  stagger: 1
 
 
})