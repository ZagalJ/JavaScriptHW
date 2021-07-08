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
  else{
   confirm ("Please enter a number between 8 and 128");
  }
  
}

const randomFunc = {
	low: getRandomLower,
	upp: getRandomUpper,
	n: getRandomNumber,
	spec: getRandomSymbol
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(low, upp, n, spec, leng) {
	let generatedPassword = '';
	const typesCount = low + upp + n + spec;
  console.log(typesCount);
	const typesArr = [{low}, {upp}, {n}, {spec}].filter(item => Object.values(item)[0]);
	console.log(typesArr);
	
  // Doesn't have a selected type
	if(typesCount === 0) {
		alert("Please select at least one character type");
	}
	
	// create a loop
	for(let x=0; x<leng; x+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const generated = generatedPassword.slice(0, leng);
  console.log(generated);
	return generated;
}

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols [Math.floor(Math.random()  * symbols.length)];
}