// Your code here


function saturdayFun(target='roller-skate'){
    return `This Saturday, I want to ${target}!`
}

function mondayWork(target='go to the office'){
    return `This Monday, I will ${target}.`
}


function wrapAdjective(flare='*'){
    return function(def='special'){
        return `You are ${flare}${def}${flare}!`
    }
}


console.log(wrapAdjective('%')('a dedicated programmer'))


let Calculator = {
    add : function(val1, val2){
        return val1 + val2
    },
    subtract: function(val1, val2){
        return val1 - val2
    }, 
    multiply : function(val1, val2){
        return val1 * val2
    },
    divide : function(val1, val2){
        return val1 / val2
    }
}

function actionApplyer(starting, arr){
    if(arr.length <1){
        return starting
    }
    else{
         arr.forEach(element => {
             starting = element(starting)
        });
        return starting
    }
}