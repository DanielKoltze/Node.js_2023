const tanksContainer = document.getElementById("tanks-container")

//const tanks = fetch("http://localhost:8080/api/tanks")
console.log("fasfadsf")

fetch("http://localhost:8080/api/tanks")
  .then((responce) => responce.json())
  .then((result) => {
    result.data.forEach((tank) => {
      result.data.forEach((tank) => {
        const tankDiv = document.createElement("div")

        const tankName = document.createElement("p")
        tankName.innerText = tank.name || ""

        tankDiv.appendChild(tankName)
        tanksContainer.appendChild(tankDiv)
      })
    })
  })

/*
const url = 'http://localhost:8080/api';

const fetchData = async (url, settings) => {
    let response = await fetch(url, settings);
    let data = await response.json();
    return data;
}

const getTanks = async () => {
    settings = {
        method: "GET"
    }
    return await fetchData(url + "/tanks", settings)
    
}

const renderTanks = async () => {
    const tanks = await getTanks();
    const container = document.getElementById('container');
    tanks.forEach(tank => {
        container.innerHTML += `<div>${tank.name}</div>`
    })
}

renderTanks();
*/

const redirectAnchorTag = document.getElementById("redirect-tast")

redirectAnchorTag.href = "/visitors"

setTimeout(() => {
  window.location.href = "/visitors"
}, 4000)
