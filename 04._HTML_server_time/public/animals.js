const timestampBtn = document.getElementById("timestamp-btn")
const clickedBtn = document.getElementById("clicked-btn")
const clickedText = document.getElementById("clicked-text")

clickedBtn.addEventListener("click", async (e) => {
  await fetch("/api/clicked", {
    method: "PUT",
  })
  displayClick()
})

displayClick()

async function displayClick() {
  const data = await fetch("/api/clicked")
  const numberOfClicked = await data.json()
  clickedText.innerText = numberOfClicked.data
}

timestampBtn.addEventListener("click", async (e) => {
  const data = await fetch("/api/timestamps", {
    method: "POST",
  })
})

//headers: {
//    "Content-Type": "application/json",
//},