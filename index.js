var userValueEng = Number(prompt("Enter your English Marks :"));
var userValueMath = Number(prompt("Enter your Math Marks :"));
var userValuePhy = Number(prompt("Enter your Physics Marks :"));
var userValueChe = Number(prompt("Enter your Chemistry Marks :"));
var userValueUrdu = Number(prompt("Enter your Urdu Marks :"));

if (
  userValueEng <= 100 &&
  userValueMath <= 100 &&
  userValuePhy <= 100 &&
  userValueChe <= 100 &&
  userValueUrdu <= 100
) {
  var totalObtainMarks =
    userValueEng + userValueChe + userValueMath + userValuePhy + userValueUrdu;
  var result = (totalObtainMarks / 500) * 100;
  if (result <= 100 && result >= 90) {
    alert(
      "Total Marks : 500" +
        "\nObtained Marks : " +
        totalObtainMarks +
        "\nYour Grade is : A" +
        "\nPercentage : " +
        result +
        "%"
    );
  } else if (result < 90 && result >= 80) {
    alert(
      "Total Marks : 500" +
        "\nObtained Marks : " +
        totalObtainMarks +
        "\nYour Grade is : B" +
        "\nPercentage : " +
        result +
        "%"
    );
  } else if (result < 80 && result >= 70) {
    alert(
      "Total Marks : 500" +
        "\nObtained Marks : " +
        totalObtainMarks +
        "\nYour Grade is : C" +
        "\nPercentage : " +
        result +
        "%"
    );
  } else if (result < 70 && result >= 60) {
    alert(
      "Total Marks : 500" +
        "\nObtained Marks : " +
        totalObtainMarks +
        "\nYour Grade is : D" +
        "\nPercentage : " +
        result +
        "%"
    );
  } else {
    alert(" Your Are Failed ! Try Again ");
  }
} else {
  alert("Your Insert wrong Marks ! Try Again");
}
