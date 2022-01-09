// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
// Тоглоомын бүх газар ашиглагдах глобаль хувьсагчийг энд зарлая.
var activePlayer;
// 2 тоглогчийн цуглуулсан оноонууд.
var scores;
// Идэвхитэй тоглогчийн цуглуулж байгаа ээлжийн оноо.
var roundScore;
// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалъя.
var diceDom = document.querySelector('.dice');
initGame();
// Тоглоомыг шинээр эхлүүлэхэд бэлтгэнэ.
function initGame(){
    // Тоглоом эхэллээ гэдэг төлөвт орно.
    isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч - 1р тоглогчийн 0, 2р тоглогчийг 1 гэж тэмдэглэе.
    activePlayer = 0;
    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч.
    scores = [0, 0];
    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
    // Тоглогчийн нэрийг буцааж гаргах
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    diceDom.style.display = "none";
}
// Шоог шидэх эвент листенер 
document.querySelector('.btn-roll').addEventListener("click", function (){

    if(isNewGame){
    // random-oor 1-6 гэсэн утгыг энэ хувьсагчинд оноож өгнө.
    var diceNumber = Math.floor(Math.random()* 6) + 1;

    //шооны зургийг веб дээр харуулна
    diceDom.style.display = "block";

    //Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр харуулна 
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber !== 1){
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчийн оноонд нэмж өгнө
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        toglogchSolih();
    }
    }else{
        alert("Тоглоом дууссан байна New Game товчийг дарж шинээр эхлэнэ үү!")
    }
});
// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(isNewGame){
        // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нэмж өгнө.
    // if(activePlayer === 0){
    //     scores[0] = scores[0] + roundScore;
    //     document.getElementById('score-0').textContent = scores[0];
    // }else{
    //     scores[1] = scores[1] + roundScore; 
    //     document.getElementById('score-1').textContent = scores[1];
    // }
    
        scores[activePlayer] = scores[activePlayer] + roundScore;
        // Дэлгэц дээрх оноог өөрчлөх
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // Уг тоглогч хожсон эсэхийг шалгах
        if(scores[activePlayer] >= 100){
        isNewGame = false;
        // Ялагч гэсэн текстийг нэрнийнх нь оронд гаргана
        document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
        document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
        document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
        }else{
            toglogchSolih();
        }
    }else{
        alert("Тоглоом дууссан байна New Game товчийг дарж шинээр эхлэнэ үү!")
    }
})

function toglogchSolih(){
    // Ээлжийн оноог 0 болгоно.
    document.getElementById('current-' + activePlayer).textContent = 0;
    roundScore = 0;
    // Тоглогчийн ээлжийг солино.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх товчны евент листенер
document.querySelector(".btn-new").addEventListener("click",initGame)
