const  inicio = `
<div class="contenido">
    <p>Soy graduada en sociología, y actualmente estoy realizando un bootcamp de Full stack
        developer.Anhelo poder crecer profesionalmente en proyectos de este ámbito. Además, gracias a mi
        experiencia en el trato con clientes y a cualidades como la autogestión y una alta capacidad
        de priorización desarrolladas en el desempeño de tareas administrativas, puedo
        gestionar altos volúmenes de trabajo bajo presión.
        Esto, unido a mi proactividad, compromiso e implicación, garantiza mi capacidad de
        trabajar en equipo.</p> 
    <img src="Images/49447760_324425898194095_2152665390882947901_n.jpg" class="imagen"></div>`;
const contacto = `
<div class="formulario">
<form>
<label for="Name"> Nombre:</label>
<input type="text" name="name" placeholder="Nombre">
<label for="Email"> Email:</label>
<input type="email" name="email" placeholder="Email" required>
<label for="Message">Mensaje: </label>
<textarea name="mensaje" for="mensaje" placeholder="Mensaje" maxlength="300"></textarea>
<input type="submit" name="enviar" value="Enviar"/>
</form> </div> `;
const competencias = 
` <div class="contenido">
<p>Metodologías de estudio cualitativas y cuantitativas.
Elaboración de instrumentos de recogida y análisis de información(encuestas, entrevistas, grupos de discusión).
Inglés nivel B2.</p>
<img src="Images/address-book-2246432_1920.jpg" class="imagen">
</div>`;
const proyectos = `<div class="carrousel-contenedor">

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Images/office-620817_1920.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Portfolio</h5>
        <p>Primer proyecto.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Images/office-620822_1920.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Portfolio 2.0</h5>
        <p>Segundo proyecto.</p>
      </div>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>`


window.addEventListener('load',()=>{
    if(window.location.hash==='#proyectos'){
        main.innerHTML =proyectos;
    }else  if(window.location.hash==='#competencias'){
        main.innerHTML =competencias;
    }else  if(window.location.hash==='#contacto'){
        main.innerHTML =contacto

    }else{
        main.innerHTML =inicio;
    }
})
const main = document.querySelector('main')
document.querySelector('.inicioButton').addEventListener('click',()=>{
    main.innerHTML = inicio;
    history.pushState({},'','#');
})
document.querySelector('.skillsButton').addEventListener('click',()=>{
    main.innerHTML =competencias;
    history.pushState({},'','#competencias');
})
document.querySelector('.contactoButton').addEventListener('click',()=>{
    main.innerHTML = contacto;
    history.pushState({},'','#contacto');
})
document.querySelector('.proyectosButton').addEventListener('click',()=>{
    main.innerHTML = proyectos;
    history.pushState({},'','#proyectos');
})