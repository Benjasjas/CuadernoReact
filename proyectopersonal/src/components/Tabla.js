import React from 'react';


const Table = ({ users, deleteUser, setStateEditado }) => {

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">RUT</th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Auto</th>
                        <th scope="col">Boton</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                    (<tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.rut}</td>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.car}</td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={() => {
                                    deleteUser(user.rut);
                                }}
                            >
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-warning"
                                onClick={() => {
                                    setStateEditado(user);
                                }}
                            >
                                Editar
                            </button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;