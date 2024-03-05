"use client";
import { supabaseClient } from "app/database/supabase";
import React, { useEffect, useState } from "react";

const Form = () => {
  /* Vamos a manejar las variables de nuestro formulario */
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [curp, setCurp] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState([]);
  const [addressPerson, setAddressPerson] = useState("");

  /* Creamos funcion para mandar datos del formulario */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabaseClient.from("usuarios").insert([
      {
        name: name,
        last_name: last_name,
        curp: curp,
        phone_number: phone_number,
        email: email,
        birthdate: birthdate,
        sex: sex,
        address: addressPerson,
      },
    ]);

    console.log(data);
  };

  useEffect(() => {
    const fetchAddress = async () => {
      const { data, error } = await supabaseClient.from("colonias").select("*");
      setAddress(data);
    };

    fetchAddress();
  }, []);

  /*
  TAREA
  - Mandar los formuarios a nuestra base de datos
  - Investigar los tipos de campos del formulario correctos
  - En el campo y el campo dirección, mandar a traer información con useEffect
  */

  return (
    <>
    
   

    <h1> Pagina de Censados</h1>

     
     
    <section class="container top-products">
        <h1 class="heading-1">Acapulco  Huracan Otis</h1>

        <div class="container-options">
            <span class="active">Pagos</span>
            <span>resagados</span>
            <span>censos</span>
        </div>

        <div class="container-products">
            <div class="card-product">
                <div class="container-img">
                    <img src="images/pagos1.jpeg" alt="mejor productos" />
                    <span class="discount"></span>
                    <div class="button-group">
                        <span>
                            <i class="fa-regular fa-eye"></i>
                        </span>
                        <span>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <span>
                            <i class="fa-solid fa-code-compare"></i>
                        </span>
                    </div>
                </div>
                <div class="content-card-product">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h3>pagos censos</h3>
                    <span class="add-cart">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </span>
                    <p class="price">inician los pagos </p>
                </div>
            </div>
          
            <div class="card-product">
                <div class="container-img">
                    <img src="images/despensa1.jpeg" alt="inician los apoyos" />
                    <span class="discount"></span>
                    <div class="button-group">
                        <span>
                            <i class="fa-regular fa-eye"></i>
                        </span>
                        <span>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <span>
                            <i class="fa-solid fa-code-compare"></i>
                        </span>
                    </div>
                </div>
                <div class="content-card-product">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h3>Despensas</h3>
                    <span class="add-cart">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </span>
                    <p class="price">apoyos acapulco de la secretaria de marina</p>
                </div>
            </div>
    
            <div class="card-product">
                <div class="container-img">
                    <img src="images/despensa2.jpeg" alt="apoyos" />
                    <div class="button-group">
                        <span>
                            <i class="fa-regular fa-eye"></i>
                        </span>
                        <span>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <span>
                            <i class="fa-solid fa-code-compare"></i>
                        </span>
                    </div>
                </div>
                <div class="content-card-product">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h3>Entrega de apoyos</h3>
                    <span class="add-cart">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </span>
                    <p class="price">sigen los apoyos </p>
                </div>
            </div>
        
            <div class="card-product">
                <div class="container-img">
                    <img src="images/despensa3.jpeg" alt="canastas basicas" />
                    <div class="button-group">
                        <span>
                            <i class="fa-regular fa-eye"></i>
                        </span>
                        <span>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <span>
                            <i class="fa-solid fa-code-compare"></i>
                        </span>
                    </div>
                </div>
                <div class="content-card-product">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h3>Canastas basicas</h3>
                    <span class="add-cart">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </span>
                    <p class="price">inician canastas basicas</p>
                </div>
            </div>
        </div>
    </section> 
     

    <iframe width="1100" height="400" src="https://www.youtube.com/embed/lOEFMSyGyiE?si=2H0Dcd9pB-gAr9ai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


    <div class="slider">
    <ul>
        <li>
        <img src="images/pagos1.jpeg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/logo.jpg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/despensa1.jpeg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/despensa2.jpeg" alt="mejor productos" />
        </li>
    </ul>
</div>
   

      
    <section id="sobremi">
    <div class="contenedor-foto">
    <img src="images/10.png" alt="apoyos" />
    </div>
    <div class="sobremi">
        <p class="titulo-seccion">Sobre Nosotros</p>
        <h3>La Secretaría de Bienestar inicia un camino de transformación para que las y los mexicanos tengamos una vida mejor. Junto al Gobierno de México hemos de empeñarnos en un cambio de fondo, en el que nuestra prioridad sea la gente y, de manera muy e...</h3>
        <p>bienestar de pagos</p>
    </div>
</section>






      
  
         
      <h1>Galerias de imagenes</h1>
  
  <section class="gallery">
    <img
      src="images/1.jpeg"
      alt="Gallery Img1"
      class="gallery-img-1"
    /><img
      src="images/2.jpeg"
      alt="Gallery Img2"
      class="gallery-img-2"
    /><img
      src="images/3.jpeg"
      alt="Gallery Img3"
      class="gallery-img-3"

      
    />
  </section>
     



      <section class="banner">
    <div class="content-banner">
        <p>Secretaria de Bienestar</p>
        <h2>Dacnificados por el huracan Otis<br /></h2>
        <a href="">Dacnificados</a>
    </div>
</section>

<main class="main-content">
    <section class="container container-features">
        <div class="card-feature">
            <i class="fa-solid fa-plane-up"></i>
            <div class="feature-content">
                <span>Pagos para dacnificados</span>
                <p>del 8 a l 24 de diciembre</p>
            </div>
        </div>
        <div class="card-feature">
            <i class="fa-solid fa-wallet"></i>
            <div class="feature-content">
                <span>programa de censados acapulco</span>
                <p>Para ubicar el Módulo de Bienestar que te corresponde, consulta la página oficial: gob.mx/bienestar</p>
            </div>
        </div>
        <div class="card-feature">
            <i class="fa-solid fa-gift"></i>
            <div class="feature-content">
                <span>Apoyo de pagos</span>
                <p>Talón del censo –original–

•           Identificación oficial con fotografía –original y copia–

•           CURP –copia-

•           Comprobante de domicilio –original y copia–</p>
            </div>
            
        </div>
        <div class="card-feature">
            <i class="fa-solid fa-headset"></i>
            <div class="feature-content">
                <span>Apoyo para recontruccion</span>
                <p>Talón del cobro de apoyo para limpieza –original</p>
            </div>
        </div>
    </section>
</main>

      




      <div class="container">
  <div class="row">
    <div class="col-sm-3">
      <h2>Enlaces</h2>
      <ul>
        <li><a href="/temas">Temas</a></li>
        <li><a href="/accesibilidad">Declaración de Accesibilidad</a></li>
        <li><a href="/privacidadintegral">Aviso de privacidad</a></li>
        <li><a href="/privacidadsimplificado">Aviso de privacidad simplificado</a></li>
        <li><a href="/terminos">Términos y Condiciones</a></li>
        <li><a href="/terminos#medidas-seguridad-informacion">Política de seguridad</a></li>
        <li><a href="http://www.ordenjuridico.gob.mx" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">Marco jurídico</a></li>
        <li><a href="/sitemap">Mapa de sitio</a></li>
      </ul>
    </div>
    <div class="col-sm-3">
      <h2>Contacto</h2>
      <p>Dudas e información: <a href="mailto:demandasocial@bienestar.gob.mx">demandasocial@bienestar.gob.mx</a></p>
      <h2>Síguenos en</h2>
      <ul class="list-inline">
        <li>
          <a href="https://www.facebook.com/gobmexico" target="_blank" rel="noopener" class="footer" title="enlace a facebook abre en una nueva ventana">
            <img alt="Facebook" src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/GobiernoMX" target="_blank" rel="noopener" class="footer" title="Enlace a twitter abre en una nueva ventana">
            <img alt="Twitter" src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>



<h1>Registro para censados</h1>
<form className="form-horizontal">
        <fieldset>
          {/* Form Name */}
          
          <legend>Registro de Censados</legend>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="name">
              Nombre
            </label>
            <div className="col-md-4">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre aquí"
                className="form-control input-md"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="last_name">
              Apellidos
            </label>
            <div className="col-md-4">
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Apellidos aquí"
                className="form-control input-md"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="curpo">
              CURP
            </label>
            <div className="col-md-4">
              <input
                id="curp"
                name="curp"
                type="text"
                placeholder="CURP (18)"
                className="form-control input-md"
                onChange={(e) => setCurp(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="phone_number">
              Teléfono
            </label>
            <div className="col-md-4">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                placeholder="Teléfono"
                className="form-control input-md"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="email">
              Correo
            </label>
            <div className="col-md-4">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@email.com"
                className="form-control input-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="birthdate">
              Fecha de Nacimiento
            </label>
            <div className="col-md-4">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="dd/mm/yyyy"
                className="form-control input-md"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="sex">
              Sexo
            </label>
            <div className="col-md-4">
              <select
                id="sex"
                name="sex"
                className="form-control"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="address">
              Dirección
            </label>
            <div className="col-md-4">
              <select
                id="address"
                name="address"
                className="form-control"
                onChange={(e) => setAddressPerson(e.target.value)}
              >
                {address.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>2
        </fieldset>
        <button onClick={handleSubmit}>Enviar</button>
      </form>


    </>
  );
};

export default Form;
