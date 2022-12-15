import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from './Boton';


const FormularioAuto = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/RickRoll", {}, [navigate]));

    return (
        <div style={{ display: "grid", gridGap: "10px", justifyContent: "center" }}>
            <h2 class="text-center">Formulario Auto</h2>

            <div>
                <label for="modelo" class="form-label">Modelo</label>
                <div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">modelo a</option>
                        <option value="2">modelo b</option>
                        <option value="3">modelo c</option>
                    </select>
                </div>
            </div>
            <div>
                <label for="modelo" class="form-label">Marca</label>
                <div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">marca 1</option>
                        <option value="2">marca 2</option>
                        <option value="3">marca 3</option>
                    </select>
                </div>
            </div>
            <div>
                <label for="modelo" class="form-label">Color</label>
                <div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">rojo</option>
                        <option value="2">verde</option>
                        <option value="3">azul</option>
                    </select>
                </div>
            </div>
            <div style={{ maxWidth: "300px" }} class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <p class="form-check-label" for="invalidCheck">
                        Estoy de acuerdo con los terminos y condiciones
                        de esta compra
                    </p>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <Boton
                infoBoton={"Comprar"}
                handleOnClick={handleOnClick}
            ></Boton>
            {/* </form> */}
        </div>
    )
}
export default FormularioAuto;