class Player {
	//プレイヤー名
	name;

	//プレイヤーの出す手
	hand;

	//勝った回数
	winCount;

	//勝率
	winPercentage;

	constructor(name){
		this.name = name;
		this.hand = "グー";
		this.winCount = 0;
		this.winPercentage = 0;
	}

	//グー、チョキ、パーをランダムに選んでくれる
	randomizeHand(){
		this.hand = hands[Math.floor(Math.random() * 3)];
	}

	//プレイヤーの勝率を計算する
	calculateWinPercentage(totalPlayCount){
		this.winPercentage = ((this.winCount / totalPlayCount) * 100).toFixed(2);
	}
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

const hands = ["グー", "チョキ", "パー"];

let totalPlayCount = 0;

const numberInput = document.getElementById("playLimit");
let playLimit = 0;
numberInput.addEventListener("input", function () {
    playLimit = Number(numberInput.value);
});

let drawCount = 0;
let drawPercentage = 0;

let hero = new Player("Hero");
let villan = new Player("Villan");

const heroHandPara = document.getElementById("heroHand");
const villanHandPara = document.getElementById("villanHand");

const heroWinPercentagePara = document.getElementById("heroWinPercentage");
const villanWinPercentagePara = document.getElementById("villanWinPercentage");
const drawPercentagePara = document.getElementById("drawPercentage");

const totalPlayCountPara = document.getElementById("totalPlayCount");

//指定した回数までじゃんけんを続けて終了したら勝率を計算する
function startGame(){
	drawCount = 0;
	hero = new Player("Hero");
	villan = new Player("Villan");
	totalPlayCount = 0;

	while(true){
		hero.randomizeHand(); 
		villan.randomizeHand();

		heroHandPara.textContent = hero.hand;
		villanHandPara.textContent = villan.hand;
		
		sumResult(hero.hand, villan.hand);
		totalPlayCount++;

		if(totalPlayCount === playLimit){
			calculatePercentage();
			break;
		}
	}	
}

function sumResult(heroHand, villanHand){
	if(heroHand === villanHand){
		drawCount++;
	}else if(heroHand == "グー" && villanHand == "チョキ"){
		hero.winCount++;
	} else if(heroHand == "チョキ" && villanHand == "パー"){
		hero.winCount++;
	} else if(heroHand == "パー" && villanHand == "グー"){
		hero.winCount++;
	}else{
		villan.winCount++;
	}
}

function calculatePercentage(){
	hero.calculateWinPercentage(totalPlayCount);
	villan.calculateWinPercentage(totalPlayCount);
	calculateDrawPercentage(totalPlayCount);

	heroWinPercentagePara.textContent = `Hero勝率 : ${hero.winPercentage} %`;
	villanWinPercentagePara.textContent = `Villan勝率 : ${villan.winPercentage} %`;
	drawPercentagePara.textContent = `Draw確率 : ${drawPercentage} %`;
	totalPlayCountPara.textContent = `合計じゃんけん回数 : ${totalPlayCount} 回`;
}

function calculateDrawPercentage(totalPlayCount){
	drawPercentage = ((drawCount / totalPlayCount) * 100).toFixed(2);
}
