function calculateBMI() {
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!age || !height || !weight || !gender) {
    alert("Please fill in all fields and select your gender.");
    return;
  }

  if (height <= 0 || weight <= 0 || age <= 0) {
    alert("Please enter positive values for age, height, and weight.");
    return;
  }

  // to calculate the BMI
  //divide weight in kg by the square of the hieght in meters
  //BMI = weight(kg)/(height(m)^2)

  // changing  height in cm to meters
  const heightM = height / 100;

  const bmi = (weight / heightM ** 2).toFixed(2);

  let category = "";
  let message = "";
  if (bmi < 18.5) {
    category = "Underweight";
    message =
      "A BMI of less than 18.5 indicates that you are underweight for your height. It may be a sign that you need to gain weight or improve your nutrition to reduce potential health risks.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    message =
      "A BMI of 18.5–24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    message =
      "A BMI of 25.0–29.9 indicates that you are overweight for your height. Managing your weight through healthy eating and regular physical activity can help lower your risk of developing health problems";
  } else {
    category = "Obese";
    message =
      "A BMI of 30 or above indicates obesity. This significantly increases the risk of developing serious health issues. Medical advice and lifestyle changes are strongly recommended.";
  }

  const result = document.getElementById("bmi-result");

  function displayResult() {
    result.innerHTML = `
<h4>Your BMI is</h4>    
<h2>${bmi} kg/m<sup>2</sup></h2>
<h4>(${category})</h4>  
<p>${message}</p>
    `;
  }
  displayResult();
}

// calculateBMI()
