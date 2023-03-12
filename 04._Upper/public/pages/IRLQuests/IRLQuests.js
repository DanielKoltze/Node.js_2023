async function getActivities() {
  const response = await fetch("https://www.boredapi.com/api/activity")
  const data = await response.json()
  return data
}


async function displayActivities() {
    const questsH = document.getElementById("quest")
    const data = await getActivities()
    questsH.innerText = data.activity
}
displayActivities()
