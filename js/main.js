$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
function trocar(elemento){
    alert(elemento.name);
}

var etapa = new Object();
etapa.titulo = "O Amor de Deus";
etapa.urlImg = "style/img/min2.jpg";
etapa.urlid = 1;
etapa.descricao =" Deus nos criou por amor";

 retornasrc =()=>{ return "<img src='"}