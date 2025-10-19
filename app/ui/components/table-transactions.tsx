'use client';

import { useAtomValue } from "jotai";
import { transactionsAtom } from "@/app/lib/atoms";

export default function TableTransactions({setShowCreateTransaction}: {setShowCreateTransaction: (value: boolean) => void}) {
    const transactionAtomValue = useAtomValue(transactionsAtom);

    return(
        <div className="relative w-full">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-end sm:flex-row flex-wrap space-y-4 w-full sm:space-y-0 items-center p-2">
                    <div className="flex w-[50%] gap-3 justify-end">
                        <button
                            onClick={() => setShowCreateTransaction(true)}
                                className=" bg-green-600 text-white p-2 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
                            >
                            Crear Consignación
                        </button>

                        <button
                            className="bg-blue-600 text-white p-2 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
                        >
                            Crear Retiro
                        </button>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipo Cuenta
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Monto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipo Transacción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactionAtomValue.length === 0 ? (
                                <tr className="bg-white border-gray-200 hover:bg-gray-200">
                                    <th colSpan={5} className="text-center p-3">No hay transacciones creadas</th>
                                </tr>
                            ) : (
                                transactionAtomValue.map(({user, account, idTransaction, typeTransaction, amount}) => (
                                    <tr className="bg-white border-gray-200 hover:bg-gray-200" key={idTransaction++}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {idTransaction}
                                        </th>
                                        <td className="px-6 py-4">
                                            {account.typeAccount} - {account.idAccount}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user?.name} {user?.lastName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {amount}
                                        </td>
                                        <td className="px-6 py-4">
                                            {typeTransaction}
                                        </td>
                                    </tr>
                                ))  
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}