import React, { Component } from "react";
import logo from "../assets/img/portafolio.svg";
import theme from '../assets/img/arrow.png'
import { faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderToString } from 'react-dom/server';

class HeaderComponent extends Component {

  state = {
    contador: 0,
    showMe: false
  }
  
  hidden = (e) => {
    this.setState({
     showMe: !this.state.showMe
   })
  }


  // changeTheme = (e) => {
  //   let configUser = window.matchMedia('(prefers-color-scheme: dark)');
  //   let theme = document.querySelector('#theme');
  //   let modalHeader = document.querySelector('.modal-header');
   
  //   let modalBody = document.querySelector('.modal-body');
    
  //   let modalFooter = document.querySelector('.modal-footer');

  //   let modeSwitch = document.getElementById('modeSwitch');
  //   var colorTema;
  //   const moonIcon = <FontAwesomeIcon icon={faMoon}  className="moon-icon" />;
  //   const sunIcon = <FontAwesomeIcon icon={faSun} className="sun-icon" />;
  //   let localConfig = localStorage.getItem('tema');
  //   if (localConfig === 'dark') {
  //     modeSwitch.innerHTML=renderToString(moonIcon);
  //   }else{
  //     modeSwitch.innerHTML=renderToString(sunIcon);
  //   }

  //   // if (localConfig === 'dark') {
  //   //   // console.log("es negro")
  //   //   theme.classList.toggle('theme-dark');
  //   // } else if (localConfig === 'light') {
  //   //   theme.classList.toggle('theme-light');
  //   // }

  //   if (configUser.matches) {
  //     theme.classList.toggle('theme-light');
  //     modalHeader.classList.toggle('theme-light');

  //     modalBody.classList.toggle('theme-light');

  //     modalFooter.classList.toggle('theme-light');

  //     colorTema = theme.classList.contains('theme-light') ? 'light' : 'dark';
  //     colorTema = modalHeader.classList.contains('theme-light') ? 'light' : 'dark';
     
  //     colorTema = modalBody.classList.contains('theme-light') ? 'light' : 'dark';
     
  //     colorTema = modalFooter.classList.contains('theme-light') ? 'light' : 'dark';

  //   } else {
  //     theme.classList.toggle('theme-dark');
  //     modalHeader.classList.toggle('theme-dark');
     
  //     modalBody.classList.toggle('theme-dark');
     
  //     modalFooter.classList.toggle('theme-dark');


  //     colorTema = theme.classList.contains('theme-dark') ? 'dark' : 'light';
  //     colorTema = modalHeader.classList.contains('theme-dark') ? 'dark' : 'light';
     
  //     colorTema = modalBody.classList.contains('theme-dark') ? 'dark' : 'light';
     
  //     colorTema = modalFooter.classList.contains('theme-dark') ? 'dark' : 'light';
     
  //   }

  //   localStorage.setItem('tema', colorTema);

  // }

  render() {

    return (
      <nav className="bg-slate-200 dark:bg-gray-800 sticky top-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={this.hidden}
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={logo}
                  title="My portafolio"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={logo}
                  title="My portafolio"
                />
              </div>




              
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="#portafolio"
                    className="portafolio bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Portafolio
                  </a>
                  <a
                    activeclassname="bg-gray-900"
                    href="#skills"
                    className="skills text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Habilidades
                  </a>
                  <a
                    href="#experience"
                    className="experience text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Experiencia
                  </a>
                  <a
                    href="#contact"
                    className="experience text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contacto
                  </a>
                  <a
                    href="https://github.com/fedegmz/uploadFiles/files/13815941/CV.pdf" target="_blank" rel="noreferrer"
                    className="experience text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >CV
                  </a>
                  {/* <botton onClick={this.changeTheme} className="btn btn-primary mt-4">Cambiar tema</botton> */}

                </div>
              </div>

            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <div className="ml-3 relative">
                <div>

                <div  className="switch bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 " aria-haspopup="true" id="modeSwitch">
                  {/* <img  class="h-8 w-8 rounded-full" src={theme} id="switchImage" alt="" /> */}
                </div>
              {/* <button onClick={this.changeTheme} class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <img class="h-8 w-8 rounded-full" src={theme} alt="" />
                  </button> */}
                  
            </div>
              </div>
              </div>

          </div>
        </div>

        {/* <!-- MENU MOVIL  --> */}

        {
          this.state.showMe ?
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#portafolio"
                className="portafolio text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Portafolio
              </a>
                <a
                  href="#skills"
                  className="skills text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Habilidades
              </a>
                <a
                  href="#experience"
                  className="experience text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                    Experiencia
              </a>
              <a
                href="#contact"
                className="experience text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </a>
                  
              <a
                href="https://github.com/fedegmz/uploadFiles/files/13815922/CV.pdf"  target="_blank" rel="noreferrer"
                className="experience text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >CV</a>
            </div>
            </div>
            :null
        }
      </nav>
    );
  }
}

export default HeaderComponent;
