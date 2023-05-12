<template>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/" class="nav-link" exact>Homepage</router-link>
        </li>
        <li>
          <router-link to="/map" class="nav-link">Map</router-link>
        </li>
        <li>
          <router-link to="/graph" class="nav-link">Graph</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default{
    name: "NavBar"
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: center;
    background-color: #ffd700;
    padding: 1rem;
  }
  
  .navbar ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar li {
    margin: 0 2rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  </style>