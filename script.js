let rate;

const interestSlider = (val) => {
    rate = document.getElementById('interest-range').value = val
    return rate;
 };

const computeInterest = () => {
    
    let principal = document.getElementById("principal").value;

    document.getElementById("interest-range").value = rate;
    let term = document.getElementById("term").value;
    let result = principal * (rate/100) * term;

    if(principal <= 0 ) {
        alert("Please enter a positive value for principal")
    }
    if(term <= 0) {
        alert("Please enter a positive term")
    }

    if(rate === undefined){
        alert("Please select the interest rate")
    } else {
        return document.getElementById('interest').innerHTML = result;
    }

}





        