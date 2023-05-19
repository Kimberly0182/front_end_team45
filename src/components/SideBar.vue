<template>
    <div class="sidebar">
      <ul>
        <li>
          <router-link to="/" exact>Homepage</router-link>
        </li>
        <li>
          <router-link to="/map">Map</router-link>
        </li>
        <li>
          <router-link to="/graph">Graph</router-link>
        </li>
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
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem;
    background: linear-gradient(to bottom, #ffea00, #ffa000);
    font-family: 'Alegreya', serif;
  }
  
  .sidebar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  
  .sidebar li {
    margin: 1rem 0;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }
</style>
  