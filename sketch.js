var homem,homem_correndo;
var estrada,estrada_imagem;

function preload(){
  homem_correndo = loadAnimation("runner-1.png","runner-2.png");
  estrada_imagem = loadImage("path.png"); 
}

function setup(){
  createCanvas(400,400);
  
  estrada = createSprite(190,20);
  estrada.addImage("ground",estrada_imagem);
  estrada.scale = 1.4;
  estrada.width/2;
  estrada.velocityY = 4
  
  homem = createSprite(190,335);
  homem.addAnimation("running",homem_correndo);
  homem.scale = 0.08;
}

function draw(){
  background("black");

   if (keyDown("RIGHT")){
     homem.x = homem.x +3;
   }
   if (keyDown("LEFT")){
     homem.x = homem.x -3;
   }

   if (estrada.y > 400){
     estrada.y = estrada.width/2;
   }

//Nao entendi para que serve aquela barreira invisivel e para o homem nao sair de tela?caso for eu fiz dessa forma
   if(homem.x < 60){
     homem.x = 60;
   }
    
   if(homem.x > 340){
     homem.x = 340;
   }

  drawSprites();
}