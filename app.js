const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");
authorName = document.querySelector(".author .name");

soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
// random quote function

function randomQuote() {
    //fatching ip of random quotes and parsing into js object...
    quoteBtn.innerHTML = "Loading....";

    fetch("http://api.quotable.io/random")
        .then((res) => res.json())
        .then((result) => {
            quoteText.innerHTML = result.content;
            authorName.innerHTML = result.author;
            quoteBtn.innerText = "New";
        });
}
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(
        `${quoteText.innerHTML} by ${authorName.innerHTML}`
    );
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerHTML);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);