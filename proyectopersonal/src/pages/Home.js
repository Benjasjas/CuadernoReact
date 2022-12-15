import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Boton, FormularioUsuario, Tabla } from "../components";

const users = [
    {
        id: "1",
        rut: "12.345.678-10",
        name: "mark",
        lastName: "otto",
        car: "hyundai",
    },
    {
        id: "2",
        rut: "12.345.678-20",
        name: "Jacob",
        lastName: "Thornton",
        car: "Chevrolet",
    },
    {
        id: "3",
        rut: "12.345.678-30",
        name: "Lang",
        lastName: "Chang",
        car: "Toyota",
    }
]

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
    const [state, setState] = useState(users);
    const [stateEditado, setStateEditado] = useState(null);

    const userDelete = (rutUsuario) => {
        const changeUser = state.filter((usuario) => usuario.rut !== rutUsuario);
        setState(changeUser)

    }

    const userAdd = (user) => {
        const addUsuario = [
            ...state, user
        ]
        setState(addUsuario);
    }

    const userEdit = (stateEditado) => {
        const editUser = state.map(state => (state.rut === stateEditado.rut ? stateEditado : state))
        setState(editUser)
    }

    return (
        <div class="container" >
            <form>
                <div style={{ display: "grid", marginTop: "50px", width: "80%", gridGap: "50px" }}>
                    <FormularioUsuario
                        userAdd={userAdd}
                        stateEditado={stateEditado}
                        setStateEditado={setStateEditado}
                        userEdit={userEdit}
                    >
                    </FormularioUsuario>
                </div>
            </form>
            <br></br>
            <Boton
                infoBoton={"Enviar"}
                handleOnClick={handleOnClick}
            ></Boton>
            <br></br>
            <Tabla
                users={state}
                deleteUser={userDelete}
                setStateEditado={setStateEditado}
            />
        </div>
    )
}
export default HomePage