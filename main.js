let set= []
player1 = []
player2 = []
player3 = []
player4 = []


for(let i=0; i< 10; i++){
    for(let j= 0; j< 10; j++){
        set.push( [i,j] )
    }
}
// console.log(set.length)

function get_hand(player){
    for(let g= 0; g < 10; g++){
        let ran = Math.floor(Math.random(0, set.length)*set.length)
        player.push(set[ran])
        // console.log(ran)
        set.splice(ran, 1)
        // console.log(set.length)
    }
}

get_hand(player1)
get_hand(player2)
get_hand(player3)
get_hand(player4)

function show_hand(player1, player2, player3, player4){
    for(let i = 1; i < 11; i++){
        let curr_num = `player1_${i}`
        document.getElementById(curr_num).innerHTML = player1[i-1]

        curr_num = `player2_${i}`
        document.getElementById(curr_num).innerHTML = player2[i-1]

        curr_num = `player3_${i}`
        document.getElementById(curr_num).innerHTML = player3[i-1]

        curr_num = `player4_${i}`
        document.getElementById(curr_num).innerHTML = player4[i-1]
        // document.getElementById(`${player}_${i}`).innerHTML = player[i]
        // document.getElementById(`player1_${i}`).innerHTML = player[i]
    }
}

// document.getElementById("player1_2").innerHTML="AAAAAAAAAAAAAAAA"

window.onload = (event) => {
   show_hand(player1, player2, player3, player4)
//    document.getElementById('player1_1').innerHTML = "player[i]"
  };




for(let i in player1){
    console.log(player1[i])
}

// for(let i in player2){
//     console.log(player2[i])
// }
// for(let i in player3){
//     console.log(player3[i])
// }
// for(let i in player4){
//     console.log(player4[i])
// }

