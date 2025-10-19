export interface User {
    id?: number;
    idUser?: string;
    name: string;
    last_name: string;
    document_number: string;
}

export interface Account extends User {
    id?: number;
    type_account: string;
    initial_amount: number;
}

export interface Transaction {
    user: User;
    account: Account;
    idTransaction: number;
    typeTransaction: string;
    amount: number;
}

export interface DBSettings {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}
