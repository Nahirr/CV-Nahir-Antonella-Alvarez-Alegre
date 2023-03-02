    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Inicio";
    document.getElementById("nav_acercademi").innerHTML = "Acerca de mí";
    document.getElementById("nav_experiencia").innerHTML = "Experiencia";
    document.getElementById("nav_habilidades").innerHTML = "Habilidades";
    document.getElementById("nav_contacto").innerHTML = "Contacto";
    document.getElementById("title_acercademi").innerHTML = "Acerca de mí";
    document.getElementById("title_experiencia").innerHTML = "Experiencia";
    document.getElementById("title_habilidades").innerHTML = "Habilidades";
    document.getElementById("title_datos").innerHTML = "Contacto";
    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADÉMICA";
    document.getElementById("exp_cursos").innerHTML = "CURSOS";
    document.getElementById("exp_laboral").innerHTML = "LABORAL";
    document.getElementById("exp_universidad").innerHTML = "Profesorado de matemática. Terciario.";
    document.getElementById("exp_argentina").innerHTML = "Introducción a la programación. Lógica de programación. POO (Ruby) y Programación Funcional (JS).";
    document.getElementById("exp_marketing").innerHTML = "SEO y RRSS, desarrollo de marca. Curso. Secretaría de Innovación Pública";
    document.getElementById("exp_supervisora").innerHTML = "Supervisora de Gestiones Especiales. Personal Flow";
    document.getElementById("exp_ddd").innerHTML = "Analista de operaciones. Di Donato Distribución.";

    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DESARROLLO";
    document.getElementById("hab_software").innerHTML = "SOFTWARE";
    /*contacto*/
    document.getElementById("boton_enviar").value = "Enviar";
    document.getElementById("form_nombre").placeholder = "Nombre:";
    document.getElementById("form_mail").placeholder = "E-mail:";
    document.getElementById("form_mensaje").placeholder = "Mensaje:";

var check = document.querySelector('#check');

document.getElementById("nav_inicio").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_experiencia").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_habilidades").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_contacto").onclick = function () {
    check.checked = false;
}