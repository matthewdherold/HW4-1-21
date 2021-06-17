const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
      alert("Your have been logged out!");
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector("#logout").addEventListener("click", logout);
  var duration = 120;
  setInterval(updateTimer, 1000);
  function updateTimer() {
    duration--;
    if (duration < 1) {
      logout();
    }
  }
  
  function resetTimer() {
    duration = 120;
  }

  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);
  window.addEventListener("keypress", resetTimer);