class System{
    constructor(){

    }

    aunthenticate(actualCode,enteredCode){
        textSize(40);
        fill("black");
        text(code,300,300);
        if(actualCode===enteredCode.toUpperCase())
        return true;
        else
        return false;
        
    }
}