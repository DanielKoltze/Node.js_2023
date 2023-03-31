<script>
  import Home from "./components/Home/Home.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

  const piblings = ["John", "Mark"]
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true
    },
    {
      id: 2,
      name: "Amelie",
      isGirl: true,
      blackSheep: "medium-black-sheep"
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "ultra-black-sheep"
    }
  ]

</script>



<Home>
  <h3>This is the home of the svelte family</h3>
  <Pibling name={piblings[0]} niblings={niblings}></Pibling>
  <Pibling name={piblings[1]} niblings={niblings}></Pibling>
</Home>