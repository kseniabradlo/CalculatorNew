let a = ""; 
let b = ""; 
let finish = false;
let sign = "";

let digitals = ["0", "1", "2", "3", "4", "5","6","7","8","9","."];
let signs = ["-","+","*","/"];

let input = document.querySelector("#inputDiv");
let numsAndSigns = document.querySelector(".btnsNumOp");


numsAndSigns.addEventListener("click", addNumberToInput);



function addNumberToInput(e){
let key = e.target.textContent;

    if (key === "AC"){ 
        finish = false;
        a = "";
        b = "";
        sign = ""
        input.textContent = "";
    }

    else if(digitals.includes(key)){

        if(b == "" && sign == ""){
        a += key;
        input.textContent = a;
        }

        
        else if(a != "" && b != "" && finish){
            b = key; 
            finish = false;
            input.textContent = b; 
           
        }

        else{
            b += key;
            input.textContent = b;
        }
    }



    if(signs.includes(key)){
        sign = key
        input.textContent = sign;
        }


    if (key === "="){
       if (b === "") b = a;
        
        switch (sign){
            case "+":
                a = (+a)+(+b);
                break;
            case "-":
                a = a - b;
                break;
            case "/":
                a = a / b;
                break;
            case "*":
                a = a * b;
                break;
        }
        input.textContent = a;
     
     
        finish = true;
    }
}




