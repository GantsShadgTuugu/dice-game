// Тоглогчийн ээлжийг хадгалах хувьсагч - 1р тоглогчийн 0, 2р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, random-oor 1-6 гэсэн утгыг энэ хувьсагчинд оноож өгнө.


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.dice').style.display = "none";
document.querySelector('.btn-roll').addEventListener("click", function (){
    var diceNumber = Math.floor(Math.random()* 6) + 1;
    document.querySelector('.dice').style.display = "block";
    document.querySelector('.dice').src = "dice-" + diceNumber + ".png";
});
