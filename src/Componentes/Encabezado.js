import React from "react";

class EncabezadoClass extends React.Component{

    render(){
        return(
            <header target="iframe-index" class="topheader">
            <nav class="topnav">
                <a href="index.html" class="logo">
                    <img height="80" width="80" src="./images/logo_crepas.jpg" alt="logo">
                    <div class="logotipo">
                        Crepitas
                    </div>
                </a>
                <button class="open-menu" aria-label="Abrir Menu">
                    <img height="80" width="80" src="./images/Hamburger_icon.svg.png" alt="abrir">
                </button>
                <ul class="menu">
                    <button class="close-menu" aria-label="abrir menu">
                        <img height="100" width="100" src="./images/close-svg.png" alt="cerrar">
                    </button>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="#Quienes somos">Quienes somos</a></li>
                    <li><a href="#" class="show">Iniciar sesion</a></li>
                    <li><a href="pedido.html"  ><i class="fas fa-shopping-cart"></i></a></li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default EncabezadoClass;