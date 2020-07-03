$(function () {
  $.getJSON("assets/data/credit.json", function () {}).done(function (res) {
    // make member list from response
    setMemberList(res.credit_info);
    // redirect another page & save data in local-store
    redirectPageWithData(res.credit_info);
  });
});

function setMemberList(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    str += "<div class='col s12 m6 l3'> ";
    str += "<div class='card cardProfile center-align'>";
    str += "<div class='card-content'><span id='" + data[i].id + "'";
    str += "class='memberName'>" + data[i].name + "</span>";
    str += "</div></div></div>";
  }
  $("#memberList").html(str);
  window.localStorage.clear();
}

function redirectPageWithData(data) {
  $(".memberName").click(function () {
    let id = this.id;
    window.localStorage.setItem("user", JSON.stringify(data[id]));
    window.location.replace("tempUser.html");
  });
}
