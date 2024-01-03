import React, { Component } from "react";
import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpeg";
import html from "../assets/img/html52.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import jquery from "../assets/img/jquery.png";
import git from "../assets/img/git.png";
import php from "../assets/img/php.png";
import laravel from "../assets/img/laravel.png";
import bootstrap from "../assets/img/bootstrap.png";
import imgTiendaOnline from "../assets/img/tiendaOnline.png";
import imgFarmacia from "../assets/img/farmacia.png";
import Swal from "sweetalert2";
import imgCat from "../assets/img/nyan-cat.gif";
import imgTrees from "../assets/img/trees.png";
import imgEmail from "../assets/img/SendEmail.gif";
import imgHt from "../assets/img/experienecia.jpg";
import imgCpa from "../assets/img/cpa.jpg";
import imgCopple from "../assets/img/coppel.jpg";
import imgApi from "../assets/img/api.jpeg";
import imgCitas from "../assets/img/citas.png";
import imgFkAPI from "../assets/img/fakeapi.png";
import React2, { useState } from 'react';
import MyVerticallyCenteredModal from './ModalCenter';
import MyVerticallyCenteredModal2 from './ModalCenter';
import MyVerticallyCenteredModal3 from './ModalCenter';

class SectionComponent extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      modalContent: {
        title: '',
        body: ''
      }
      // ...otros estados
    };
  }

  setModalShow = (show) => {
    this.setState({ modalShow: show });
  }
  contador = 0;
  setNavbarOpen = "hola mundo";

  state = {
    contador: 0,
    showMe: true,
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  handleImageClick = (title, body) => {
    this.setState({
      modalShow: true,
      modalContent: {
        title,
        body
      }
    });
  }
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  hidden = (e) => {
    this.setState({
      showMe: !this.state.showMe,
    });
  };

  // changeTheme = (e) => {
  //   let configUser = window.matchMedia("(prefers-color-scheme: dark)");
  //   let theme = document.querySelector("#theme");
  //   let modalHeader = document.querySelector(".modal-header");
  //   let modalBody = document.querySelector(".modal-body");
  //   let modalFooter = document.querySelector(".modal-footer");

  //   var colorTema;

  //   // if (localConfig === 'dark') {
  //   //   // console.log("es negro")
  //   //   theme.classList.toggle('theme-dark');
  //   // } else if (localConfig === 'light') {
  //   //   theme.classList.toggle('theme-light');
  //   // }

  //   if (configUser.matches) {
  //     theme.classList.toggle("theme-light");
  //     modalHeader.classList.toggle("theme-light");
  //     modalBody.classList.toggle("theme-light");
  //     modalFooter.classList.toggle("theme-light");
  //     colorTema = theme.classList.contains("theme-light") ? "light" : "dark";
      
  //     colorTema = modalHeader.classList.contains("theme-light")
  //       ? "light"
  //       : "dark";
  //     colorTema = modalBody.classList.contains("theme-light")
  //       ? "light"
  //       : "dark";

  //     colorTema = modalFooter.classList.contains("theme-light")
  //       ? "light"
  //       : "dark";
  //   } else {
  //     theme.classList.toggle("theme-dark");
  //     modalHeader.classList.toggle("theme-dark");
  //     modalBody.classList.toggle("theme-dark");
  //     modalFooter.classList.toggle("theme-dark");

  //     colorTema = theme.classList.contains("theme-dark") ? "dark" : "light";
  //     colorTema = modalHeader.classList.contains("theme-dark")
  //       ? "dark"
  //       : "light";
  //     colorTema = modalBody.classList.contains("theme-dark") ? "dark" : "light";
  //     colorTema = modalFooter.classList.contains("theme-dark")
  //       ? "dark"
  //       : "light";
  //   }

  //   localStorage.setItem("tema", colorTema);
  // };

  change = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  sendEmail = (e) => {
    e.preventDefault();
    // console.log("enviando email");
    let data = document.querySelector('.dataEmail'),
      name = document.querySelector('.name').value,
      email = document.querySelector('.email').value,
      phone = document.querySelector('.phone').value,
      message = document.querySelector('.message').value,
      success = document.querySelector('.load');
    let bigData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
    // console.log(bigData);
    // console.log(this.state) 
    // const values = JSON.stringify(this.state)
    // alert(values)
    //show spinner
    Swal.showLoading();
    fetch('https://formsubmit.co/ajax/federdjpg@gmail.com', {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
        console.log(json)
        data.reset();
        Swal.fire({
          title: 'Email enviado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar' 
        });

      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        // setTimeout(() => {
        //   success.classList.toggle("load");
        // }, 3000);
      })
  }


  render() {
    const { name, email, phone, message } = this.state;

    return (
      <section id="theme" className="pb-4">
        {/* <p>{this.state.contador}</p>
            
            <button onClick={this.sumar}>
              Sumar
            </button>

            <button onClick={this.restar}>
              Restar
            </button>
            {
              this.state.showMe ?
            <div>
                  porfavor ocultame
            </div>
            : null
            } */}

        {/* <button onClick={this.hidden} className="btn btn-primary">
              ocultar
            </button> */}

        {/* SECCION DEL PORTAFOLIO */}
        <h1 className="text-4xl text-center mb-4">Portafolio</h1>
        <hr />

        <article
          id="portafolio"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
      <img
          onClick={() => this.handleImageClick('Smapa', `<a href="https://github.com/fededjpg/Smapa" target="_blank" rel="noreferrer">
            <img src="${img}" alt="Este es el proyecto Smapa" />
            </a>
            <div>
              <p>
                Este sitio web fue el proyecto realizado en mi servicio social para el Sistema Municipal de Agua Potable y Alcantarillado (Smapa), específicamente para gestionar el equipo de saneamiento.
              </p>
              <p>
                Fue desarrollado utilizando las tecnologías HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP y MySQL.
              </p>
              <p>
                <a href="https://github.com/fededjpg/Smapa" target="_blank" rel="noreferrer">
                  Ir al repositorio
                </a>
              </p>
            </div>`
          )}
          className="w-full h-80 bg-cover bg-center cursor-pointer"
          src={img}
          alt=""
      />


      <img
          onClick={() => this.handleImageClick('Tienda en línea', `<a href="https://github.com/fededjpg/Tienda-Online" target="_blank" rel="noreferrer">
          <img src=${imgTiendaOnline} alt="Tienda en línea" />
            </a>
            <div>
              <p>Este proyecto fue creado gracias a un tutorial en Udemy, donde adquirí múltiples habilidades para desarrollar un sistema como este.</p>
              <p>Desarrollado utilizando tecnologías HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP y MySQL.</p>
              <p><a href="https://github.com/fededjpg/Tienda-Online" target="_blank" rel="noreferrer">Ir al repositorio</a></p>
            </div>`
          )}
          className="w-full h-80 bg-cover bg-center cursor-pointer"
          src={imgTiendaOnline}
          alt=""
      />

      <img
          onClick={() => this.handleImageClick('Control de inventario', `<a href="https://github.com/fedegmz/Farmacia" target="_blank" rel="noreferrer">
          <img src=${imgFarmacia} alt="proyecto control de inventario" />
          </a>
          <div>
            <p>Este proyecto fue creado para llevar el control de inventario de una farmacia, donde enfrenté varios retos en el ámbito de las reglas de negocio</p>
            <p>Este proyecto es un control de inventario para una farmacia, fue desarrollado utilizando tecnologías HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP y MySQL.</p>
            <p><a href="https://github.com/fedegmz/Farmacia" target="_blank" rel="noreferrer">Ir al repositorio</a></p>
          </div>`
        )}
          className="w-full h-80 bg-cover bg-center cursor-pointer"
          src={imgFarmacia}
          alt=""
      />

      <img
          onClick={() => this.handleImageClick('Creación de citas', `<a href="https://github.com/fedegmz/crearCitas" target="_blank" rel="noreferrer">
          <img src=${imgCitas} alt="img creación de citas" />
          </a>
          <div>
            <p>Este proyecto fue creado para realizar citas para ser implemenatado en lugar donde se requiera dicha funciopnalidad. Se implemento ciertas validaciones.</p>
            <p>Desarrollado utilizando tecnologías HTML5, CSS3, JavaScript, Go y MySQL.</p>
            <p><a href="https://github.com/fedegmz/crearCitas" target="_blank" rel="noreferrer">Ir al repositorio</a></p>
          </div>`
        )}
          className="w-full h-80 bg-cover bg-center cursor-pointer"
          src={imgCitas}
          alt=""
      />
      <img
          onClick={() => this.handleImageClick('FakeApi', `<a href="https://github.com/fedegmz/fakeapi" target="_blank" rel="noreferrer">
          <img src=${imgFkAPI} alt="Fake Api" />
          </a>
          <div>
            <p>Este proyecto fue inspirado en la platzi fake api, con la finalidad de aplicar mis conocimientos, en los apartados de creación de api, creando asi sus respectivos endpoint, relaciones tanto a nivel tabla, como a nivel modelo, creación de presentación para el consumo y respuesta del servicio.</p>
            <p>Desarrollado utilizando las tecnologías como Laravel (Back) y Vue (Front)</p>
            <p><a href="https://github.com/fedegmz/fakeapi" target="_blank" rel="noreferrer">Ir al repositorio</a></p>
          </div>`
        )}
          className="w-full h-80 bg-cover bg-center cursor-pointer"
          src={imgFkAPI}
          alt=""
      />


          <MyVerticallyCenteredModal
            title={this.state.modalContent.title}
            body={this.state.modalContent.body}
            show={this.state.modalShow}
            onHide={() => this.setModalShow(false)}
            headerRef={this.modalHeaderRef} // Pasa la referencia al componente del modal
          />

          
        </article>

        {/* FIN SECCION DE MIS PROYECTOS */}

        {/* SECCION DE MIS HABILIDADES */}
        <div id="skills" className="mt-4">
          <h1 className="text-4xl text-center mb-4">Habilidades</h1>
          <hr />
          <article className="container mx-auto flex items-center grid grid-cols-3 sm:grid-cols-4 mt-4 mb-4">
            <div>
              <img className="img-skills" src={html} alt="" />
            </div>
            <div>
              <img className="img-skills" src={css} alt="" />
            </div>
            <div>
              <img className="img-skills" src={js} alt="" />
            </div>
            <div>
              <img className="img-skills" src={jquery} alt="" />
            </div>
            <div>
              <img className="img-skills" src={git} alt="" />
            </div>
            <div>
              <img className="img-skills" src={bootstrap} alt="" />
            </div>
            <img className="img-skills" src={php} alt="" />
            <div>
              <img className="img-skills" src={laravel} alt="" />
            </div>
          </article>
        </div>

        {/* FIN SECCION DE MIS HABILIDADES */}

        {/* SECCION DE EXPERIENCIAS LABORALES */}
        <article id="experience">
          <h1 className="text-4xl text-center mb-4">Experiencia</h1>
          <hr />
          <article className="flex mb-4">
            {/* <div className="flex-1">
            </div> */}
            <div className="flex-1 flex flex-wrap justify-center items-center">
              <img className="img-experience rounded mr-2" src={imgHt} alt="" width="100px" />
              <img className="img-experience rounded" src={imgCpa} alt="" width="100px" />
            </div>
            <div className="flex-1 flex flex-wrap justify-center items-center">
              <img className="img-experience rounded mr-2" src={imgApi} alt="" width="100px" />
              <img className="img-experience rounded" src={imgCopple} alt="" width="150px" />
            </div>
          </article>

          {/* FIN SECCION DE EXPERIENCIAS LABORALES */}

          {/* SECCION DE SOBRE MI */}
          <div className="w-1/2 shadow-lg bg-white rounded-lg h-auto m-auto text-gray-700 font-bold mt-4 pb-4">
            <p>Hola. Soy Federico Gómez</p>
            <p>
              Soy desarrollador web backend con dos años de experiencia. Soy una persona a la que le gusta aprender cosas nuevas y
              siempre estoy buscando nuevos desafíos.
              He trabajado para la empresa cpa vision como subcontratado mediante High Tech en la cual estuve realizando actividades
              relacionados con la apliación de impuesto y todo lo relacionado a procesos fiscales.
              Por otro lado en Coppel estuve subcontratado por AP/Interfaces en la cual estuve realizando actividades relacionados con
              la solución de vulnerabilidades en las aplicativos y actualizando las tecnologías por las cuales estaban desarrolladas.
            </p>
          </div>
        </article>
        {/* FIN SECCION DE SOBRE MI */}

        {/* SECCION DE CONTACTO */}

        <article id="contact" className="mt-4">
          <h1 className="text-4xl text-center mb-4 mt-4">Contacto</h1>
          <hr />
          <div className="sm:w-auto lg:w-8/12 shadow-lg rounded-lg h-auto mx-auto font-bold">
            <form onSubmit={this.sendEmail} className="dataEmail grid sm:grid-cols-1 md:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name">Nombre</label>
                <input className="w-11/12 border border-gray-200 rounded py-3 px-4 mb-3 name text-gray-600" type="text" name="name" required placeholder="Escribe tu nombre" />
              </div>
              <div>
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-11/12 border border-gray-200 rounded py-3 px-4 mb-3 email text-gray-600" type="email" name="email" required placeholder="Escribe tu email" />
              </div>
              <div className="col-span-2">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="phone">Teléfono</label>
                <input className="w-9/12 border border-gray-200 rounded py-3 px-4 mb-3 phone text-gray-600" pattern="^\d+$" onKeyPress={(e) => { if (e.target.value.length === 10) e.preventDefault(); }} type="phone" name="phone" required placeholder="Escribe tu número" />
              </div>
              <div className="col-span-2">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message">Mensaje </label>
                <textarea className="w-11/12 border border-gray-200 rounded py-3 px-4 mb-3 message text-gray-600" name="message" rows="5" cols="10" placeholder="Escribe tu mensage" required></textarea>
              </div>
              {/* <div className="load">
                <p>Los datos se enviaron correctamente</p>
              </div> */}
              <div className="col-span-2">
                <input className="bg-blue-500 text-white hover:bg-blue-700 w-full h-10 rounded-lg mb-2" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </article>
        {/* FIN SECCION DE CONTACTO */}
      </section>
    );
  }
}

export default SectionComponent;
