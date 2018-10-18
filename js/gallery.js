// js/gallery.js

// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery()
{
  let thumbnails = document.querySelector("#gallery-thumbs").
                            querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail)
  {
    thumbnail.addEventListener("click", function()
    {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newDataDescription = thumbnail.dataset.description;
      let newTitle = thumbnail.dataset.title;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newDataDescription);
      mainImage.setAttribute("title", newTitle);

    });
  });
}