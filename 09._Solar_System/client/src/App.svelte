<script>
  import { Router, Link, Route } from "svelte-navigator"
  import Home from "../pages/Home/Home.svelte"
  import Planet from "../pages/Planet/Planet.svelte"

</script>



<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/planets">Planets</Link>
  </nav>
  <Route path="/">
    <Home></Home>
  </Route>
  <Route path="/planets">
    <Planet></Planet>
  </Route>
</Router>

