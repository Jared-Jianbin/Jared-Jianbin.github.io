export default class User {
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
        this.housing = 0;
        this.dining = 0;
        this.entertainment = 0;
        this.transportation = 0;
        this.workExpense = 0;
        this.utility = 0;
        this.clothes = 0;
        this.luxury = 0;
        this.travel = 0;
        this.others = 0;
        this.total = 0;


    }

    addHousing(value){
        this.housing += value;
        this.total += value
    }
    
    addDining(value){
        this.dining += value;
        this.total += value
    }
    
    addEntertainment(value){
        this.entertainment += value;
        this.total += value
    }

    addTransportation(value){
        this.transportation += value;
        this.total += value
    }

    addWorkExpense(value){
        this.workExpense += value;
        this.total += value
    }

    addUtility(value){
        this.utility += value;
        this.total += value
    }

    addClothes(value){
        this.clothes += value;
        this.total += value
    }

    addLuxury(value){
        this.luxury += value;
        this.total += value
    }

    addTravel(value){
        this.travel += value;
        this.total += value
    }

    addOthers(value){
        this.others += value;
        this.total += value
    }

   
}