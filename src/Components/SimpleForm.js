import { useState, useTransition } from "react";
import useInput from "./hooks/useInput";

const SimpleForm = () => {
  const {
    value: userName,
    hasError: nameHasError,
    isValid: userNameIsValid,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandeler: userNameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userEmail,
    hasError: emailHasError,
    isValid: userEmailIsValid,
    valueChangeHandler: userEmailChangeHandler,
    valueBlurHandeler: userEmailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  // const [enteredName, setEnteredName] = useState("");
  // const [nameIsValid, setNameISValid] = useState(false);
  //const [nameIsVisited, setNameIsVisited] = useState(false);
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [emailIsVisited, setEmailIsVisited] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  //const nameIsValid = enteredName.trim() !== "";
  //let emailIsValid = false;
  // const emailIsValid = enteredEmail.includes("@");

  let formIsValid = false;
  if (userNameIsValid && userEmailIsValid) {
    formIsValid = true;
  }

  // const emailChangeHandler = (event) => {
  // setEnteredEmail(event.target.value);
  // };

  //useEffect(() => {
  //if (nameIsValid) {
  //setFormIsValid(true);
  //} else {
  //setFormIsValid(false);
  //}
  //}, [nameIsValid]);

  //const nameChangeHandler = (event) => {
  //setEnteredName(event.target.value);
  // if {(event.target.value !== "")
  //setNameISValid(true)}
  //};

  //const blurChangeHandler = () => {
  // setNameIsVisited(true);
  //setEmailIsVisited(true);
  //if (enteredName.trim() === "") {
  //  setNameISValid(false);
  // }
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    // setNameIsVisited(true);
    // setEmailIsVisited(true);
    if (!userNameIsValid && !userEmailIsValid) {
      // setNameISValid(false);
      return;
    }

    console.log(userName, userEmail);

    //userName("");
    //setNameISValid(true);
    // setNameIsVisited(false);
    nameReset();
    //userEmail("");
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameHasError ? "invalid" : ""}`}>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          onChange={userNameChangeHandler}
          value={userName}
          onBlur={userNameBlurHandler}
        />

        {nameHasError && <p className="error-text">name not valid input</p>}
      </div>

      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          onBlur={userEmailBlurHandler}
          value={userEmail}
          onChange={userEmailChangeHandler}
        />
        {emailHasError && <p className="error-text">email not valid</p>}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleForm;
