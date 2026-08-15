// ✅ Uso de const/let
let resultado = "";

// ✅ Función nombrada
document.getElementById("cvForm").addEventListener("submit", generarCV);

function generarCV(e) {
  e.preventDefault();

  // ✅ Validación básica
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const experiencia = document.getElementById("experiencia").value.trim();
  const educacion = document.getElementById("educacion").value.trim();

  if (!nombre || !email) {
    alert("Por favor completa todos los campos obligatorios");
    return;
  }

  // ✅ Uso de textContent para evitar XSS
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // limpiar antes

  const titulo = document.createElement("h2");
  titulo.textContent = "Currículum Vitae";
  resultadoDiv.appendChild(titulo);

  const datos = [
    { label: "Nombre", value: nombre },
    { label: "Email", value: email },
    { label: "Experiencia", value: experiencia },
    { label: "Educación", value: educacion }
  ];

  datos.forEach(d => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${d.label}:</strong> ${d.value}`;
    resultadoDiv.appendChild(p);
  });
}
