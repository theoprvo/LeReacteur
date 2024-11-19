function Component(props) {
  const {
    isLogged,
    setIsLogged,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = props;

  function handleSubmit(event) {
    password === confirmPassword
      ? setIsLogged(true)
      : alert("error not same passwords");
    event.preventDefault();
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="row-form">
        <label>Name</label>
        <input
          required
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="row-form">
        <label>Email</label>
        <input
          required
          type="mail"
          placeholder="john.doe@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="row-form">
        <label>Password</label>
        <input
          required
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="row-form">
        <label>Confirm your password</label>
        <input
          required
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
      </div>
      <button className="btn-form" type="submit">
        Register
      </button>
    </form>
  );
}

export default Component;
