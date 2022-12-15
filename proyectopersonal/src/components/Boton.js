import React, { } from 'react';


const Boton = ({ infoBoton, handleOnClick }) => {

    return (
        <div>
            <button
                class="btn btn-primary"
                type="submit"
                onClick={() => {
                    handleOnClick();
                }}
            >{infoBoton}</button>
        </div>
    )
}
export default Boton;