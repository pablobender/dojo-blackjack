function Mao (){
	this.cartas = new Array();
	this.valorCarta = function(carta){
		if(carta > 10) {
  			return 10;
		}
		return carta;
	}
	this.temAs = false;
}

Mao.prototype.addCarta = function(carta){
	this.cartas[this.cartas.length] = carta;
	if (carta == 1)
		this.temAs = true;
}

Mao.prototype.soma = function() {
  var soma = 0;
  for(i=0; i<this.cartas.length; i++) {
  		soma += this.valorCarta(this.cartas[i])
  }
  if(soma < 21 && this.temAs && soma+10 <= 21) {
  	soma += 10;
  }
  return soma;
};

Mao.prototype.blackjack = function(){
	return this.soma() == 21;
}

Mao.prototype.estaFora = function(){
  return this.soma() > 21;
}

function BlackJack(maos){

	this.baralho = new Array();
	this.maos = new Array();

	for(i=1; i<= 13; i++){
		for(j = 0; j < 4; j++){
			this.baralho[this.baralho.length] = i;
		}
	}

	this.baralho.sort( randOrd );
	this.cartaAtual = 0;

	for(i=0; i<maos; i++) {
		this.maos[i] = new Mao();
		this.maos[i].addCarta(this.baralho[this.cartaAtual++]);
		this.maos[i].addCarta(this.baralho[this.cartaAtual++]);
	}
}

function randOrd(){
	return (Math.round(Math.random())-0.5); 
}

BlackJack.prototype.getCartaDoTopo = function(){

}




