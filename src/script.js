function check() {
  var name = document.getElementById("name").value;
  var b = parseInt(document.getElementById("age").value);
  var c = parseInt(document.getElementById("weight").value);

  if (b >= 5 && b <= 7) {
    if (c < 15) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is less than the recommended value of 15-20kg at an age of " +
        b;
    } else if (c >= 15 && c <= 20) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is perfect";
    } else {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is greater than recommended value of 15-20kg at an age of " +
        b;
    }
  } 
  else if (b >= 8 && b <= 10) {
    if (c < 21) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is less than the recommended value of 21-25kg at an age of " +
        b;
    } else if (c >= 21 && c <= 25) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is perfect";
    } else {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is greater than recommended value of 21-25kg at an age of " +
        b;
    }
  } else if (b >= 11 && b <= 15) {
    if (c < 26) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is less than the recommended value of 26-30kg at an age of " +
        b;
    }
    if (c >= 26 && c <= 30) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is perfect";
    } else {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is greater than recommended value of 26-30kg at an age of " +
        b;
    }
  } else if (b >= 16 && b <= 20) {
    if (c < 31) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is less than the recommended value of 31-40kg at an age of " +
        b;
    }
    else if (c >= 31 && c <= 40) {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is perfect";
    } else {
      document.getElementById("check_age").innerHTML =
        "Hello "+name+" !! Your weight is greater than the recommended value of 31-40kg at an age of " +
        b;
    }
  } else {
    document.getElementById("check_age").innerHTML =
      "Please Enter Correct values";
  }
}
