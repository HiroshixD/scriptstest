'use strict';
    var GET = function (config, handleData) {
        switch (true) {
            case config.identifier > 0:
                var url = "/" + config.controller + "/" + config.method + "/" + config.identifier;
                break;
            case config.identifier === false:
                var url = "/" + config.controller + "/" + config.method;
                break;
        }
        if (config.identifier === undefined) {
            config.identifier = 1;
        }
        var data = $.ajax({
            type: "GET",
            url: url,
            success: function (data) {
                handleData('success', data);
            },
            error: function (request, status, error, xhr) {
                handleData('error', request.statusText);
            }
        });
    };

        var POST = function (config, handleData) {
            $.ajax({
                type: "POST",
                url: "/" + config.controller + "/" + config.method,
                data: config.data,
                contentType: false,
                processData: false,
                success: function (data) {
                    handleData('success', data);
                },
                error: function (request, status, error, xhr) {
                    alert('error');
                    handleData('error', request.responseText);
                }

            });
        };

    var errorMessages = function (data) {
      switch (data) {
          case "OK":
              alert("No hay Datos");
              break;
          case "Not Found":
              alert("El metodo que ingresaste es incorrecto");
              break;
          default:
              alert(data);
              break;
      }
    };


    var fillArray = function (data) {           
        var formData = new FormData();
        formData.append('__RequestVerificationToken', $('input[name="__RequestVerificationToken"]').val());
        for (var i = 0; i < data.length; i++) {
            formData.append(data[i], $('#' + data[i]).val());
        }
        console.log(formData);
        return formData;
    };
