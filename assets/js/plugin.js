$(function () {
  $(".sidenav").sidenav();
  $("select").formSelect();

  // SEACH IN THE TABLE
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#filter_info tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// VALIDATE CREDENTIALS
const checkCredentials = () => {
  const userName = document.querySelector("#username").value;
  const userPassword = document.querySelector("#password").value;

  if (userName.toLowerCase() === "admin" && userPassword === "admin") {
    window.location = "members.html";
  } else {
    M.toast({ html: "Invalid username or password", classes: "rounded red" });
  }
};
