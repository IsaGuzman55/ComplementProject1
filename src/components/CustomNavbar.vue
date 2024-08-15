<template>
    <nav class="navbar navbar-expand-lg" id="customNavbar">
        <div class="container-fluid">
            <router-link class="navbar-brand ms-5" to="/">Start Bootstrap</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list text-white"></i>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0 ">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pricing">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/faq">FAQ</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item nav-link" to="/blogHome">Blog Home</router-link>
                            </li>
                            <li><router-link class="dropdown-item nav-link" to="/blogPost">Blog Post</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portafolio</a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item nav-link" to="/portafolioOverview">Portafolio Overview</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item nav-link" to="/portafolioItem">Portafolio Item</router-link>
                            </li>  
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'CustomNavbar'
    }
</script>

<style>
    #customNavbar {
        background-color: #212529; /* Forzar el color de fondo negro */
    }

    #customNavbar .navbar-brand{
        color: white;
    } 
    
    #customNavbar .navbar-nav .nav-link {
        color: #FFFFFF8C; /* Color del texto de la marca y enlaces */
    }

    #customNavbar .navbar-nav .nav-link:hover{
        color: white;
    }

    #customNavbar .dropdown-menu {
        background-color: #212529; /* Fondo del menú desplegable */
    }

    #customNavbar .dropdown-menu .dropdown-item {
        color: #FFFFFF8C; /* Color del texto en el menú desplegable */
    }

    #customNavbar .dropdown-menu .dropdown-item:hover {
        color: white; /* Color del texto en el menú desplegable */
    }

  

</style>
