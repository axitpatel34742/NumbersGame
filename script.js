const listData = [
		{
			l1:'1 3 5 7 9 11 13 15',
			l2:'17 19 21 23 25 27 29 31',
			l3:'33 35 37 39 41 43 45 47',
			l4:'49 51 53 55 57 59 61 63'
		},
		{
			l1:'2 3 6 7 10 11 14 15',
            l2:'18 19 22 23 26 27 30 31',
            l3:'34 35 38 39 42 43 46 47',
            l4:'50 51 54 55 58 59 62 63'
		},
		{
			l1:'4 5 6 7 12 13 14 15',
			l2:'20 21 22 23 28 29 30 31',
			l3:'36 37 38 39 44 45 46 47',
			l4:'52 53 54 55 60 61 62 63'
		},
		{
			l1:'8 9 10 11 12 13 14 15',
			l2:'24 25 26 27 28 29 30 31',
			l3:'40 41 42 43 44 45 46 47',
			l4:'56 57 58 59 60 61 62 63'
		},
		{
			l1:'16 17 18 19 20 21 22 23',
			l2:'24 25 26 27 28 29 30 31',
			l3:'48 49 50 51 52 53 54 55',
			l4:'56 57 58 59 60 61 62 63'
		},
		{
			l1:'32 33 34 35 36 37 38 39',
			l2:'40 41 42 43 44 45 46 47',
			l3:'48 49 50 51 52 53 54 55',
			l4:'56 57 58 59 60 61 62 63'
		}
];

const l11 = document.getElementById('l11');
const l22 = document.getElementById('l22');
const l33 = document.getElementById('l33');
const l44 = document.getElementById('l44');

const yesbtn = document.getElementById('Yes');
const nobtn = document.getElementById('no');
const fanswer = document.getElementById('fanswer');

const head = document.getElementById('head'); 
const txt  = document.getElementById('txt');

const start = document.getElementById('start');
const restart = document.getElementById('restart');


let count;
let answer;
yesbtn.style.display = "none";
nobtn.style.display = "none";
restart.style.display = "none";

function display(){
	
	const totalData = listData[count];
		l11.innerHTML = totalData.l1;
	l22.innerHTML = totalData.l2;
	l33.innerHTML = totalData.l3;
	l44.innerHTML = totalData.l4;
	
}

start.addEventListener("click",startGame);
restart.addEventListener("click",restartGame);

function startGame(){
	start.style.display = "none";
	restart.style.display = "none";
	yesbtn.style.display = "inline";
	nobtn.style.display = "inline";
	txt.style.display = "none";
	head.style.display = "none";
    answer=0;
	count =0;
	display();
}
function restartGame(){
  window.location.href = 'index.html';
}



yesbtn.addEventListener("click",function(){

	if (count==0) {
		answer = 1;
	}else if(count==1){
		answer += 2;
	}else if(count == 2){
		answer += 4;
	}else if(count == 3){
		answer += 8;
	}else if(count == 4){
		answer += 16;
	}else {
		answer += 32;
		fanswer.innerHTML = `<h1>That number : <strong>${answer}</strong></h1>
		                      <br>`;
		                    
		restart.style.display = "inline";

	}
	
		
    if (count < 5) {
	count++;
	display();
   }

});

nobtn.addEventListener("click",function(){
		
		if (count > 4) {
		fanswer.innerHTML = `<h1 style = " font-size:6.5rem;">That Number : <strong>${answer}</strong></h1>
		                      <br>`;
		                    
		restart.style.display = "inline";
		}
		else{
			count++;
		    display();
		}

});
