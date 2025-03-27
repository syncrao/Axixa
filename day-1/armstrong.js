for (i = 101; i < 999 ; i++) { 

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().lenght;

    while (temp) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);

    }
    return sum === num;
}

console.log(isArmstrong(i)? `true ${i}` : `false ${i}`)
}
