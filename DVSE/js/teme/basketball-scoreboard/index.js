let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0


let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

let winner = document.getElementById("msg")

function increaseHomeScoreOne( addPoint){
    homeScore += addPoint
    homeStoreEl.textContent = homeScore
    console.log(homeScore)
    verification()
}

function increaseGuestScoreOne( addPoint2){
    guestScore += addPoint2
    guestStoreEl.textContent = guestScore
    console.log(guestScore)
    verification()
}

function verification()
{
    if(guestScore==homeScore)
    winner.textContent="Guest=Home"
    else if(guestScore>homeScore)
    {
        console.log("DA")
        winner.textContent="Guest is the best"
    
    }
    else 
    {
        console.log("NU")
         winner.textContent="Home is the best" 
    }

}


function reset()
{
    verification()
    homeStoreEl.textContent=0
    homeScore=guestScore=0
    guestStoreEl.textContent=0
    
}
