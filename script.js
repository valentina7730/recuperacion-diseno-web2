// script.js

document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

    employeeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener datos del formulario
        const name = document.getElementById('name').value.trim();
        const position = document.getElementById('position').value.trim();
        const department = document.getElementById('department').value.trim();
        const fechaContratacion = document.getElementById('fechaContratacion').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name && position && department && fechaContratacion && email) {
            // Crear una nueva fila en la tabla
            const newRow = employeeTable.insertRow();

            newRow.insertCell().textContent = name;
            newRow.insertCell().textContent = position;
            newRow.insertCell().textContent = department;
            newRow.insertCell().textContent = fechaContratacion;
            newRow.insertCell().textContent = email;


            // Crear botón de eliminar
            const deleteCell = newRow.insertCell();
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                employeeTable.deleteRow(newRow.rowIndex - 1);

                
            });
            deleteCell.appendChild(deleteBtn);
            

            //Crear boton actualizar 
            const editCell = newRow.insertCell();
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.className = 'editBtn';

            var celdas = document.getElementsByTagName('td');
            editBtn.addEventListener('click' , function(){

                for (var i =0; i< celdas.length ; i++){
                    celdas[i].setAttribute('contenteditable', 'true');

                }
            });

            editCell.appendChild(editBtn);


            //boton guardar cambios

            const saveCell = newRow.insertCell();
            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Guardar';
            saveBtn.className = 'saveBtn';

            
            saveBtn.addEventListener('click' , function(){

                for (var i =0; i< celdas.length ; i++){
                    celdas[i].setAttribute('contenteditable', 'false');

                }
            });

            saveCell.appendChild(saveBtn);




            
            


            // Limpiar el formulario
            employeeForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
