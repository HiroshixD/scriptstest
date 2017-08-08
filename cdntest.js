$(document).ready(function () {
    localStorage.removeItem('categories');

    function resizeCategories() {
        var maxsize = $('#menu').width() - 150;

        var li_categories = [];
        var categories = JSON.parse(localStorage['categories']);
        $(categories).each(function (index) {
            li_categories.push('<li><a href="/categoryc/' + categories[index].slug + '/PE" class="header-categories">' + categories[index].category + '</a></li>');
        });
        $('#menu_top').empty();
        $('#menu_top').append(li_categories.join(''));
        if (maxsize > 600) {
            var size = 0;
            var cat = [];
            $("#menu_top li").each(function (n) {
                size = size + $(this).outerWidth();
                if (size > maxsize) {
                    $(this).css('display', 'none');
                    cat.push({category: $(this).text(), slug: $('a', this).attr('href')});
                }
            });

            if (cat.length > 0) {
                $('#menu_top').append('<li><div class="dropdown" id="more_categories" style="top: 16px; margin-left: 30px;"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Más categorías<span class="caret"></span></a><ul id="moreitems" class="dropdown-menu"></ul></div></li>');
                for (var i = 0; i < cat.length; i++) {
                    $('#moreitems').append('<li><a href="' + cat[i].slug + '" style="color: #000">' + cat[i].category + '</a></li>');
                }
            }
        }
    }

    /**
     *
     */
    $('body').fadeIn();
    $('footer').fadeIn();
    $('#custom-search').click(function () {
        $('#modal-search').modal();
        $('#search-event').focus();
    });
    $("a.my-tool-tip").tooltip();
    /**
     *
     * @type {Array}
     */
    var li_categories = [];
    var li_countries = [];
    /**
     *
     */
    if (!localStorage['categories']) {
        $.ajax({
            url: "https://api.joinnus.com/v1/PE/categories",
            type: "get",
            success: function (data) {
                var categories = [];
                var cate = data.data;
                for (var i = 0; i < cate.length; i++) {
                    categories.push({category: cate[i].name, slug: cate[i].slug});
                }

                categories.traductor();
                localStorage['categories'] = JSON.stringify(categories);
                $(categories).each(function (index) {
                    li_categories.push('<li><a href="/categoryc/' + categories[index].slug + '/PE" class="header-categories ju-ripple">' + categories[index].category + '</a></li>')
                });
                $('#menu_top').append(li_categories.join(''));

                resizeCategories();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('error');
            }
        });
    } else {
        resizeCategories();
    }

    Array.prototype.traductor = function () {
        for (var i = 0; i < this.length; i++) {
            switch (this[i].category) {
                case 'Sports':
                    this[i].category = 'Deportes';
                    break;
                case 'Entertainment':
                    this[i].category = 'Entretenimiento';
                    break;
                case 'Trip & adventure':
                    this[i].category = 'Viaje y aventura';
                    break;
                case 'Food & drinks':
                    this[i].category = 'Comidas y bebidas';
                    break;
                case 'Art & culture':
                    this[i].category = 'Arte y cultura';
                    break;
                case 'Pets & animals':
                    this[i].category = 'Animales y mascotas';
                    break;
                case 'Hobbies & crafts':
                    this[i].category = 'Hoobies';
                    break;
                case 'Technology':
                    this[i].category = 'Tecnología';
                    break;
                case 'Kids':
                    this[i].category = 'Niños';
                    break;
                case 'Community service':
                    this[i].category = 'Servicio a la comunidad';
                    break;
                case 'Conferences and lectures':
                    this[i].category = 'Conferencias y lecturas';
                    break;
                case 'Diary':
                    this[i].category = 'Diario';
                    break;
            }
        }
    };

    window.onresize = function (event) {

        resizeCategories();
    };

    var notificationshtml = [];
    var notifications = [
        {user: 'Karen ', action: 'se unió a ', event: 'Mon Laferte en Lima'},
        {user: 'Tangerine Real Games ', action: 'te invitó a ', event: 'Apocalipsis Zombie - Magdalena'},
        {user: 'Vanessa Orihuela ', action: 'se unió ', event: 'Kongos en concierto'},
        {user: 'Melissa Arancibia Cortez ', action: 'se unió a ', event: 'Kongos en concierto'},
        {user: 'Juan Fernando Villena ', action: 'se unió a ', event: '#UnaSolaFuerza | Donación Online. #FuerzaPerú'},
        {user: 'Sully Rodriguez ', action: 'se unió a ', event: '#UnaSolaFuerza | Donación Online. #FuerzaPerú'},
        {user: 'Maria Pia Chaparro ', action: 'se unió a ', event: '#UnaSolaFuerza | Donación Online. #FuerzaPerú'}
    ];

    $(notifications).each(function (index) {
        notificationshtml.push('<li><p><b>' + notifications[index].user + '</b> <span>' + notifications[index].action + '</span> <a href="#">' + notifications[index].event + '</a></p></li>');
    });
    $('.dropdown-notifications').append(notificationshtml);
    $(".boton-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    setTimeout(function () {
        $('.wtsp').fadeOut(5000);
    }, 15000)
//	Detail Layout


    $('#more_categories').click(function (e) {
        e.stopPropagation();
        $(this).addClass('open');
    });
});
