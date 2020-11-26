export function imc(oper1, oper2){
    //refactoring
    let imc = 0;
    if (oper1 > 3){
        oper1 = oper1 /100;
        imc = oper2 / (oper1 * oper1);
    } else{
        imc = oper2 / (oper1 * oper1);
    }

    
     return imc;

}
