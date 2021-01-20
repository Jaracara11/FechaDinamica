$(document).ready(function() {
    const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var fechaMes = new Date();

    if (fechaMes.getMonth() == 0) {
        $('#mes1').text('Diciembre');
        $('#mes2').text('Noviembre');
        $('#mes3').text('Octubre');

    } else if (fechaMes.getMonth() == 1) {
        $('#mes1').text('Enero');
        $('#mes2').text('Diciembre');
        $('#mes3').text('Noviembre');

    } else if (fechaMes.getMonth() == 2) {
        $('#mes1').text('Febrero');
        $('#mes2').text('Enero');
        $('#mes3').text('Diciembre');
    } else {
        $('#mes1').text(arrayMeses[fechaMes.getMonth() - 1]);
        $('#mes2').text(arrayMeses[fechaMes.getMonth() - 2]);
        $('#mes3').text(arrayMeses[fechaMes.getMonth() - 3]);
    }
});