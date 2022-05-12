let rate;

const interestSlider = (val) => {
    rate = document.getElementById('interest-range').value = val
    return rate;
 };

const computeInterest = () => {
    
    let principal = parseInt(document.getElementById("principal").value);

    document.getElementById("interest-range").value = rate;
    let term = document.getElementById("term").value;
    let result = principal * (rate/100) * term;

    if(rate === undefined){
        alert("Please select the interest rate")
        window.location.reload();
    } else {
        return document.getElementById('interest').innerHTML = result;

    }


}





        