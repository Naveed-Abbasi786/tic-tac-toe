let player = 1;
function play(e) {
    if (winner = chek(this)) {
        alert(winner + ' win')
        location.reload()
      }
   if (player % 2 !== 0) {
        e.innerHTML = 'X'
        player++
        e.style = 'color:purple'
    }
    else {
        e.innerHTML = '0'
        player++
        e.style = 'color:blue'
    }
}
function chek() {
    let div1 = document.getElementById('div1').innerHTML
    let div2 = document.getElementById('div2').innerHTML
    let div3 = document.getElementById('div3').innerHTML
    let div4 = document.getElementById('div4').innerHTML
    let div5 = document.getElementById('div5').innerHTML
    let div6 = document.getElementById('div6').innerHTML
    let div7 = document.getElementById('div7').innerHTML
    let div8 = document.getElementById('div8').innerHTML
    let div9 = document.getElementById('div9').innerHTML

    if ((div1 === div2 && div2 === div3 && div1 !== "" && div2 !== "" && div3 !== "")) {
      return div1
    }
    else if (div4 === div5 && div5 === div6 && div4 !== "" && div5 !== "" && div6 !== "") {
        return div4
    }
    else if (div7 === div8 && div8 === div9 && div7 !== "" && div8 !== "" && div9 !== "") {
        return div7
    }
    else if (div1 === div4 && div4 === div7 && div1 !== "" && div4 !== "" && div7 !== "") {
        return div1
    }
    else if (div2 === div5 && div5 === div8 && div2 !== "" && div5 !== "" && div8 !== "") {
        return div2
    } 
    else if (div3 === div6 && div6 === div9 && div3 !== "" && div6 !== "" && div9 !== "") {
        return div9
    } 
    else if (div1 === div5 && div5 === div9 && div1 !== "" && div5 !== "" && div9 !== "") {
        return div1
    }
    else
     if (div3 === div5 && div5 === div7 && div3 !== "" && div5 !== "" && div7 !== "") {
        return div3
    }
    else if (div2 === div5 && div5 === div8 && div2 !== "" && div5 !== "" && div8 !== "") {
        return div8
    }
}
 function rest()
  {
     location.reload()   
 }