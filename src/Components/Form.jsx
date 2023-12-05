import React, { useState } from "react";


const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.length > 5 && usuario.email.includes("@") && usuario.email.includes(".com")) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };
  const handleChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value.trim() });
  };
  return (
    <div className="form">
      
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Nombre</label>
        <input
          name="nombre"
          type="text"
          value={usuario.nombre}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="text"
          value={usuario.email}
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {show && <h4>Gracias {usuario.nombre}, te contactaremos cuanto antes vía mail</h4>}
      {error && (
        <h5 style={{ color: "red" }}>
           Por favor verifique su información nuevamente
        </h5>
      )}
    </div>
  );
};

export default Form;
