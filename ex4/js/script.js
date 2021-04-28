var checks = ["Books", "Children", "Sleeping", "Studying", "Cleaning"];
function check() {
  // Once submit is clicked
  // var tel = document.getElementById("tel");
  // var fullName = document.getElementById("fullName1");
  // var checkFullName = /^[^\s]+( [^\s]+)+$/;
  // var checkNumbers = /^[0-9]/;
  if (
    // tel.value.match(checkNumbers) &&
    // tel.value.length >= 9 &&
    // tel.value.length <= 10 &&
    // fullName.value.match(checkFullName) &&
    checkFunc()
  ) {
    alert("Your request has been accepted");
    return true;
  } else {
    alert("You must fill at least one interest");
    return false;
  }
}
function init() {
  var checkSection = document.getElementById("checks");
  var html = "";
  for (var i of checks) {
    html +=
      "<div class='form-check-inline'><label for='" + i + "' class='form-check-label'><input type='checkbox' id='" + i + "' class='form-check-input' name='interests[]' value='" + i + "'>" + i + "</label></div>";
  }
  checkSection.innerHTML = html;
}
function checkFunc() {
  var isChecked = false;
  for (var i of checks) {
    if (document.getElementById(i).checked) {
      isChecked = true;
    }
  }
  return isChecked;
}

function ageRange() {
  var ageSelect = document.getElementById("age1");
  var minAge = 18;
  var maxAge = 24;
  var html = "";
  for (var i = minAge; i <= maxAge; i++) {
    html += "<option value='" + i + "'>" + i + "</option></div>";
  }
  ageSelect.innerHTML = html;
}