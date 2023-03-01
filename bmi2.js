function calculate_Bmi_lb()
// This is a script to calculate your BMI using lb & in
// Alex Renz: June 2021
{
let inputWeight = 0;
let inputHeight = 0;
let outputBmi = 0;

do									 
{
    errorFlag = 'N';
    inputWeight= prompt('Enter your weight in lb', 0);
    
    
    if (isNaN(inputWeight) == true)          //alert window for not a number input
    {
        errorFlag = 'Y';
        alert ('Please enter a number');
    }
    else 
        if (inputWeight <= 0)                  //alert window for input less or equal 0
        {
            errorFlag = 'Y';
            alert ('Entered wrong value');
        }
} while (errorFlag == 'Y');


do									 
{
    errorFlag = 'N';
    inputHeight = prompt('Enter your height in inches', 0);
    
    
    if (isNaN(inputHeight) == true)          //alert window for not a number input
    {
        errorFlag = 'Y';
        alert ('Please enter a number');
    }
    else 
        if (inputHeight <= 0)                  //alert window for input less or equal 0
        {
            errorFlag = 'Y';
            alert ('Entered wrong value');
        }
} while (errorFlag == 'Y');    
    
outputBmi = (inputWeight / inputHeight / inputHeight) * 703

if (outputBmi >= 30)
    alert('Your BMI is ' + outputBmi.toFixed(2) + "." + " Your result suggests you are OBESE.\n\n The best way to lose weight if you're obese is through a combination of diet and exercise, and, in some cases, medicines. Check our recipes and workouts sections. See a GP for help and advice.");

    else if (outputBmi > 25) 
        alert('Your BMI is ' + outputBmi.toFixed(2) + "." + " Your result suggests you are OVERWEIGHT.\n\n The best way to lose weight if you're overweight is through a combination of diet and exercise. Check our recipes and workouts sections. The BMI calculator will give you a personal calorie allowance to help you achieve a healthy weight safely.");
    
    else  if (outputBmi > 18.5) 
        alert('Your BMI is ' + outputBmi.toFixed(2) + "." + " Your result suggests you are a HEALTHY WEIGHT.\n\n We suggest you maintain your weight. Keep up the good work! For tips on maintaining a healthy weight, check out our recipes and workouts sections.");
        
        else 
            alert('Your BMI is ' + outputBmi.toFixed(2) + "." + " Your result suggests you are UNDERWEIGHT.\n\n Being underweight could be a sign you're not eating enough or you may be ill. Check our recipes section. If you're underweight, a GP can help.");
}			