let reviewIndex = 1
showReview(reviewIndex);

function nextReview(n) {
    showReview(reviewIndex += n);
}

function currentReview(n) {
    showReview(reviewIndex = n);
}

function showReview(n) {
    let reviews = document.querySelectorAll(".critics-item");
    let dots = document.querySelectorAll(".dot-item");
    if (n > reviews.length) {reviewIndex = 1};
    if (n < 1) {reviewIndex = reviews.length};
    reviews.forEach((item, index) => {
        if (index == reviewIndex - 1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    });
    dots.forEach((item, index) => {
        if (index == reviewIndex - 1) {
            item.classList.add("active")
            item.scroll()
        } else {
            item.classList.remove("active")
        }
    })
}

setInterval(() => { nextReview(1) }, 15000);