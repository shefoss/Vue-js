<template>
  <div class="login-container">
    <form class="login-form">
      <h1>Login Page</h1>
      <p>Welcome back! Please login to continue.</p>
      <div class="form-row">
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  flex-direction: column;
  /* background-image: url("https://images.freeimages.com/slides/4f53a54c6e114a76a99b9df9573a8259.webp"); */
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 417px;
  gap: 15px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 16px;
  width: 80px;
}

input {
  padding: 10px;
  font-size: 16px;
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
