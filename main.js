//Write a javascript program to compute the sum of the two given integers.If the sum is in the range 50.....80.return 65 otherwise return 80

function num(x,y){
    let c=x+y;
    if((c>=50)&&(c<=80)){
        return 65
    }
    else{
        return 80
    }
}

document.write(num(10,60)+"<br>");
document.write(num(50,80));
