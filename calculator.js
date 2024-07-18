let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let String ='';

buttonsArray.forEach(btn => {

    btn.addEventListener('click',(e)=> {

        if(e.target.innerHTML == 'DEL') {
            String = String.substring(0, String.length-1);
            display.value = String;
        }else if(e.target.innerHTML == 'AC'){
            String ='';
            display.value = String;
        }else if(e.target.innerHTML == '='){
            String = eval(String);
            display.value = String;
        }else{
            String += e.target.innerHTML;
            display.value = String;
        }
    });
});
