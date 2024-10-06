
let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")
// homeScore.classList.add('highlight');
function checkHighlight() {
    if (parseInt(homeScore.innerText) > parseInt(guestScore.innerText)) {
        // Add the highlight class to the home score paragraph
        homeScore.classList.add('highlight');
        // Remove the highlight class from the guest score paragraph
        guestScore.classList.remove('highlight');
    } else if (parseInt(homeScore.innerText) < parseInt(guestScore.innerText)) {
        // Add the highlight class to the guest score paragraph
        guestScore.classList.add('highlight');
        // Remove the highlight class from the home score paragraph
        homeScore.classList.remove('highlight');
    }
    else{
        homeScore.classList.remove('highlight');
        guestScore.classList.remove('highlight');
    }
}

function addHome1(){
    homeScore.innerText=Number(homeScore.innerText)+1;
    checkHighlight();
}
function addHome2(){
    homeScore.innerText=Number(homeScore.innerText)+2;
    checkHighlight();
}
function addHome3(){
    homeScore.innerText=Number(homeScore.innerText)+3;
    checkHighlight();
}

function addGuest1(){
    guestScore.innerText=Number(guestScore.innerText)+1;
    checkHighlight();
}
function addGuest2(){
    guestScore.innerText=Number(guestScore.innerText)+2;
    checkHighlight();
}
function addGuest3(){
    guestScore.innerText=Number(guestScore.innerText)+3;
    checkHighlight();
}