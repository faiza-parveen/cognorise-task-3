function calculateBMI() {
    const genderSelect = document.getElementById('gender');
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');
  
    const gender = genderSelect.value;
    const age = parseInt(ageInput.value);
    const weight = parseFloat(weightInput.value);
    const heightInCm = parseFloat(heightInput.value);
  
    if (isNaN(age) || isNaN(weight) || isNaN(heightInCm) || age <= 0 || weight <= 0 || heightInCm <= 0) {
      resultDiv.innerHTML = 'Please enter valid age, weight, and height.';
      return;
    }
  
    // Convert height from centimeters to meters
    const heightInM = heightInCm / 100;
  
    const bmi = calculateBMIScore(weight, heightInM);
    const category = getBMICategory(gender, bmi);
  
    resultDiv.innerHTML = Your BMI is ${bmi.toFixed(2)}. You are in the ${category} category.;
  }
  
  function calculateBMIScore(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    return weight / Math.pow(height, 2);
  }
  
  function getBMICategory(gender, bmi) {
    if (gender === 'male') {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
      } else if (bmi >= 30) {
        return 'Obese';
      }
    } else if (gender === 'female') {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
      } else if (bmi >= 30) {
        return 'Obese';
      }
    }
  
    return 'Unknown';
  }