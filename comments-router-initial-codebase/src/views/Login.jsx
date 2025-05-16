const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("username: ", e.target.username.value);
    console.log("password: ", e.target.password.value);
    e.target.username.value = "";
    e.target.password.value = "";
  };

  return (
    <div>
      <h3>Login to Comments App</h3>
      <form onSubmit={handleLogin}>
        Username: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
