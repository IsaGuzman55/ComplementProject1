<template>
    <nav class="navbar navbar-expand-lg" id="customNavbar">
        <div class="container-fluid">
            <a class="navbar-brand ms-5" href="#" >Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list text-white"></i>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0 ">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Blog Home</a></li>
                            <li><a class="dropdown-item" href="#">Blog Post</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portafolio</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Portafolio Overview</a></li>
                            <li><a class="dropdown-item" href="#">Portafolio Item</a></li>  
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

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
