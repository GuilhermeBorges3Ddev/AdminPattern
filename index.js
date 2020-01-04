//Foreach used to get all fields of the form in a better way
var fields = document.querySelectorAll("#form-user-create [name]");

//Variable used outside the forEach, because it'll be written like a JSON after...
var user = {};

//Using conditions in if-else to put filter into the array called fields


//Testing the return of json
console.log(user);

//When form send button is clicked the refresh default event is disabled
document.getElementById("form-user-create").addEventListener("submit", function(event){
    event.preventDefault();
    fields.forEach(function(field, index){
        if(field.name == "gender"){
            if(field.checked){
                user[field.name] = field.value;
            }
        }else{
            user[field.name] = field.value;
        }
    });
    //Get the filled form into the JSON
    console.log(fields);
});