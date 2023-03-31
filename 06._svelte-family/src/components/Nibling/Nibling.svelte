<script>
    export let nibling
    export let onShowLove
    export let piblingName
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