import db from './config/db.js';
import userDAO from './dao/userDAO.js';

(async function () {
    try {
        let dbs = new db();
        let userdao = new userDAO();
    
        await dbs.conectar();
    
        await userdao.crear({ username: 'vicoriavega', email: 'victoriavegabe@gmail.com' });
        await userdao.crear({ username: 'vicoriavegaa', email: 'victoriavegabe1@gmail.com' });
        const usuario2 = await userdao.crear({ username: 'vicoriavegaaa', email: 'victoriavegabe2@gmail.com' });
        
        const usuarios = await userdao.obtenerTodos();
        console.log(usuarios);
    
        //let eliminarResponse = await userdao.eliminar('68de38053ceb75e7d23d3529');
        //console.log(eliminarResponse);

        const idUsuarioActualizar = usuario2.insertedId;
        await userdao.actualizar(idUsuarioActualizar, { email: 'victoriavegabe3@gmail.com' });

        const usuarioActualizado = await userdao.obtenerPorId(idUsuarioActualizar);
        console.log(usuarioActualizado);

        const usuariosActualizados = await userdao.obtenerTodos();
        console.log(usuariosActualizados);
    
        await dbs.desconectar();
    } catch (error) {
        throw error;
        await dbs.desconectar();
    }
})();