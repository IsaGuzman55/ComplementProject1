<template>
    <footer class="bg-body-tertiary text-center text-lg-start">
    <div class="d-flex p-3 primary" style="background-color: #212529;" id="footerContainer">
        <section class="p-3 pt-0 w-100 mt-2">
            <div class="row d-flex justify-content-center mt-4">

                <div class="col-md-7 col-lg-8 text-center text-md-start">
                    <div class="d-flex text-lg-start me-5 ms-5" id="iconoFooter">
                        <p>Copyright <i class="bi bi-c-circle"></i></p>
                        <p class="ms-2">Your Website 2023</p>
                    </div>
                </div>

                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end mb-5">
                    <div id="enlaces" class="me-5">
                        <a clas="text-ligth small" href="#" style="color: white;">Privacy</a>
                        <span class="Text-white mx-1">.</span>
                        <a clas="text-ligth small" href="#" style="color: white;">Terms</a>
                        <span class="Text-white mx-1">.</span>
                        <a clas="text-ligth small" href="#" style="color: white;">Contact</a>
                    </div>
                </div>

            </div>
        </section>
    </div>
    </footer>
</template>

<script>

</script>

<style>
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        z-index: 1000;
    }

    #footerContainer{
        height: 100px;
    }


    #iconoFooter{
        margin-left: 60px;
    }

    p{
        color: white;
    }

    #enlaces{
        color: white;
    }

 
</style>