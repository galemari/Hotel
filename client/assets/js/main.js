
//re-hacer la forma de el inicio de sesion y registro
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-link').forEach(function (el) {
      el.addEventListener('click', function (e) {
          e.preventDefault();
          var target = this.getAttribute('href');
          document.querySelectorAll('.container > div').forEach(function (el) {
              el.style.display = 'none';
          });
          document.querySelector(target).style.display = 'block';
      });
  });
});

document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('http://localhost:3000/apiv1/usuarios', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const newUser = await response.json();
            console.log('Usuario creado:', newUser);
            
        } else {
            console.error('Error al crear usuario:', response.statusText);
            
        }
    } catch (error) {
        console.error('Error al enviar solicitud:', error.message);
        
    }
});