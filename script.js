document.getElementById("cvForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const experiencia = document.getElementById("experiencia").value;
  const educacion = document.getElementById("educacion").value;

  const resultado = `
    <h2>Currículum Vitae</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Experiencia:</strong><br>${experiencia}</p>
    <p><strong>Educación:</strong><br>${educacion}</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
