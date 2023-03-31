<script>
    import Nibling from "../Nibling/Nibling.svelte";
    export let name
    export let niblings = []

    function handleShowLove(message){
        console.log(message)
    }
</script>


<h2>
    {name}
</h2>

{#each niblings as nibling (nibling.id)}
    <Nibling nibling={nibling} onShowLove={handleShowLove} piblingName={name}></Nibling>
{/each}