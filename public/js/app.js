const mybutton = document.querySelector("button");
const myText = document.getElementById("myword");
const myParagraph = document.getElementById("search-paragraph");
console.log(myParagraph);

mybutton.addEventListener("click", () => {
  const searchText = myText.value;
  let pattern = new RegExp(searchText, "gi");
  myParagraph.innerHTML = myParagraph.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
});
