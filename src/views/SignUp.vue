<template>
  <div class="login-container">
    <form class="login-form">
      <h1>Sign Up</h1>
      <p>You are welcome to our website</p>
      <div class="form-row">
        <div class="input-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div class="input-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
      </div>
      <div class="form-row">
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div class="input-group">
          <label for="athPass">Confirm Password</label>
          <input type="password" id="athPass" />
        </div>
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
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 28rem;
  gap: 15px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  top: -29px;
  position: relative;
  padding-bottom: 30px;
}

.form-row {
  display: flex;
  gap: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

label {
  font-size: 16px;
  display: flex;
  left: 10px;
  position: relative;
}

input {
  padding: 10px;
  font-size: 16px;
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
@media (max-width: 400px) {
  .login-form {
    width: 100%;
    height: auto;
  }

  .form-row {
    flex-direction: column;
  }
}
</style>
