<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../store/globalsStore";

    onMount(async () => {
        const response = await fetch($BASE_URL + "planet",{
            credentials: "include",
        })
        //for at få session til at virke
        const { data: planets } = await response.json()
    })
</script>

<h1>This is planets</h1>