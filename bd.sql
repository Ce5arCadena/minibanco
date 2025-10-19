CREATE DATABASE minibanco;
USE minibanco;

-- Tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    document_number VARCHAR(20) UNIQUE NOT NULL
);

-- Tabla de cuentas
CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type_account ENUM('CDT', 'Ahorro', 'Corriente') NOT NULL,
    initial_amount DECIMAL(12,2) NOT NULL
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabla de transacciones (solo deposit y withdrawal)
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount INT NOT NULL,
    type_transaction ENUM('Deposito', 'Consignacion') NOT NULL,
    account_id INT NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
);

-- Insertar usuarios
INSERT INTO users (name, last_name, document_number) VALUES
('Ana', 'Gómez', '123456789'),
('Luis', 'Martínez', '987654321'),
('Carla', 'Rodríguez', '456789123');

-- Insertar cuentas
INSERT INTO accounts (type_account, initial_amount, user_id) VALUES
('CDT', 5000, 1),
('Ahorro', 3000, 2),
('Corriente', 7000, 3);

-- Insertar transacciones
INSERT INTO transactions (amount, type_transaction, account_id) VALUES
(1000, 'deposit', 1),
(500, 'withdrawal', 2),
(2000, 'deposit', 3);