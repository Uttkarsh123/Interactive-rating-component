const ratingOptions = document.querySelectorAll('.rating_parent input[type="radio"]');
let previousEle = null;
function handleRatingChange(event) {
    const checkedRating = event.target.value;
    if (previousEle !== null) {
        previousEle.style.backgroundColor = '#4c5454';
    }

    event.target.parentNode.style.backgroundColor = "hsl(25, 97%, 53%)";
    console.log("Selected rating:", checkedRating);
    previousEle = event.target.parentNode;
} 

document.querySelector('.rating_parent').addEventListener('change', handleRatingChange);

document.querySelector('#submit').addEventListener("click",(e)=>{
    e.preventDefault();
    const ratingOptions = document.querySelectorAll('.rating_parent input[type="radio"]');
    
    let selectedRating = null;
    ratingOptions.forEach(radio => {
        if (radio.checked) {
            selectedRating = radio.value;
        }
    });
    document.getElementById('rating_selected').innerHTML = `You selected ${selectedRating} out of 5`
    document.querySelector(".thankyou_state").style.display = "flex"
    document.querySelector("#rating_div").style.display = "none"
})