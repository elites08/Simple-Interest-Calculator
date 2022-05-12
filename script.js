const compute = (rate, principal, term) =>
{
    let interest = principal * (rate/100) * term;

    document.getElementById('rate').value = rate; 
    document.getElementById("principal").value = principal;

    document.getElementById("term").value = term;
    document.getElementById('interest').innerHTML = interest;

    return interest;
}

