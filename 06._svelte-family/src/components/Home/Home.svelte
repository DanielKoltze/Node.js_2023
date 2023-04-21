<script>
    import { refrigeratorMessages } from "../../store/refrigeatorMessages";
  import Nibling from "../Nibling/Nibling.svelte"

    function erasgeFridgeMessages(){
        refrigeratorMessages.set([])
    }
</script>
 

<h5>{$refrigeratorMessages}</h5>
<button on:click={erasgeFridgeMessages}>Erase fridge messages</button>

<slot></slot>







<p>-------------------</p>
<p>|     &nbsp &nbsp &nbsp Welcome  &nbsp &nbsp &nbsp    |</p>
<p>-------------------</p>