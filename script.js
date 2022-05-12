const compute = (principal, rate, term) =>
{
    document.getElementById("principal").value = principal;
    document.getElementById('textInput').value = rate; 
    document.getElementById("term").value = term;

    let result = principal * (rate/100) * term;



    return result;
    
}

console.log(compute(10000, 2.5, 5));

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
        