import React from "react";
import { useNavigate } from "react-router-dom";


export const Contacto = () => {
const datosForm = React.useRef();
let navigate = useNavigate()
const consultarForm = (e) =>{
e.preventDefault()
const datForm = new FormData(datosForm.current)
const contacto = Object.fromEntries(datForm)
console.log(contacto)
e.target.reset()
navigate("/")
};

  return (
    <div className="conteiner">
      <form onSubmit={consultarForm} ref={datosForm}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
          </label>
          <input type="text" className="form-control" name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
           Numero Telefonico
          </label>
          <input type="number" className="form-control" name="number" />
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control"
            name="consulta"
            rows={3}
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
