<script>
    import Nibling from "../Nibling/Nibling.svelte";
    export let name
    export let niblings = []

    $: cookies = ["🍪", "🍪", "🍪", "🍪", "🍪"]

    function handleShowLove(message){
        console.log(message)
    }
    
    function giveMoney(money){
        niblings.forEach(nibling => console.log(`give ${nibling.name} ${money} kr.`))
    }
    function eatCookie(){
        if (cookies.length === 0){
            console.log("aaaaaaw, no more cookies left")
        }else{
            cookies.pop()
            cookies = cookies
            console.log("Have a cookiemy child")
        }
    }
</script>


<h2>
    {name}
</h2>
<p>{cookies.join(" ")}</p>

{#each niblings as nibling (nibling.id)}
    <Nibling nibling={nibling} onShowLove={handleShowLove} piblingName={name} onGiveMoney={giveMoney} onEatCookie={eatCookie}></Nibling>
{/each}