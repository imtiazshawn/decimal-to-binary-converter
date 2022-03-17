let output = document.getElementById('output');
let submit = document.getElementById('btn');

function binary(e){
    e.preventDefault();

    let num = document.getElementById('input-data').value;

    if(num === ''){
        alert('Please Enter A Number')
    } else if(num < 0){
        alert('Please Enter a Positive Number')
    }
    else{
        output.style.visibility = "visible";
    }

    binaryNumber = Number(num).toString(2);
    output.innerText = binaryNumber;
}
submit.addEventListener('click', binary);