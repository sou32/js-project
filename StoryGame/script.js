const Words = ["私の", "名前は","太郎", "です、","料理が", "好きです。"];

const List = document.createElement("ul");
List.innerHTML = '';
Words.forEach(element => {
	let WordElement = document.createElement("li");
	WordElement.textContent = element;
	List.appendChild(WordElement);
});

document.body.appendChild(List);
const explanory = document.createElement("h3");
explanory.textContent = "上記の六つの単語を使って文章を完成させよう、ちなみに被りありランダム";

document.body.appendChild(explanory);

const CreateButton = document.createElement("button");
CreateButton.textContent = "作成ボタン";
document.body.appendChild(CreateButton);
CreateButton.addEventListener('click', createstory);

const ResetButton = document.createElement("button");
ResetButton.textContent = "リセットボタン";
document.body.appendChild(ResetButton);
ResetButton.addEventListener('click', resetcontent);


function createstory(){
	const content = document.createElement("p");
	content.id = "story";
	content.innerHTML = '';
	let story = "";
	for(i = 0; i < Words.length; i++){
		let number = Math.floor(Math.random() * Words.length);
		let next_word = Words[number];
		story += next_word;

	}
	content.textContent = story;
	document.body.appendChild(content);
	if(story === "私の名前は太郎です、料理が好きです。")
		alert("おめでとう！！！！！！！")
}

//ひとつずつしか消せない仕様なので連打して消す
function resetcontent(){
	const story = document.getElementById("story");
	story.remove();
}