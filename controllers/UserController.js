class UserController {
    
    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.onSubmit();
    }

    //When form send button is clicked the refresh default event is disabled
    onSubmit(){
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();     
            //Put the source path on the variable values
            let values = this.getValues();
            values.photo = "";
            //First we catch the photo path, and after add the full line info
            this.getPhoto((content) => {
                values.photo = content;
                this.addLine(values);
            });  
        });
    }

    getPhoto(callback){
       let fileReader = new FileReader(); 
       let elements = [...this.formEl.elements].filter(item => {
           if(item.name === 'photo'){
            return item;
           } 
       });
       let file = elements[0].files[0];
       fileReader.onload = () => {
         callback(fileReader.result);
       };
       fileReader.readAsDataURL(file);
    }

    //This method returns directly an object instead of the full JSON mounted
    getValues(){
        let user = {};
        //Spreading an object to array 
        [...this.formEl.elements].forEach(function(field, index){
            if(field.name == "gender"){
                if(field.checked){
                    user[field.name] = field.value;
                }
            }else{
                user[field.name] = field.value;
            }
        }); 
        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country, 
            user.email,
            user.password, 
            user.photo, 
            user.admin
        );
    }

    //Simple function who adds one more data row inside our HTML table
    addLine(dataUser){
        this.tableEl.innerHTML = `
            <tr>
                <td>
                    <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
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
    }
}