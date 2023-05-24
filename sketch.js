//variables rect rojo
let xrojo = 350; // inicio eje x
let yrojo = 0; // inicio eje y
let velocidadrojo = 6;

//variables rect azul
let xazul = 0; // inicio x
let yazul = 400; // inicio y
let velocidadazul = 2;

// variables rect amarillo
let xamarillo = 0; // inicio x
let yamarillo = 50; // inicio y
let velocidadamarillo = 5;
let direccionamarillo = 1; // movimiento hacia abajo

// variables rect blanco
let xblanco = 460; // inicio x
let yblanco = 600; // inicio y
let velocidadblanco = 5;
let direccionblanco = -1; // movimiento hacia arriba

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  background(255);
  strokeWeight(20);
  
  fill(255, 255, 255); //BLANCO 1
  rect(80, 60, 200, 180);

  fill(255, 255, 255); //BLANCO 2
  rect(200, 240, 200, 430);

  fill(255, 255, 255); //BLANCO 3
  rect(23, 430, 600, 300);

  fill(255, 255, 255); //BLANCO 4
  rect(452, 224, 300, 400);

  
  
  
  push();
  fill(255, 255, 255);
  rect(xblanco, yblanco, 130, 110); //rect en posición inicial

  yblanco += velocidadblanco * direccionblanco; // Mover el rect hacia arriba

  if (yblanco < 0) { // Si el rect alcanza la parte superior del lienzo
    yblanco = 600; // Cambia la dirección del movimiento a hacia abajo
  }
  pop();
    
  
  
  
  push();
  fill(230, 0, 0);
  rect(xrojo, yrojo, 270, 250); //rect posición original

  xrojo += velocidadrojo; //rect se mueve hacia la derecha

  if (xrojo > 600) { // Si el rect alcanza el borde derecho del lienzo
    xrojo = 0; //rect se mueve hacia el borde izquierdo
  }
  pop();
 
  
  
  
  push();
  fill(0, 0, 150);
  rect(xazul, yazul, 210, 180); //rect en la posición original

  xazul += velocidadazul; //rect se mueve hacia la derecha

  if (xazul > 600) { // Si el rect alcanza el borde derecho del lienzo
    xazul = 0; //rect se mueve hacia el borde izquierdo
  }
  pop();

  
  
  
  push();
  fill(255, 255, 0);
  rect(xamarillo, yamarillo, 130, 110); //rect en la posición original

  yamarillo += velocidadamarillo * direccionamarillo; // Mover el rect en la dirección actual

  if (yamarillo > 600) {// Si el rect alcanza la parte inferior del lienzo
    direccionamarillo = -1; // Cambia movimiento hacia arriba
  }

  if (yamarillo < 0) { // Si el rect alcanza la parte superior del lienzo
    direccionamarillo = 1; // Cambia movimiento hacia abajo
  }
  pop();

 
  console.log("X: " + mouseX + " Y:" + mouseY);
}
