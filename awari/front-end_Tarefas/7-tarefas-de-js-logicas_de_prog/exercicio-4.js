function primo(n) {
    let divisor = 0;
    for(let i=0; i<=n; i++) {
        if (n % i === 0) {
            divisor ++;
        }
    }
    if(disivor === 2) {
        return true;
    } else {
        return false;
    }
}   
for(let i=1; i<=100; i++) {
    if (primo(i)) {
        console.log(i);
    }
}