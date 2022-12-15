import React, { } from 'react'
import { Boton, FormularioAuto, Tabla } from '../components'


const AutoPage = () => {
    const users = [
        {
            id: "1",
            rut: "12.345.678-9",
            name: "mark",
            lastName: "otto",
            car: "hyundai",
        },
        {
            id: "2",
            rut: "12.345.678-9",
            name: "Jacob",
            lastName: "Thornton",
            car: "Chevrolet",
        },
        {
            id: "3",
            rut: "12.345.678-9",
            name: "Lang",
            lastName: "Chang",
            car: "Toyota",
        }
    ]

    return (
        <div>
            <FormularioAuto style={{
                display: "grid",
                marginTop: "50px",
                width: "80%",
                gridGap: "50px"
            }}>
            </FormularioAuto>
            <br></br>
            <Tabla users={users} />
            <br></br>
            <div>
                <Boton
                    infoBoton={"Volver"}
                >
                </Boton>
            </div>
        </div>
    )
}
export default AutoPage