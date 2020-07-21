const letters = document.querySelectorAll('#magic path');

for(let i = 0; i<letters.length; i++){
    console.log(`letter ${i} is ${letters[i].getTotalLength()}`);
}

document.addEventListener('animationend', () => {
    const stars = document.querySelectorAll('#stars path');
for(let i =0; i< stars.length; i++){
    stars[i].style.display="block";
}
   
});