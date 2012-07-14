describe("mao", function() {
 beforeEach(function() {
    mao = new Mao();
  });

  it("Dado uma mao com uma carta a soma deve ser o valor da mesma", function() {
  		mao.addCarta(10);
  		 expect(mao.soma()).toEqual(10);

  });

    it("Dado uma mao com duas cartas a soma deve ser o valor das duas", function() {
  		mao.addCarta(10);
  		mao.addCarta(10);
  		 expect(mao.soma()).toEqual(20);

  });

  it("Mão com 3x7 faz blackjack", function() {
  		mao.addCarta(7);
  		mao.addCarta(7);
  		mao.addCarta(7);
  		expect(mao.blackjack()).toBeTruthy();
  });

  it("Mão com 2x7 não faz blackjack", function() {
  		mao.addCarta(7);
  		mao.addCarta(7);
  		expect(mao.blackjack()).toBeFalsy();
  });

  it("Mão com mais de 21 está fora", function() {
  		mao.addCarta(7);
  		mao.addCarta(7);
  		mao.addCarta(8);
  		expect(mao.estaFora()).toBeTruthy();
  });

  it("Mão com menos de 21 continua no jogo", function() {
  		mao.addCarta(7);
  		mao.addCarta(7);
  		mao.addCarta(6);
  		expect(mao.estaFora()).toBeFalsy();
  });

  it("Mão recebe uma Valete e o valor da mao deve ser 10", function() {
  		mao.addCarta(11);
  		 expect(mao.soma()).toEqual(10);
  });


  it("Mão recebe uma Dama e o valor da mao deve ser 10", function() {
  		mao.addCarta(12);
  		 expect(mao.soma()).toEqual(10);
  });

  
  it("Mão recebe uma Reis e o valor da mao deve ser 10", function() {
  		mao.addCarta(13);
  		 expect(mao.soma()).toEqual(10);
  });
  it("Mão recebe um Ás e um 10 deve ser blackjack", function() {
  		mao.addCarta(1);
  		mao.addCarta(10);
  		expect(mao.blackjack()).toBeTruthy();
  }); 

   it("Mão recebe Ás, ÁS, 8 deve ser 20", function() {
  		mao.addCarta(1);
  		mao.addCarta(1);
  		mao.addCarta(8);
  		expect(mao.soma()).toEqual(20);
  });

it("Mão recebe Ás, 10, 10 deve ser blackjack", function() {
  		mao.addCarta(10);
  		mao.addCarta(10);
  		mao.addCarta(1);
  		expect(mao.blackjack()).toBeTruthy();
  });   
it("Mão recebe Ás, 9, 10 deve continuar no jogo", function() {
  		mao.addCarta(1);
  		mao.addCarta(9);
  		mao.addCarta(10);
  		expect(mao.estaFora()).toBeFalsy();
  });

});

describe("jogo", function() {
  beforeEach(function() {
    jogo = new BlackJack(2);
  });

  it("Primeiro jogador deve ter duas cartas", function() {
	expect(jogo.maos[0].cartas.length).toEqual(2);
  	
  });
});