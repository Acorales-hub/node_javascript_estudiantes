//Modulo de sistemas de archivos: leer,modificar,copiar,eliminar,cambiar nombre
//todos los metodos de este modulo son asíncronos por defectos
//pero se pueden agregan versiones síncronas de estos métodos agregando
//la palabra Sync a sus nombres, se ejecutan en el orden que se escriben
//ejemplo:fs.rename() -> fs.renameSync()
const color = require('colors');
const fs = require('fs');
