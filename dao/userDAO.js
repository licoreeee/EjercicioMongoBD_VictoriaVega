import db from '../config/db.js';
import { ObjectId } from 'mongodb';

export default class UserDAO {
    constructor() {
        this.db = new db();
        this.collection = this.db.obtenerColeccion('users');
    }

    async crear(usuario) {
        try {
            const result = await this.collection.insertOne(usuario);
            return result.insertedId;
        } catch (error) {
            throw error;
        }
    }

    async obtenerTodos() {
        try {
            const usuarios = await this.collection.find({}).toArray();
            return usuarios;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPorId(id) {
        try {
            const usuario = await this.collection.findOne({ _id: new ObjectId(id) });
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    async actualizar(id, usuario) {
        try {
            await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: usuario });
            return 'Usuario actualizado con éxito.'
        } catch (error) {
            throw error;
        }
    }

    async eliminar(id) {
        try {
            const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
            return result;
        } catch (error) {
            throw error;
        }
    }
}