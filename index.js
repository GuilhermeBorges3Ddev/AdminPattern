//Foreach used to get all fields of the form in a better way
var fields = document.querySelectorAll("#form-user-create [name]");

//Variable used outside the forEach, because it'll be written like a JSON after...
var user = {};

//Simple function who adds one more data row inside our HTML table
function addLine(dataUser){
    var tr = document.createElement("tr");
    tr.innerHTML = `
        <tr>
            <td>
                <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.data}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
    `;
    document.getElementById("table-users").appendChild(tr);
}

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
    //
    addLine(user);
});