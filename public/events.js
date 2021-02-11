window.addEventListener('DOMContentLoaded', () => {
    firstPicture();
})

let form = document.querySelector(".comment-form")


const firstPicture = async () => {
    document.querySelector(".loader").innerHTML = "LOADING..."
    const response = await fetch("/kitten/image")
    const json = await response.json();
    // console.log(json)
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
    method: "PATCH"
  });
  const json = await res.json();
  if (res.ok) {
    score.innerHTML = json.score;
  } else {
    document.querySelector(".error").innerHTML =
      "🚫Something went wrong! Please try again!🚫";
  }
}
//   console.log(form)

  form.addEventListener("submit", (event) => {
    const formData = new FormData(form)
    const comment = formData.get("user-comment")
    console.log(formData)
      event.preventDefault();
      callbackComment(comment)
  })

  const callbackComment = async (comment) => {
    let commentBox = document.querySelector(".comments")

      const res = await fetch("/kitten/comments", {
          method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({comment})
      });
      const json = await res.json()
      console.log(json)
      console.log({comments})
    //   commentBox.push(json.comments)

  }


