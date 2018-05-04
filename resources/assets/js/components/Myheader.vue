<template>
	<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div  class="navbar-menu is-active">
    <router-link to="/home" class="navbar-item">Home</router-link>
    <router-link to="/about" class="navbar-item">About</router-link>    
  </div>

  
</nav>
</template>