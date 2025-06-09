signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Show the success message
    showMessage("Login is successful", "signInMessage");

    const user = userCredential.user;
    localStorage.setItem("loggedInUserId", user.uid);

    // Delay the redirection so the message stays visible for a few seconds
    setTimeout(function () {
      window.location.href = "dashboard.html"; // Redirect after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode === "auth/invalid-credential") {
      showMessage("Incorrect Email or Password", "signInMessage");
    } else {
      showMessage("Account does not Exist", "signInMessage");
    }
  });
