// let x = 0;

// const others = window.getComputedStyle(document.getElementById('others')).getPropertyValue('--others')
// document.getElementById('others').style.setProperty('--others', `${x}%`)

import User from './User.js'

let curUser = new User();

// add the input value to user data

function add(category, value){

    switch(category){
        case 0:
            curUser.addHousing(value);
            break;
        
        case 1:
            curUser.addDining(value);
            break;
        
        case 2:
            curUser.addEntertainment(value);
            break;

        case 3:
            curUser.addTransportation(value);
            break;
        
        case 4:
            curUser.addWorkExpense(value);
            break;
        
        case 5:
            curUser.addUtility(value);
            break;

        case 6:
            curUser.addClothes(value);
            break;

        case 7:
            curUser.addLuxury(value);
            break;

        case 8:
            curUser.addTravel(value);
            break;

        case 9: 
            curUser.addOthers(value);
            break;
        
        default:
    }

}


//update % bar and numbers accordingly

function updateBar(){
    const span = document.querySelectorAll('.categories span');
//update others
    const others = (curUser.others / curUser.total * 100).toFixed(2);
    document.getElementById('others').style.setProperty('--others', `${others}%`)
    span[9].innerHTML = `$${curUser.others.toFixed(2)} - ${others}%`;
    if(others > 5){
        document.getElementById('warning9').style.display = "block";
    }else{document.getElementById('warning9').style.display = "none"}
//update housing
    const housing =( curUser.housing / curUser.total * 100).toFixed(2);
    document.getElementById('housing').style.setProperty('--housing', `${housing}%`)
    span[0].innerHTML = `$${curUser.housing.toFixed(2)} - ${housing}%`;
    if(housing > 30){
        document.getElementById('warning1').style.display = "block";
    }else{document.getElementById('warning1').style.display = "none"}
//update dining
    const dining = (curUser.dining / curUser.total * 100).toFixed(2);
    document.getElementById('dining').style.setProperty('--dining', `${dining}%`)
    span[1].innerHTML = `$${curUser.dining.toFixed(2)} - ${dining}%`;
    if(dining > 20){
        document.getElementById('warning2').style.display = "block";
    }else{document.getElementById('warning2').style.display = "none"}
//update entertainment
    const entertainment = (curUser.entertainment / curUser.total * 100).toFixed(2);
    document.getElementById('entertainment').style.setProperty('--entertainment', `${entertainment}%`)
    span[2].innerHTML = `$${curUser.entertainment.toFixed(2)} - ${entertainment}%`;
    if(entertainment > 8){
        document.getElementById('warning3').style.display = "block";
    }else{document.getElementById('warning3').style.display = "none"}
//update transportation
    const transportation = (curUser.transportation / curUser.total * 100).toFixed(2);
    document.getElementById('transportation').style.setProperty('--transportation', `${transportation}%`)
    span[3].innerHTML = `$${curUser.transportation.toFixed(2)} - ${transportation}%`;
    if(transportation > 5){
        document.getElementById('warning4').style.display = "block";
    }else{document.getElementById('warning4').style.display = "none"}
//update utility
    const utility = (curUser.utility / curUser.total * 100).toFixed(2);
    document.getElementById('utility').style.setProperty('--utility', `${utility}%`)
    span[5].innerHTML = `$${curUser.utility.toFixed(2)} - ${utility}%`;
    if(utility > 5){
        document.getElementById('warning10').style.display = "block";
    }else{document.getElementById('warning10').style.display = "none"}
//update clothes
    const clothes = (curUser.clothes / curUser.total * 100).toFixed(2);
    document.getElementById('clothes').style.setProperty('--clothes', `${clothes}%`)
    span[6].innerHTML = `$${curUser.clothes.toFixed(2)} - ${clothes}%`;
    if(clothes > 5){
        document.getElementById('warning6').style.display = "block";
    }else{document.getElementById('warning6').style.display = "none"}
//update luxury
    const luxury = (curUser.luxury / curUser.total * 100).toFixed(2);
    document.getElementById('luxury').style.setProperty('--luxury', `${luxury}%`)
    span[7].innerHTML = `$${curUser.luxury.toFixed(2)} - ${luxury}%`;
    if(luxury > 5){
        document.getElementById('warning7').style.display = "block";
    }else{document.getElementById('warning7').style.display = "none"}
//update travel
    const travel = (curUser.travel / curUser.total * 100).toFixed(2);
    document.getElementById('travel').style.setProperty('--travel', `${travel}%`)
    span[8].innerHTML = `$${curUser.travel.toFixed(2)} - ${travel}%`;
    if(travel > 5){
        document.getElementById('warning8').style.display = "block";
    }else{document.getElementById('warning8').style.display = "none"}
//update work expense
    const workexpense = (curUser.workExpense / curUser.total * 100).toFixed(2);
    document.getElementById('workexpense').style.setProperty('--workexpense', `${workexpense}%`)
    span[4].innerHTML = `$${curUser.workExpense.toFixed(2)} - ${workexpense}%`;
    if(workexpense > 5){
        document.getElementById('warning5').style.display = "block";
    }else{document.getElementById('warning5').style.display = "none"}
//update total
    document.getElementById('totalexpense').innerHTML = `Total: $${curUser.total.toFixed(2)}`

}

window.onload = () => {
    const addBtn = document.getElementById('addBtn');
//every time add expense, update data accordingly
    addBtn.addEventListener('click', ev => {
        ev.preventDefault();
        let value = parseFloat(document.getElementById('amount').value);
        if(isNaN(value)){
            alert('please enter a number')
        }else if(value == 0){
            
        }else{
            const category = document.getElementById('categories').selectedIndex;
            add(category, value);
            updateBar(); 
        }

        console.log(curUser)
    })


}