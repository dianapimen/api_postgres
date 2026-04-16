const obtenerGatos = async () => {
    const cuerpoTabla = document.getElementById('cuerpoTablaGatos');
    try {
        const respuesta = await fetch('http://localhost:3400/api/gatos');
        const datos = await respuesta.json();
        const lista = datos.gatos || datos;

        cuerpoTabla.innerHTML = "";

        lista.forEach(gato => {
            cuerpoTabla.innerHTML += `
                <tr>
                    <td>${gato.nombre}</td>
                    <td>${gato.raza}</td>
                    <td>${gato.edad || '-'}</td>
                    <td>${gato.color || '-'}</td>
                    <td>${gato.peso || '-'}</td>
                    <td>${gato.vacunado ? 'Sí' : 'No'}</td>
                    <td>${gato.dueno || '-'}</td>
                    <td><div class="foto-mini"></div></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

const formularioGato = document.getElementById('gatoForm');
formularioGato.addEventListener('submit', async (e) => {
    e.preventDefault();
    const datosGato = {
        nombre: document.getElementById('nombre').value,
        raza: document.getElementById('raza').value,
        edad: parseInt(document.getElementById('edad').value) || 0,
        color: document.getElementById('color').value,
        peso: parseFloat(document.getElementById('peso').value) || 0,
        vacunado: document.getElementById('vacunado').value === "true",
        dueno: document.getElementById('dueno').value,
        foto: "" 
    };

    try {
        const res = await fetch('http://localhost:3400/api/gatos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosGato)
        });
        if (res.ok) {
            alert("¡Michi guardado!");
            formularioGato.reset();
            obtenerGatos();
        }
    } catch (err) {
        console.error(err);
    }
});

window.onload = obtenerGatos;
