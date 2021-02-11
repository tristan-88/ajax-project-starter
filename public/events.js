window.addEventListener('DOMContentLoaded', () => {
    firstPicture();
})

const firstPicture = async () => {
    document.querySelector(".loader").innerHTML = "LOADING..."
    const response = await fetch("/kitten/image")
    const json = await response.json();
    console.log(json)
    if (response.ok) {
        
        let catPic = document.querySelector(".cat-pic")
        catPic.src = json.src;
    } else {
        document.querySelector('.error').innerHTML = "🚫Something went wrong! Please try again!🚫"
    }
    document.querySelector(".loader").innerHTML = "";
};

document.getElementById('new-pic').addEventListener('click', firstPicture)