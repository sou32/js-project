const questions = {
	"蒼太くんの年齢は？": 20,
	"蒼太くんの苗字は": "尾﨑",
	"蒼太くんの好きな人は(フルネームで)": "杉江麻衣",
	"蒼太くんの好きな食べ物は？": "ハンバーグ",
	"蒼太くんの誕生日は?": "3月29日"
};

	const startButton = document.getElementById("startButton");
	const questionPara = document.getElementById("question");
	const answerPara = document.getElementById("answer");
	const correctCountPara = document.getElementById("correctCount");
	let correctCount = 0;
  	let currentQuestionIndex = 0; // 現在の質問のインデックスを追加

	startButton.addEventListener("click", quizStart);

	function quizStart() {
		// ボタンがクリックされたら、最初の質問を表示
		showNextQuestion();
	}

	function showNextQuestion() {
	if (currentQuestionIndex < Object.keys(questions).length) {
		const question = Object.keys(questions)[currentQuestionIndex];
		questionPara.textContent = question;

		answerPara.addEventListener("input", function handleAnswerInput() {
		const userAnswer = answerPara.value;
		const correctAnswer = questions[question];

		if (userAnswer === String(correctAnswer)) {
			alert("正解！！");
			correctCount++;
		} else {
			alert("不正解!!");
		}

		// 次の質問に進む前に、イベントリスナーを削除
		answerPara.removeEventListener("input", handleAnswerInput);
		answerPara.textContent = "";
		// 次の質問に進む
		currentQuestionIndex++;
		showNextQuestion();
	});
	} else {
	  // すべての質問が終了したら結果を表示
		correctCountPara.textContent = `${correctCount}問正解`;
	}
}
