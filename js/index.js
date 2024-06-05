// get element by id
const [imageUrlDiv, topTextDiv, bottomTextDiv, createMemeButton, ImageDiv] = [
  document.getElementById("image-url"),
  document.getElementById("top-text"),
  document.getElementById("bottom-text"),
  document.getElementById("create-meme"),
  document.getElementById("img-tag"),
];

// create Mene Functionalityd
function createMemeFunctionality({
  event,
  imageUrlDiv,
  topTextDiv,
  bottomTextDiv,
  ImageDiv,
}) {
  event.preventDefault();

  const [getImageUrl, memeTopText, memeBottomText] = [
    imageUrlDiv.value,
    topTextDiv.value,
    bottomTextDiv.value,
  ];

  ImageDiv.src = getImageUrl;
}

createMemeButton.addEventListener("click", function (event) {
  createMemeFunctionality({
    event,
    imageUrlDiv,
    topTextDiv,
    bottomTextDiv,
    ImageDiv,
  });
});
