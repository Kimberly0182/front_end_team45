<template>
    <div class="sidebar">
      <ul>
        <li><router-link to="/" exact>Homepage</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
        <li><router-link to="/graph">Graph</router-link></li>
      </ul>
    </div>
  </template>
  
<script>
  export default {
    name: "SideBar"
  };
</script>
  
<style scoped>
  .sidebar {
    background: linear-gradient(to bottom, #ebe5bd, #ffa000);
    font-family: 'Alegreya', serif;
    position: fixed;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    padding: 1rem;
    width: 160px;
    height: 100%;
    left: 0;
    top: 0;
  }
  
  .sidebar ul {
    justify-content: center;
    flex-direction: column;
    list-style: none;
    display: flex;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  
  .sidebar li {
    margin: 1rem 0;
  }
  
  .sidebar a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    font-size: 1.2rem;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }
</style>