function multiply(numberOne) {
    return function multiply(numberTwo) {
        return function multiply(numberThree) {
            return numberOne * numberTwo * numberThree;
        }
    }
}

console.log("Result of multiply(2)(3)(4) = ", multiply(2)(3)(4));