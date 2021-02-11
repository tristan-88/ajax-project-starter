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

let upVote = document.getElementById("upvote");
let downVote = document.getElementById("downvote");
let score = document.querySelector('.score')
upVote.addEventListener('click',  () => {
   upVoting()
})
downVote.addEventListener('click', () => {
    downVoting()
})

const upVoting = async () => {
    const res = await fetch("/kitten/upvote", {
        method: "PATCH"
     });
    const json = await res.json()
    if (res.ok) {
       score.innerHTML = json.score 
    } else {
        document.querySelector(".error").innerHTML =
          "🚫Something went wrong! Please try again!🚫";
    }
    
}
const downVoting = async () => {
  const res = await fetch("/kitten/downvote", {
    method: "PATCH",
  });
  const json = await res.json();
  if (res.ok) {
    score.innerHTML = json.score;
  } else {
    document.querySelector(".error").innerHTML =
      "🚫Something went wrong! Please try again!🚫";
  }
};