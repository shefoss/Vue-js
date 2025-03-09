<template>
  <nav>
    <div class="left">
      <button class="hamburger" @click="toggleNav">☰</button>
      <ul :class="{ active: isNavOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
      </ul>
    </div>
    <div>
      <ul class="right" :class="{ active: isNavOpen }">
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(0.5rem, 1vw, 1.5rem);
  background-color: #fff;
  color: #333;
  font-family: Arial, sans-serif;
  width: 100%;
  left: 0;
  border-bottom: 2px solid #333;
  position: relative;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: clamp(1.5rem, 5vw, 2rem);
  cursor: pointer;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 clamp(0.5rem, 2vw, 1rem);
  position: relative;
}

nav a {
  color: #333;
  text-decoration: none;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  transition: color 0.3s ease;
  position: relative;
}
nav a.router-link-active {
  color: #42b983;
}
nav a:hover {
  color: #42b983;
}

nav a::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 2px;
  background-color: #42b983;
  top: -5px;
  right: 100%;
  transform: translateX(100%);
  transition: width 0.3s ease;
}
nav a:hover::before {
  width: 100%;
}

nav a::after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 2px;
  background-color: #42b983;
  bottom: -5px;
  left: 100%;
  transform: translateX(-100%);
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

.left,
.right {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .left ul,
  .right ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: clamp(3rem, 10vw, 5rem);
    left: 8px;
    width: 100%;
    background-color: white;
    padding: clamp(0.5rem, 3vw, 1.5rem);
    padding-left: 9px;
    border-bottom: 2px solid #333;
  }

  .left ul.active,
  .right ul.active {
    display: flex;
  }

  .left ul li,
  .right ul li {
    margin: 0.5rem 1rem;
    text-align: start;
  }
}
</style>
