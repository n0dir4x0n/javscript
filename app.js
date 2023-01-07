function calculateBmi() {
 const name = document.getElementById("name");
 const weightVal = document.getElementById("weight");
 const heightVal = document.getElementById("height");
 const result = document.querySelector("#result");


 const weight = parseFloat(weightVal.value);
 const height = parseFloat(heightVal.value);

 let bmi = (weight / (height * height)).toFixed(2);

 console.log(bmi)

 result.textContent = `${name.value} 's BMI is ${bmi}`;
}