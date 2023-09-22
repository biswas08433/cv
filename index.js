let frame1 = 0
let frame2 = 0
let descriptionTextLine1 = "I am a Computer Scientist and Engineer, good at Systems programming and Networking."
let descriptionTextLine2 = "Occationally I do some Game and GPU programming in free time."
let descriptionLine1 = $(".description-block-line-1")
let descriptionLine2 = $(".description-block-line-2")

let speed = 40

function typeWriter(element, text, frame) {
    if (frame < text.length) {
        element.html(element.html() + text.charAt(frame));

        setTimeout(typeWriter, speed += .1, element, text, frame + 1);
    }
}

typeWriter(descriptionLine1, descriptionTextLine1, frame1)
typeWriter(descriptionLine2, descriptionTextLine2, frame2)
// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});
