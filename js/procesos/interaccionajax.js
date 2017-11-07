

function cargarCarrera() 
{
	//alert("En esta funcion se carga la tabla");

	 			var data = new FormData();
               // data.append('opc',  "4");
                 //url: "procesos/mostrarCarrera.php", 
                 //url: "procesos/procesosCarrera.php",
                $.ajax({                   
                    url: "procesos/mostrarCarrera.php",         // Url to which the request is send
                    type: "POST",             // Type of request to be send, called as method
                    data: data,               // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,        // To send DOMDocument or non processed data file it is set to false
                    success: function(requestData)   // A function to be called if request succeeds
                    {
                        var data = JSON.parse(requestData);
                        //var data = JSON.stringify(requestData);
                        //alert(data);
                        actualizartabla(data);
                    }
                 });

}

function eliminarCarrera(id) 
{
	//alert("En esta funcion se carga la tabla");

	 			var data = new FormData();
                data.append('opc',  "3");
                data.append('codigo', id);
				//data.append('codigo', $id().val());

                $.ajax({
                    //url: "procesos/mostrarCarrera.php", 
                    url: "procesos/procesosCarrera.php",         // Url to which the request is send
                    type: "POST",             // Type of request to be send, called as method
                    data: data,               // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,        // To send DOMDocument or non processed data file it is set to false
                    success: function(requestData)   // A function to be called if request succeeds
                    {
                       cargarCarrera();
                    }
                 });


}


function actualizartabla(data)
{

                $("#tablaDatos").html("");    
                $.each(data, function(i, item) {
                    $("#tablaDatos").append("<tr><td>"+ item.idcarrera +"\
                                </td><td>"+ item.Nombre +"</td>\
                                <td>"+ item.Direccion +"</td> \
                                <td>"+ item.Telefono +"</td>\
                                <td>"+ item.Correo +"</td>\
                                <td>"+ item.Titulacion +"</td> \
                                <td><button type='button' class='btn btn-info' onClick='modificarCarrera("+item.idcarrera+","+item.idtipo+")'><i class='fa fa-check'></i></button></td>\
                                <td><button type='button' class='btn btn-danger' onClick='eliminarCarrera("+item.idcarrera+")'><i class='fa fa-close'></i></button></td></tr>");
                    });
}


function ingresarCarrera()
{
    var data = new FormData();

    //data.append('idcarrera', idCodigo().val() );
    data.append('Nombre', $('#idNombre').val());
    data.append('Direccion', $("#idDireccion").val() );
    data.append('Telefono', $("#idTelefono").val() );
    data.append('Correo', $("#idCorreo").val() );
    data.append('Titulacion', $("#idTitulacion").val() );
    data.append('idtipo', $("#idtipo").val() );

                   $.ajax({
                    //url: "procesos/mostrarCarrera.php", 
                    url: "procesos/ingresarCarrera.php",         // Url to which the request is send
                    type: "POST",             // Type of request to be send, called as method
                    data: data,               // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,        // To send DOMDocument or non processed data file it is set to false
                    success: function(requestData)   // A function to be called if request succeeds
                    {
                       cargarCarrera();
                    }
                 });

}


function modificarCarrera()
{
    var data = new FormData();

    data.append('idcarrera',$('#idCodigo').val() );
    data.append('Nombre', $('#idNombre').val());
    data.append('Direccion', $("#idDireccion").val() );
    data.append('Telefono', $("#idTelefono").val() );
    data.append('Correo', $("#idCorreo").val() );
    data.append('Titulacion', $("#idTitulacion").val() );
    data.append('idtipo', $("#idtipo").val() );

                   $.ajax({
                    //url: "procesos/mostrarCarrera.php", 
                    url: "procesos/modificarCarrera.php",         // Url to which the request is send
                    type: "POST",             // Type of request to be send, called as method
                    data: data,               // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,        // To send DOMDocument or non processed data file it is set to false
                    success: function(requestData)   // A function to be called if request succeeds
                    {
                       cargarCarrera();
                    }
                 });

}