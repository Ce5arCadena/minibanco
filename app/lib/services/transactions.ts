import { getBdSettings } from "../getBdSettings";
import mysql, { QueryResult} from 'mysql2/promise';

const paramsConnection = getBdSettings();

export const getAllTransactions = async(): Promise<QueryResult | ErrorConstructor> => {
    try {
        const query = 'SELECT t.amount, t.type_transaction, t.account_id, a.type_account, a.user_id, a.initial_amount FROM transactions t JOIN accounts a ON t.account_id = a.id';
        const connection = await mysql.createConnection(paramsConnection);

        const [ rows ] = await connection.execute(query);

        if (!rows) throw new Error('Error al obtener las transacciones');
        connection.end();
        return rows;
    } catch (error) {
        throw new Error('Error al crear la transacción');
    }
};

export const createTransaction = async(values: string[]): Promise<QueryResult | ErrorConstructor> => {
    try {
        const query = 'INSERT INTO `transactions` (`amount`, `type_transaction`, `account_id`) VALUES (?, ?, ?)';
        const connection = await mysql.createConnection(paramsConnection);
        const [result] = await connection.execute(query, values);
        
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear la transacción');
    }
};

export const updateTransaction = async(values: string[]): Promise<QueryResult | ErrorConstructor> => {
    try {
        const query = 'UPDATE `transactions` SET `amount` = ?, `type_transaction` = ?, `account_id` = ? WHERE `id` = ?';
        const connection = await mysql.createConnection(paramsConnection);

        const [result] = await connection.execute(query, values);

        return result;
    } catch (error) {
        throw new Error('Error al actualizar la transacción');
    }
}

export const deleteTransaction = async(id: string): Promise<QueryResult | ErrorConstructor> => {
    try {
        const query = 'DELETE FROM `transactions` WHERE `id` = ?';
        const connection = await mysql.createConnection(paramsConnection);

        const [result] = await connection.execute(query, [id]);

        return result;
    } catch (error) {
        throw new Error('Error al eliminar la transacción');
    }
};