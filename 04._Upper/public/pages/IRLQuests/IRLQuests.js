async function getActivities(activityQueryString="") {
  const response = await fetch("https://www.boredapi.com/api/activity" + activityQueryString)
  const data = await response.json()
  return data
}

async function displayActivities() {
  const questsH = document.getElementById("quest")
  const data = await getActivities()
  questsH.innerText = data.activity
}
//displayActivities()
console.log("asdfasdf")
function getNewQuest() {
  const dropDown = document.getElementById("activity-dropdown")
 
 getActivities(`?type=${dropDown.value}`)

}


const dropdownBtn = document.getElementById("activity-dropdown-btn")


dropdownBtn.addEventListener("click", getNewQuest)
