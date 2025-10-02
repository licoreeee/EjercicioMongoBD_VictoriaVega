import db from '../config/db.js';
import userDAO from '../dao/userDAO.js';

(async function () {
    let dbs = new db();
    let userdao = new userDAO();

    await dbs.conectar();

    await userdao.crear({ username: 'vicoriavegaaa', email: 'victoriavegabe@gmail.com' });
    await userdao.crear({ username: 'vicoriavegaaa', email: 'victoriavegabe@gmail.com' });
    await userdao.crear({ username: 'vicoriavegaaa', email: 'victoriavegabe@gmail.com' });
    
    console.log(result);

    let eliminarResponse = await userdao.eliminar('64a7f3f4f1c2b8e6d6f0c123');
    console.log(eliminarResponse);

    await dbs.desconectar();
})();