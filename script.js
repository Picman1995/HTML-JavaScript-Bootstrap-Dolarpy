$(document).ready(function() {
  // Realizar la solicitud al webservice
  $.getJSON('https://dolar.melizeche.com/api/1.0/', function(data) {
    // Obtener los datos específicos que necesitas mostrar
    var compra = data.dolarpy.maxicambios.compra;
    var venta = data.dolarpy.maxicambios.venta;

    // Crear el HTML para mostrar los resultados
    var html = `
      <h3>Información del Tipo de Cambio</h3>
      <ul>
        <li>Compra: ${compra}</li>
        <li>Venta: ${venta}</li>
      </ul>
    `;

    // Agregar el HTML al elemento con el id "exchangeResults"
    $('#exchangeResults').html(html);
  });
});
