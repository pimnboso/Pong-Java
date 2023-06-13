// INFORMAÇÕES PLACAR //
let PontosJ1 = 0;
let PontosJ2 = 0;

// INFORMAÇÕES RAQUETE 1 //
let Xraquete1 = 20;
let Yraquete1 = 150;
let LarguraRaquete1 = 10;
let AlturaRaquete1 = 130;

//INFORMAÇÕES RAQUETE 2 //
let Xraquete2 = 760;
let Yraquete2 = 150;
let LarguraRaquete2 = 10;
let AlturaRaquete2 = 130;
let VelR2;
//Variáveis do som//
let raquetada;
let ponto;
let trilha;

//informações da bolinha//
let PositionXBolinha = 400;
let PositionYBolinha = 200;
let DiamiterBolinha = 30;
let raioBola = DiamiterBolinha/2

//Velocidade da bolinha//
let VeloBolaX = 8;
let VeloBolaY = 8;


function setup() {
  createCanvas(800, 400);
  trilha.loop();
}
//SONS//
function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}
//REFATORAÇÃO + SUMARIO//

function draw() {
  background(0);
  desenharBola()
  movimentoBola()
  colisaoBola()
  desenharRetangulo1(Xraquete1, Yraquete1)
  desenharRetangulo2(Xraquete2, Yraquete2)
  cimaRaquete1();
  baixoRaquete1();
  colisaoRaquete1();
  colisaoRaquete2();
  IARaquete2();
  Placar();
  }





//===================================FUNÇÕES BASICAS BOLA===================================//

function desenharBola(){
  circle(PositionXBolinha, PositionYBolinha, DiamiterBolinha);
  }

function movimentoBola(){
    PositionXBolinha += VeloBolaX;
  PositionYBolinha += VeloBolaY;
}

function colisaoBola(){
    if (PositionXBolinha + raioBola > width ||
     PositionXBolinha - raioBola < 0){
    VeloBolaX *= -1;
    }
  if (PositionYBolinha + raioBola > height ||
     PositionYBolinha - raioBola < 0){
    VeloBolaY *= -1;
  }
}






//================================FUNÇÕES BASICAS RAQUETES===================================//

// RAQUETE JOGADOR 1//
function desenharRetangulo1(x,y){
  rect(x, y, LarguraRaquete1, AlturaRaquete1)
}

function cimaRaquete1(){
 if (keyIsDown(UP_ARROW)){
    Yraquete1 -= 10;
  }
}

function baixoRaquete1(){
 if (keyIsDown(DOWN_ARROW)){
    Yraquete1 += 10;
  }
}

function colisaoRaquete1(){
  if (PositionXBolinha - raioBola < Xraquete1 + LarguraRaquete1
&& PositionYBolinha - raioBola < Yraquete1 + AlturaRaquete1 && PositionYBolinha + raioBola > Yraquete1){
    VeloBolaX *= -1;
    raquetada.play();
  }
}



// RAQUETE JOGADOR 2//

function desenharRetangulo2(x,y){
  rect(x, y, LarguraRaquete2, AlturaRaquete2)
}


function colisaoRaquete2(){
  if (PositionXBolinha + raioBola > Xraquete2
&& PositionYBolinha - raioBola < Yraquete2 + AlturaRaquete2 && PositionYBolinha + raioBola > Yraquete2){
    VeloBolaX *= -1;
    raquetada.play();
  }
}

function IARaquete2(){
  VelR2 = PositionYBolinha -Yraquete2 + LarguraRaquete2 / 2 -155;
  Yraquete2 += VelR2
}

//=================================PLACAR===================================================//

function Placar(){
  textAlign(CENTER);
  textSize(20);
  stroke(255);
  fill(color(255,165,0));
  rect(150, 10, 40, 20);
  rect(650, 10, 40, 20);
  fill(255);
  text(PontosJ1, 170, 26);
  fill(255);
  text(PontosJ2, 670, 26);
  if (PositionXBolinha > 790){
    PontosJ1 += 1;
    ponto.play();}
  
  if (PositionXBolinha < 10){
    PontosJ2 += 1;
    ponto.play();}
}