$(function(){
    const $slides = $('.banner .slides img');
    let current = 0;
    const total = $slides.length;

    // Mostrar primera imagen
    $slides.hide().eq(0).show();

    // Slider automático (como el del video)
    setInterval(() => {
        current = (current + 1) % total;
        $slides.fadeOut(400).eq(current).fadeIn(600);
    }, 3500);
});