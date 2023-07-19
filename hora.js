var hora = document.getElementById('horas');
var min = document.getElementById('minutos');
var seg = document.getElementById('segundos');

var tempo = setInterval(function time()  {
        let dateToday = new Date();
        var h = dateToday.getHours();
        var m = dateToday.getMinutes();
        var s = dateToday.getSeconds();

        hora.textContent = h;
        min.textContent = m;
        seg.textContent = s;
});