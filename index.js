
//Getting form itens and using variables to set some values and styles

var nome = document.querySelector("#exampleInputName");
nome.value = "Guilherme";
nome.style.color = "blue";

//We've two genders tow be selected into the form, but whe need only the checked:
var gender  = document.querySelector("#form-user-create [name = gender]:checked");

//The other selected itens of the form follow the same logic used before
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");