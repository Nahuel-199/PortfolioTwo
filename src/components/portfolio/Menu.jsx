import pr0 from "../../assets/projects/proyecto0.jpg";
import pr1 from "../../assets/projects/pelis3.jpeg";
import pr2 from "../../assets/projects/pr2.jpeg";
import pr3 from "../../assets/projects/pr3.jpeg";
import pr4 from "../../assets/projects/pr4.jpeg";
import pr5 from "../../assets/projects/project2.jpeg";
import pr6 from "../../assets/projects/pr5.jpeg";
import pr7 from "../../assets/projects/pr8.jpeg";
import pr8 from "../../assets/projects/pr9.jpeg";
import pr9 from "../../assets/projects/pr10.jpeg";
import pr10 from "../../assets/projects/pr11.jpeg";
import pr11 from "../../assets/projects/pr12.jpeg";
import pr12 from "../../assets/projects/pr13.jpeg";
import pr13 from "../../assets/projects/pr14.jpeg";
import landing from "../../assets/projects/fit.jpg";
import aoe from "../../assets/projects/pr15.jpg";
import dash from "../../assets/projects/dashboard.png";
import digital from "../../assets/projects/digitalagency.png";

const Menu = [
    {
        id: 1,
        images: aoe,
        title: "AOE Tienda Virtual",
        description: "Tienda Virtual, Eccomerce, desarrollada en React, Redux, Material-UI, CSS, JavaScript, MongoDB y Nodejs, cuenta con usuarios, filtros en los productos, ordenes de compra y pasarela de pago con Mercado Pago.",
        link: "https://aoe-tienda.com/"
    },
    {
        id: 2,
        images: landing,
        title: "Landing Page Gym",
        description: "Landing Page, realizada en React, CSS y Javascript, totalmente responsive, es de una sola sección.",
        link: "https://landing1-wheat.vercel.app/"
    },
    {
        id: 3,
        images: pr8,
        title: "Subli Fox2",
        description: "Eccomerce de ropa, realizada con Next Js, React, LocaleStorage Y Bootstrap, para el frontend y MongoDB, Node Js, JWT y Express para el backend, cuenta con filtros por talles, categorias, ascendente y descende en precio",
        link: "https://next-fox.vercel.app/?search=all"
    },
    {
        id: 4,
        images: pr1,
        title: "MovieApp",
        description: "MovieApp buscador de pelis y series, empieza con todas las tendencias que hay en el momento, tiene filtros por categorias, información sobre los actores o personajes y enlances a los adelantos de cada serie o peli ",
        link: "https://the-movies-app-three.vercel.app/"
    },
    {
        id: 5,
        images: digital,
        title: "DigitalAgency",
        description: "Landing Page para agencia de Marketing, realizada con React, Javascript, CSS. Cuenta con el dark mode realizado con el contexto de Reactjs.",
        link: "https://digital-agency-kappa.vercel.app/"
    },
    {
        id: 6,
        images: dash,
        title: "Dashboard",
        description: "Dashboard realizada en React, Javascript, Sass, incluyendo dark mode gracias al contexto de react, solamente se puede visualizar en escritorio.",
        link: "https://dashboard-liart-eight.vercel.app/"
    },
    {
        id: 7,
        images: pr4,
        title: "Mi portfolio",
        description: "Este fue el primer portfolio que realice, echo con React, cuenta con una modalidad blanco y negro, totalmente responsive, tambien se utilizo SASS(Lenguaje de hoja de estilos en cascada)",
        link: "https://portfolio-six-black-41.vercel.app/"
    },
    {
        id: 8,
        images: pr5,
        title: "SubliFox",
        description: "Eccomerce de ropa, realizada con React, Redux, Styled-Components y Material-UI para el frontend y MongoDB, Node Js y Express para el backend, cuenta con filtros por color, talles, ascendente y descende en precio",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6900168711534108672/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6900168711534108672%29"
    },
    {
        id: 9,
        images: pr2,
        title: "Game Zone",
        description: "Single Page Application con la temática de videogames utilizando las tecnologías de React, Redux, CSS para realizar el Front, cuenta con un Backend hecho en node Js y una base de datos en PostgreSQL",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6869337057299349504/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6869337057299349504%29" 
    },
    {
        id: 14,
        images: pr13,
        title: "TodoApp",
        description: "Lista de tareas, realizada con React, es una app completa cuanta con un login y un register, para ver de que usuario es cada , tambien podemos actualizar la tarea y eliminarla",
        link: "http://taskappl.herokuapp.com/"
    },
    {
        id: 10,
        images: pr9,
        title: "Hoy lo firmo",
        description: "Interfaz de usuario, login y register, realizado solamente con React, efecto de movimientos de ondas en las pantallas, transiciones en algunos elementos, todo con CSS, cuenta con pantalla para proyectos y tambien con un Dashboard",
        link: "https://hoylo-firmo.vercel.app/"
    },
    {
        id: 11,
        images: pr10,
        title: "Electro-Native",
        description: "UI de tienda de electrodomesticos, realizada en React Native, cuenta con la pantalla inicial donde se visualizan los productos de diferentes categorias, tambien con la pantalla del carrito y el detalle del producto con todas sus descripciones",
        link: "https://www.linkedin.com/posts/nahuel-cernadas-3b111a1b7_react-reactnative-programacion-activity-6988484086629601280-xZSd?utm_source=share&utm_medium=member_desktop"
    },
    {
        id: 12,
        images: pr11,
        title: "Todo-App",
        description: "Lista de tareas, realizada con React Native, es una app facil de utilizar, cuanta con un boton para agregar la tarea que desea y cuando la tarea ya este realizada solamente aprieta sobre esa especifica tarea y automaticamente se elimina de la pantalla",
        link: "https://www.linkedin.com/posts/nahuel-cernadas-3b111a1b7_react-native-frontend-activity-6991000166619090944-1eyZ?utm_source=share&utm_medium=member_desktop"
    },
    {
        id: 13,
        images: pr12,
        title: "Mi portfolio",
        description: "Este es mi portfolio actualmente, aca es donde hago mi recorrido de aprendizaje y mis proyectos, donde tambien cuanto un poco sobre mi y detallo mis habilidades tecnicas",
        link: "https://portfolio-two-eight.vercel.app/"
    },
    {
        id: 14,
        images: pr6,
        title: "PizzasApp",
        description: "Tienda de comida, tematica de pizzas, realizada con Next Js, React y modulos de CSS para el frontend, cuenta tambien con una base de datos en MongoDB, carrito, ordenes de compra, metodo de pago y tambien una interfas admin",
        link: "https://www.linkedin.com/posts/nahuel-cernadas-3b111a1b7_frontend-developments-react-activity-6904171828021932032-lZC_?utm_source=share&utm_medium=member_desktop"
    },
    {
        id: 15,
        images: pr7,
        title: "Tienda de Hamburguesas",
        description: "Tienda de comida, tematica de hamburguesas, realizada con Next Js, React y modulos de CSS para el frontend, cuenta tambien con una base de datos en MongoDB, carrito, ordenes de compra y tambien una interfas admin",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6906021900103798784/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6906021900103798784%29"
    },
    {
        id: 16,
        images: pr3,
        title: "The Food World",
        description: "Single Page Application con la temática de comidas utilizando las tecnologías de React, Redux, CSS para realizar el Front, cuenta con un Backend hecho en node Js y una base de datos en PostgreSQL",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6871060785129426944/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6871060785129426944%29"
    },
    {
        id: 17,
        images: pr0,
        title: "Weather app",
        description: "App para buscar climas en diferentes regiones, con diferentes estilos de imagenes para cada clima, realizada con React y mostrando los datos de la api OpenWeatherMap",
        link: "https://weatherapp-bay-sigma.vercel.app/"
    },
 
]

export default Menu