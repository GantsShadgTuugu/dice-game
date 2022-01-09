// Тоглогчийн ээлжийг хадгалах хувьсагч - 1р тоглогчийн 0, 2р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, random-oor 1-6 гэсэн утгыг энэ хувьсагчинд оноож өгнө.
var dice = Math.floor(Math.random()* 6) + 1;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = "none";
// <div class="player-name" id="name-0">Player 1</div>