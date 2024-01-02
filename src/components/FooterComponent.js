import React, { Component } from "react";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import whatsapp from "../assets/img/whatsapp.svg";

class FooterComponent extends Component {

  render() {
    let fecha = new Date();
    let actual = fecha.getFullYear();
    return (
      <footer className=" bg-gray-900 h-24 text-white">
        <div className="flex flex-wrap justify-center pt-4">

          <img className="ml-2 cursor-pointer" src={facebook} width="30" alt="" />
        
          <img className="ml-2 cursor-pointer" src={instagram} width="30" alt="" />
        
          <img className="ml-2 cursor-pointer" src={linkedin} width="30" alt="" />
        
          <img className="ml-2 cursor-pointer" src={github} width="30" alt="" />
        
          <img className="ml-2 cursor-pointer" src={whatsapp} width="30" alt="" />
      
        </div>

        <div className="flex flex-wrap content-end justify-center">
          <p>Developed and Desingned by Fede gomez &copy; {actual}</p>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
