window.addEventListener('DOMContentLoaded', () => {
    firstPicture();
})

const firstPicture = async () => {
    const response = await fetch("/kitten/image")
    const json = await response.json();
    console.log(json)
    let catPic = document.querySelector(".cat-pic")
    catPic.src = json.src;
};

