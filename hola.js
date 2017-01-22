'use strict';
    var getData = function (jsonfields) {
        var url = "/" + jsonfields.controller + "/" + jsonfields.method;
        $.ajax({
            type: jsonfields.type,
            url: url,
            success: function (data) {
                var tr;
                for (var i = 0; i < data.length; i++) {
                    tr = $('<tr/>');
                    for (var j = 0; j < jsonfields.fields.length; j++) {
                        console.log(data[i][jsonfields.fields[j]]);
                        tr.append("<td>" + data[i][jsonfields.fields[j]] + "</td>");
                    }

                    tr.append("<td><a href=/Usuario/Edit/" + data[i].Id + ">Editar </a> | <a href=/Usuario/Details/" + data[i].Id + ">Detalles </a> | <a href=/Usuario/Delete/" + data[i].Id + ">Eliminar</a></td>");
                    $('#data').append(tr);
                }
            },
            error: function (request, status, error, xhr) {
                alert('error');
            }
        });
    }
