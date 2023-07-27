for(let n=0; n <=20 ;n++ ){
    if(n % 3==0){
        console.log(n + " " +"Divi par 3");
    }
    else if(n % 5 ==0){
        console.log(n +"  "+"Divi par 5");
    }
    else if(n % 3==0 && n % 5==0){
        console.log(n+"  "+"Divi par 5 et 3");
    }
    else{
        console.log(n);
    }
}
