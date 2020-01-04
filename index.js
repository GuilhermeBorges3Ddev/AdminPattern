
//Getting form itens and using variables to set some values, styles or whethever
var nome = document.querySelector("#exampleInputName");

//We've two genders tow be selected into the form, but whe need only the checked:
var gender  = document.querySelector("#form-user-create [name = gender]:checked");

//The other selected itens of the form follow the same logic used before
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

//Foreach used to get all fields of the form in a better way
var fields = document.querySelectorAll("#form-user-create [name]");

//Using conditions in if-else to put filter into the array called fields
fields.forEach(function(field, index){
    if(field.name == "gender"){
        if(field.checked){
            console.log("SIM", field);
        }
    }else{
            console.log("NÃO");
    }
    //console.log(field.id, field.name, field.value, field.checked, index);
});