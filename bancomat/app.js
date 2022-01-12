let bancomatFn = (amount) => {
    let nominals = [200,100,20,10,5,2,1]
    let result =[]
    if(amount > 0){
        for (const i of nominals) {
            while(amount - i>=0){
                amount -= i
                result.push(i)
            }
        }
        return result
    }else{
        console.log("Enter valid amount");
    }
}
console.log((bancomatFn(1115)));

