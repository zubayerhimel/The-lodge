$(function () {
  // get from local-Store
  let data = window.localStorage.getItem("user");
  data = JSON.parse(data);

  // set user name & details
  setdata(data);
});

function setdata(data) {
  let str = "<table class='centered striped'><thead><tr><th>তারিখ</th>";
  str += "<th>বাবদ</th><th>জমা (৳)</th><th>ফেরত</th><th>মোট জমা (৳)</th>";
  str += "</tr></thead><tbody>";

  for (let i = 0; i < data.details.length; i++) {
    str += "<tr><td>" + data.details[i].date + "</td>";
    str += "<td>" + data.details[i].through + "</td>";
    str += "<td>" + data.details[i].paid + "</td>";
    str += "<td>" + data.details[i].return + "</td>";
    str += "<td>" + data.details[i].total_paid + "</td></tr>";
  }
  str += "</tbody></table>";

  // set data against ID
  $("#userName").html(data.name);
  $("#userTable").html(str);
}
