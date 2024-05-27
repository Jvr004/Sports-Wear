const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `

  

<a href="index.html"><i class="fa-solid fa-chevron-up fa-beat-fade"></i></a>
      
      <div class="logo" id="logo">
        <a href="index.html">
          <img src="images/Logo.gif" width="100px" alt="Imagen logo"/>
        </a>
      </div>

      <!--Nav-->
      <nav class="navbar">
        <div class="nav-links" id="nav-links">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="producto.html">Productos</a></li>
            <li><a href="mayorista.html">Venta Mayorista</a></li>
            <li><a href="locales.html">Locales</a></li>
            <li><a href="guia-talles.html">Guia de Talles</a></li>
            <li><a href="login.html"><i class="fa-regular fa-user fa-xl"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-bag-shopping fa-xl"></i></a></li>
          </ul>
        </div>
      </nav>
      `;

footer.innerHTML = `
<div class="navegacion">
        <ul>
          <li><a href="index.html" target="_parent">Volver al Inicio</a></li>
          <li><a href="producto.html">Productos</a></li>
          <li><a href="mayorista.html">Venta Mayorista</a></li>
          <li><a href="locales.html">Locales</a></li>
          <li><a href="guia-talles.html">Guia de Talles</a></li>
          <li><a href="cambios-devoluciones.html">Cambios y Devoluciones</a></li>
        </ul>
      </div>

      <div class="social">
        <h3>Redes Sociales</h3>
        <i class="fa-brands fa-facebook fa-2xl"></i>
        <i class="fa-brands fa-instagram fa-2xl"></i>
        <i class="fa-brands fa-whatsapp fa-2xl"></i>
      </div>
      <div class="copyRight">
        <p><strong>CopyRight Sports-Wear - 2024</strong></p>
      </div>
`