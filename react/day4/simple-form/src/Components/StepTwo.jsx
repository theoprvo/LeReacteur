function StepTwo(props) {
  const { isLogged, setIsLogged, name, email, password } = props;
  return (
    <>
      <div>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button
        className="btn-form"
        onClick={() => {
          setIsLogged(false);
        }}
      >
        Edit your information
      </button>
    </>
  );
}

export default StepTwo;
