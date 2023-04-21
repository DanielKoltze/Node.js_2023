<script>
    export let nibling
    export let onShowLove
    export let piblingName
    export let onGiveMoney
    let inputValue = 0
    export let onEatCookie

    let fridgeMessage = ""

    import { refrigeratorMessages } from "../../store/refrigeatorMessages";

    function handldeFridgeMessage(){
        refrigeratorMessages.update(current => {
            current.push(fridgeMessage)
            return current
        })
        fridgeMessage = ""
    }
</script>

<div class:is-girl={nibling.isGirl} 
class:is-boy={!nibling.isGirl}
class={nibling.blackSheep || "not-a-black-sheep"}>
{#if nibling.isGirl}
    <p>Niece {nibling.name}</p>
{:else}
    <p>Nephew {nibling.name}</p>
{/if}
</div>
<button on:click={() => onShowLove(`Hey ${piblingName}. It's me ${nibling.name}`)}>Show love</button>
<input bind:value={inputValue} type="number">
<input on:click={() => {
    onGiveMoney(inputValue)
}} type="submit">

<button on:click={onEatCookie}>Eat a cookie</button>

<p>there are {$refrigeratorMessages.length} messages on the fridge</p>

<input bind:value={fridgeMessage}>
<button on:click={handldeFridgeMessage}>Write a message on the fridge</button>


<p>{nibling.cookies}</p>
<style>
    .not-a-black-sheep{
        background-color: aliceblue;
    }
    .medium-black-sheep{
        background-color: burlywood;
    }
    .ultra-black-sheep{
        background-color: brown;
    }
    .is-girl{
        border: 3px solid blue;
    }
    .is-boy{
        border: 3px solid pink;
    }
</style>