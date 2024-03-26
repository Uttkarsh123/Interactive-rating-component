const ratingOptions = document.querySelectorAll('.rating_parent input[type="radio"]');
let previousEle = null;
function handleRatingChange(event) {
    const checkedRating = event.target.value;
    event.target.parentNode.style.backgroundColor = "hsl(25, 97%, 53%)";
    console.log("Selected rating:", checkedRating);
    previousEle = event.target.parentNode;
} 

document.querySelector('.rating_parent').addEventListener('change', handleRatingChange);
