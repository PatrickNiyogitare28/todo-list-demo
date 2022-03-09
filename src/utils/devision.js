// fuction to compute the sum of two numbers

const devision = (a, b) => {
    // we can not devide a/0
    if(b==0){
        return "Not applicable"
    }
    // any thing devided by zero returns zero
    if(a == 0){
        return 0
    }
    // otherwise we return a quotent
    return a/b
}
export default devision;
// sum.test.js
// __tests__
// tests