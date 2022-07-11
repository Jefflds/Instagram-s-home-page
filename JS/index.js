var img = document.querySelector(".userprofilephoto");
var JS = prompt ("Do you want use JS?");

if (JS === "Yes") {
   img.setAttribute('src', 'images/zoro-icon.jfif');
   alert ('Hey, Zoro!');
} else {
   alert ('Ok, default');
}