import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Contacto = () => {
const datosForm = React.useRef();
let navigate = useNavigate()
const consultarForm = (e) =>{
e.preventDefault()
const datForm = new FormData(datosForm.current)
const contacto = Object.fromEntries(datForm)
e.target.reset()
toast.success("Su respuesta se envio correctamente")
navigate("/")
};

  return (
    <>
    <div className="contenedorConsulta">
    <div className="conteiner formularioConsulta">
      <form onSubmit={consultarForm} className="textoFormularioConsulta" ref={datosForm}>
      <div className="text-center">
              <h5 className="tituloFormCompras">Envianos tu consulta</h5>
            </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
          </label>
          <input type="text" className="form-control" required name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" required name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
           Numero Telefonico
          </label>
          <input type="number" className="form-control" required name="number" />
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
        <div className="botonSubmitConsulta">
        <button type="submit" className="btn btn-primary botonConsulta">
          Enviar
        </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};
