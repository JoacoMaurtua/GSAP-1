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

TweenLite.to(square1, 4, {
  backgroundColor: '#ffea00',
  y: 200,
  autoAlpha: 1
})

TweenLite.set(square2, { //No necesita duracion
  backgroundColor: '#ffea00',
  y: 200,
  autoAlpha: 0
})

TweenLite.from(square3, 4, { //Lo contario a to
  backgroundColor: '#ffea00',
  y: 200,
  autoAlpha: 0
})

TweenLite.fromTo(square4, 4, { //Lo contario a to
    backgroundColor: '#ffea00',
    y: 200,
    autoAlpha: 0
  },

  {
    backgroundColor: '#ffea00',
    y: -150,
    autoAlpha: 1
  }

);

