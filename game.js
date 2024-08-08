let player = 1;

function play(e) {
    // Check if the cell is already filled
    if (e.innerHTML !== '') {
        return; // If it's already filled, do nothing
    }

    if (player % 2 !== 0) {
        e.innerHTML = 'X';
        e.style.color = 'purple';
    } else {
        e.innerHTML = '0';
        e.style.color = 'blue';
    }
    
    player++;
    
    if (checkWinner()) {
        setTimeout(() => {
            alert(checkWinner() + ' wins!');
            location.reload();
        }, 100);
    }
}

function checkWinner() {
    let div1 = document.getElementById('div1').innerHTML;
    let div2 = document.getElementById('div2').innerHTML;
    let div3 = document.getElementById('div3').innerHTML;
    let div4 = document.getElementById('div4').innerHTML;
    let div5 = document.getElementById('div5').innerHTML;
    let div6 = document.getElementById('div6').innerHTML;
    let div7 = document.getElementById('div7').innerHTML;
    let div8 = document.getElementById('div8').innerHTML;
    let div9 = document.getElementById('div9').innerHTML;

    if (div1 && div1 === div2 && div2 === div3) return div1;
    if (div4 && div4 === div5 && div5 === div6) return div4;
    if (div7 && div7 === div8 && div8 === div9) return div7;
    if (div1 && div1 === div4 && div4 === div7) return div1;
    if (div2 && div2 === div5 && div5 === div8) return div2;
    if (div3 && div3 === div6 && div6 === div9) return div3;
    if (div1 && div1 === div5 && div5 === div9) return div1;
    if (div3 && div3 === div5 && div5 === div7) return div3;
    
    return null;
}

function reset() {
    location.reload();
}
