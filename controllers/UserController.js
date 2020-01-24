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
            //Turning the submit form button disabled by default
            let btn = this.formEl.querySelector("[type=submit]");
            btn.disabled = true;    
            //Put the source path on the variable values
            let values = this.getValues();
            //Working previously with the promise
            this.getValues().then(
                (content) => {
                    //First we catch the photo path, and after add the full line info
                    values.photo = content;
                    this.addLine(values);
                    //Cleanning the later form values and transforming the btn able again 
                    this.formEl.reset()
                    btn.disabled = false; 
                },
                (e) => {
                    console.error(e);
                }
            );   
        });
    }

    //The promise used here on getPhoto() is threated in onSubmit() above
    getPhoto(){
       return new Promise((resolve, reject) => {
        let fileReader = new FileReader(); 
        let elements = [...this.formEl.elements].filter(item => {
            if(item.name === 'photo'){
             return item;
            } 
        });
        let file = elements[0].files[0];
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (e) => {
            reject(e);
        };
        //Threat if exists a file to not dispatch error in the console
        if(file){
            fileReader.readAsDataURL(file);
        } else {
            resolve('dist/img/boxed-bg.jpg');
        }
       })
    }

    //This method returns directly an object instead of the full JSON mounted
    getValues(){
        let user = {};
        //Spreading an object to array 
        [...this.formEl.elements].forEach(function(field, index){
            if(field.name == "gender") {
                if(field.checked){
                    user[field.name] = field.value;
                }
            } else if(field.name == "admin") {
                user[field.name] = field.checked;
            } else {
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
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>
                <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin) ? 'Sim' : 'Não'}</td>
            <td>${dataUser.register}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        `;
        this.tableEl.appendChild(tr);
    }
}