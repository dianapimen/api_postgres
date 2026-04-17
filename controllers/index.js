const models = require("../database/models");

const createGato = async (req, res) => {
  try {
    const { nombre, raza, edad, color, peso, vacunado, dueno } = req.body;

    
    const imagenUrl = req.file ? req.file.path : null;

    const gato = await models.Gato.create({
  nombre,
  raza,
  edad: parseInt(edad), 
  color,
  peso: parseFloat(peso), 
  
  vacunado: vacunado === 'true' || vacunado === 'Sí' || vacunado === true,
  dueno,
  foto: imagenUrl 
});

    return res.status(201).json({ gato });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllGatos = async (req, res) => {
  try {
    const gatos = await models.Gato.findAll();
    return res.status(200).json({ gatos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }


}

const deleteGato = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await models.Gato.destroy({
      where: { id: id }
    });

    if (deleted) {
      return res.status(204).send("Gato eliminado");
    }
    throw new Error("Gato no encontrado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getGatoById = async (req, res) => {
    try {
        const { id } = req.params;
        const gato = await models.Gato.findByPk(id);
        
        if (!gato) {
            return res.status(404).json({ message: "Gato no encontrado" });
        }

        // Importante: enviarlo dentro de un objeto { gato }
        return res.status(200).json({ gato }); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateGato = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, raza, edad, color, peso, vacunado, dueno } = req.body;

        const gato = await models.Gato.findByPk(id);
        if (!gato) return res.status(404).json({ error: "Gato no encontrado" });

        // Si el usuario subió una foto nueva, usamos esa. Si no, mantenemos la que ya tenía.
        const fotoUrl = req.file ? req.file.path : gato.foto;

        await gato.update({
            nombre,
            raza,
            edad: parseInt(edad),
            color,
            peso: parseFloat(peso),
            vacunado: vacunado === 'Sí' || vacunado === 'true',
            dueno,
            foto: fotoUrl
        });

        return res.status(200).json(gato);
    } catch (error) {
        console.error("Error al actualizar:", error);
        return res.status(500).json({ error: error.message });
    }
};



// ¡IMPORTANTE! Agrégalo al module.exports al final del archivo:
module.exports = {
  createGato,
  getAllGatos,
  deleteGato,
	getGatoById,
	updateGato// <-- Asegúrate que esté aquí
};
