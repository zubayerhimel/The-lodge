$(function () {
  $.getJSON("assets/data/debit.json", function () {}).done(function (res) {
    for (let index = 0; index < res.debit_info.length; index++) {
      makeDebitTable(res.debit_info[index], index);
    }
  });
});

function makeDebitTable(data, index) {
  let str =
    "<div class='center'><h4 class='subTitle'>" +
    data.criteria +
    "</h4></div><div class='card rounded'><div class='card-content'><table class='centered striped'><thead><tr><th>তারিখ</th><th>বাবদ</th><th>জমা (৳)</th><th>মোট জমা (৳)</th></tr></thead>";

  for (let i = 0; i < data.details.length; i++) {
    str += "<tr><td>" + data.details[i].date + "</td>";
    str += "<td>" + data.details[i].through + "</td>";
    str += "<td>" + data.details[i].paid + "</td>";
    str += "<td>" + data.details[i].total_paid + "</td></tr>";
  }
  str += "</table></div></div>";
  if (index === 0) $("#table1").html(str);
  else if (index === 1) $("#table2").html(str);
  else $("#table3").html(str);
}
