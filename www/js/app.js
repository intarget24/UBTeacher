/**
 * Created by Intarget on 18/01/2016.
 */
var navigation={};
var Myapp = {};
Myapp.config = {
};
window.onload = function() {
    navigation.mainView = navigation.fw.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true,
        domCache: true
    });
};

navigation.fw = new Framework7();
navigation.$$ = Dom7;

Myapp.angular = angular.module('UBEvalTeacherApp', ['chart.js']);
Myapp.angular.controller('general', function ($scope, $http) {

    $scope.ayudaTitulo = "";
    $scope.ayudaDescripcion = "";
    $scope.ubicodeSession = "";

    $scope.cycles = [{name: 'Ciclo 1', description: 'Primer y Segundo Grado', imagen: 'Portada1.jpg'},
        {name: 'Ciclo 3', description: 'Tercer y Cuarto Grado', imagen: 'Portada3.jpg'},
        {name: 'Ciclo 5', description: 'Quinto y Sexto Grado', imagen: 'Portada5.jpg'},
        {name: 'Ciclo 7', description: 'Secundaria', imagen: 'Portada7.jpg'}];


    $scope.proyects= [
        {name: 'Proyecto 1 la feria', imagen:'1.png'},
        {name: 'Proyecto 2 Transportes', imagen:'2.png'},
        {name: 'Proyecto 3 Peces', imagen:'3.png'},
        {name: 'Proyecto 4 Motociclismo', imagen:'4.png'}];

    $scope.sessions=[
        {name: 'Sesion 1', description: 'Hablemos de...', imagen: 'sesion1.png'},
        {name: 'Sesion 2', description: 'Modelo Individual', imagen: 'sesion2.png'},
        {name: 'Sesion 3', description: 'Automatización', imagen: 'sesion3.png'},
        {name: 'Sesion 4', description: 'Videojuego', imagen: 'sesion4.png'},

        ];

    $scope.indicators=[
        {id: 0, name: 'Juega', description: 'Interpreta documentos de "Construye', image: 'img/bookSections/sections/juega.png'},
        {id: 1, name: 'Conoce', description: 'Relaciona contenidos con sus experiencias', image: 'img/bookSections/sections/conoce.png'},
        {id: 2, name: 'Resuelve', description: 'Relaciona contenidos con las actividades', image: 'img/bookSections/sections/resuelve.png'},
        {id: 3, name: 'Conecta', description: 'Conecta un dispositivo inteligente al Xaipo´s Brain', image: 'img/bookSections/sections/conecta.png'},
        {id: 4, name: 'Construye', description: 'Se muestra tolerante con sus compañeros', image: 'img/bookSections/sections/construye.png'},
            {id: 5, name: 'Ordena', description: 'Conoce la historia de las ferias', image: 'img/bookSections/sections/ordena.png'}
    ];

    $scope.currentStudentEval = {};

    $scope.ScanLogin = function(){
        $scope.ubicodeSession = "456789";
        //alert("Escaneo de Login");
        navigation.mainView.router.load({pageName:'menuCycle'});
    }

    $scope.SelectCycle = function()
    {
        navigation.mainView.router.load({pageName:'menuProyect'});
    }

    $scope.SelectProyect = function()
    {
        navigation.mainView.router.load({pageName:'menuSession'});
    }

    $scope.SelectSession = function()
    {
        navigation.mainView.router.load({pageName:'scanStudent'});
    }

    $scope.ScanUbicode = function()
    {
        alert("Alumno");
        /*navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });*/

        function onSuccess(imageData) {
            //var image = document.getElementById('myImage');
            //image.src = "data:image/jpeg;base64," + imageData;
            navigation.mainView.router.load({pageName:'evalStudent'});
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
        navigation.mainView.router.load({pageName:'evalStudent'});
    }

    $scope.MenuSide= function(id)
    {
        switch(id)
        {
            case 1:
                navigation.mainView.router.load({pageName:'login'});
                break;
            case 2:
                navigation.mainView.router.load({pageName:'evalStudent'});
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }
});