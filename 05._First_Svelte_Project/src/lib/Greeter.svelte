<script>
    export let name = "Martin"
    export let greeting = "Hello"
  
    function changeGreeting(){
      greeting = greeting == "Hello" ? "Goodbye" : "Hello"
    }
  
  </script>
  



<h1 on:click={changeGreeting}>{greeting} {name}</h1>


<style>
    h1{
      color: green;
      user-select: none;
    }
  </style>