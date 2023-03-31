<script>
  import { each } from "svelte/internal"
    import Bird from "./Bird.svelte";
    const birds =["Pigeon", "Parrot","Eagle"]
    const birdEmojis = ["🐦","🦜","🦅"]

    let birdIndex = 0
    let favoriteBird = birds[0]
    let favoriteBirdEmojis = birdEmojis[0]

    function changeFavoriteBird(){
        birdIndex = (birdIndex + 1) % birds.length
        favoriteBird = birds[birdIndex]
        favoriteBirdEmojis = birdEmojis[birdIndex]
    }
</script>

<div on:click={changeFavoriteBird}>
<Bird 
    name={favoriteBird} 
    emoji={favoriteBirdEmojis}
    />
<Bird 
    name={favoriteBird} 
    emoji={favoriteBirdEmojis}
    />
</div>

<br>

<h2>All birds</h2>

{#each birds as bird}
<Bird name={bird}/>

{/each}