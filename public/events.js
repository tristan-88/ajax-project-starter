window.addEventListener('DOMContentLoaded', () => {
    firstPicture();
})

const firstPicture = async () => {
    document.querySelector(".loader").innerHTML = "LOADING..."
    const response = await fetch("/kitten/image")
    const json = await response.json();
    console.log(json)
    let catPic = document.querySelector(".cat-pic")
    catPic.src = json.src;
    document.querySelector(".loader").innerHTML = "";
};

document.getElementById('new-pic').addEventListener('click', firstPicture)