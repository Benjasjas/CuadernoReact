import React, { useState, useEffect } from 'react';
import Boton from './Boton';

const initialUser = {
    id: "",
    rut: "",
    name: "",
    lastName: "",
    car: "",

}

const FormularioUsuario = ({ userAdd, stateEditado, setStateEditado, userEdit }) => {
    const [state, setState] = useState(initialUser);
    const { id, rut, name, lastName, car } = state

    //el hook use effect siempre esta pendiente de si la variable que tiene dentro de sus corchetes cambia 
    //el debera hacer todo lo que tiene en su funcion dentro
    //CONSIDERACION useEffect siempre corre al menos 1 vez cuando la pagina carga por primera vez
    useEffect(() => {
        if (stateEditado !== null) {
            setState(stateEditado)
        } else {
            setState({
                id: "",
                rut: "",
                name: "",
                lastName: "",
                car: "",
            })
        }
    }, [stateEditado])

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...state,
            [e.target.name]: e.target.value
        }
        setState(changedFormValue);
    }

    return (
        <div style={{ display: "grid", gridGap: "10px", justifyContent: "center" }}>
            {stateEditado !== null ? <h2 class="text-center"> Editar Usuario </h2> : <h2 class="text-center"> Formulario Usuario </h2>}
            {/* <form class="row g-3 needs-validation" novalidate> */}
            <div style={{ minWidth: "300px" }} class="col-md-4">
                <label
                    for="nombre"
                    class="form-label"
                >
                    Nombre</label>
                <input
                    type="text"
                    placeholder="Juan"
                    class="form-control"
                    id="nombre"
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div style={{ minWidth: "300px" }} class="col-md-4">
                <label
                    for="apellido"
                    class="form-label"
                >
                    Apellido</label>
                <input
                    type="text"
                    placeholder="Perez"
                    class="form-control"
                    id="apellido"
                    name='lastName'
                    value={lastName}
                    onChange={handleInputChange}
                />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div style={{ minWidth: "300px" }} class="col-md-4">
                <label
                    for="rut"
                    class="form-label"
                >
                    RUT</label>
                <input
                    type="text"
                    placeholder="12.345.678-9"
                    class="form-control"
                    id="rut"
                    name='rut'
                    value={rut}
                    onChange={handleInputChange}
                />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div style={{ minWidth: "300px" }} class="col-md-4">
                <label
                    for="correo"
                    class="form-label"
                >
                    Auto</label>
                <input
                    type="text"
                    placeholder="Susuki"
                    class="form-control"
                    id="auto"
                    name='car'
                    value={car}
                    onChange={handleInputChange}
                />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            {/* </form> */}
            <div>
                <Boton infoBoton={"Ir a autos"}></Boton>
                <br></br>
                {stateEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userEdit(state)}
                    >
                        Editar usuario
                    </button>


                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userAdd(state)}
                    >
                        Ingresar usuario
                    </button>
                )}
                {stateEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => setStateEditado(null)}
                    >
                        Cancelar
                    </button>
                ) : (
                    <></>
                )}


            </div>

        </div>
    )
}
export default FormularioUsuario;