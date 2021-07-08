// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var lower, upper, num, special= new Boolean (false);


// Write password to the #password input
function writePassword() {
  pwordcriteria();

  var password = generatePassword(lower, upper, num, special,length);
  var passwordText = document.querySelector("#password");
  console.log(password);

  passwordText.value = password;

}

//function to capture criteria, added console logs to make sure values were saving
function pwordcriteria(){
  var input = prompt ("Select the password lenght between 8 and 128 characters");
  length = parseInt(input);
 // console.log(typeof length);
  
  if (length>=8 && length<=128){
   // console.log(length);
    
    var i = confirm ("Do you want to include Lower case characters?")
      if (i == true) {
           lower=true;
      }
      else{
        lower =false;
      }
     // console.log(lower);
    
    var i = confirm ("Do you want to include upper case characters?")
      if (i == true) {
         upper=true;
        }
      else{
          upper =false;
      }
      //console.log(upper);
        
    var i = confirm ("Do you want to include numbers?")
      if (i == true) {
         num=true;
        }
      else{
          num =false;
        }    
        //console.log(num);

   var i = confirm ("Do you want to include special characters?")
      if (i == true) {
         special=true;
        }
      else{
          special =false;
        }
        //console.log(special);


  }
  //confirms what criteria is needed
  else{
   confirm ("Please enter a number between 8 and 128");
  }
  
}

//function to generate random characters
const randomFunc = {
	low: getRandomLower,
	upp: getRandomUpper,
	n: getRandomNumber,
	spec: getRandomSymbol
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate password based in the criteria
function generatePassword(low, upp, n, spec, leng) {
	let generatedPassword = '';
	const typesCount = low + upp + n + spec;
  console.log(typesCount);
	const typesArr = [{low}, {upp}, {n}, {spec}].filter(item => Object.values(item)[0]);
	console.log(typesArr);
	
  // Doesn't have a selected type, asks for at least one type
	if(typesCount === 0) {
		alert("Please select at least one character type");
	}
	
	// create a loop with the length as the condition
	for(let x=0; x<leng; x+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	//generates a String with the password
	const generated = generatedPassword.slice(0, leng);
  //used console to show the generated password before displaying it
  console.log(generated);
	return generated;
}
// Get's a random lower case character
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Get's a random upper case character
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Get's a random number
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Get's a random symbol within the length
function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols [Math.floor(Math.random()  * symbols.length)];
}