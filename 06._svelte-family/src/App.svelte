<script>
  import { onMount } from "svelte";

  import { BASE_URL } from "./store/urlDomain";

  import Home from "./components/Home/Home.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

  onMount(async () => {
    const response = await fetch(`${BASE_URL}/piblings`)
    const piblingsResponse = await response.json()
    console.log(piblingsResponse)
  })

  const piblings = ["John", "Mark"]
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true,
      cookies: []
    },
    {
      id: 2,
      name: "Amelie",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      cookies: []
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "ultra-black-sheep",
      cookies: []
    }
  ]

</script>



<Home>
  <h3>This is the home of the svelte family</h3>
  <Pibling name={piblings[0]} niblings={niblings}></Pibling>
  <Pibling name={piblings[1]} niblings={niblings}></Pibling>
</Home>