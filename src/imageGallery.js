const galleries = {
    "subjectN06Gallery": {
        index: 0,
        images: [
            "../../images/SubjectN06/sn06_1.png",
            "../../images/SubjectN06/sn06_2.png",
            "../../images/SubjectN06/sn06_3.png",
            "../../images/SubjectN06/sn06_4.png",
            "../../images/SubjectN06/sn06_5.png",
            "../../images/SubjectN06/sn06_6.png",
            "../../images/SubjectN06/sn06_7.png",
            "../../images/SubjectN06/sn06_8.png",
            "../../images/SubjectN06/sn06_9.png",
            "../../images/SubjectN06/sn06_10.png",
            "../../images/SubjectN06/sn06_11.png",
            "../../images/SubjectN06/sn06_12.png",
            "../../images/SubjectN06/sn06_13.png",
            "../../images/SubjectN06/sn06_14.png",
            "../../images/SubjectN06/sn06_15.png",
            "../../images/SubjectN06/sn06_16.png",
            "../../images/SubjectN06/sn06_17.png",
            "../../images/SubjectN06/sn06_18.png",
            "../../images/SubjectN06/sn06_19.png",
            "../../images/SubjectN06/sn06_20.png",
            "../../images/SubjectN06/sn06_21.png",
            "../../images/SubjectN06/sn06_22.png"
        ]
    },
    "solarSystemsDownGallery": {
        index: 0,
        images: [
            "../../images/SolarSystemsDown/ssd_image1.png",
            "../../images/SolarSystemsDown/ssd_image2.png",
            "../../images/SolarSystemsDown/ssd_image3.png",
            "../../images/SolarSystemsDown/ssd_image4.png",
            "../../images/SolarSystemsDown/ssd_image5.png",
            "../../images/SolarSystemsDown/ssd_image6.png",
            "../../images/SolarSystemsDown/ssd_image7.png",
            "../../images/SolarSystemsDown/ssd_image8.png",
            "../../images/SolarSystemsDown/ssd_image9.png"
        ]
    },
    "recipeForRevengeGallery": {
        index: 0,
        images: [
            "../../images/RecipeForRevenge/rfr_1.png",
            "../../images/RecipeForRevenge/rfr_2.png",
            "../../images/RecipeForRevenge/rfr_3.png",
            "../../images/RecipeForRevenge/rfr_4.png",
            "../../images/RecipeForRevenge/rfr_5.png",
            "../../images/RecipeForRevenge/rfr_6.png",
            "../../images/RecipeForRevenge/rfr_7.png",
            "../../images/RecipeForRevenge/rfr_8.png",
            "../../images/RecipeForRevenge/rfr_9.png",
            "../../images/RecipeForRevenge/rfr_10.png",
            "../../images/RecipeForRevenge/rfr_11.png"
        ]
    },
    "minesweeperGallery": {
        index: 0,
        images: [
            "../../images/Minesweeper/ms_1.jpg",
            "../../images/Minesweeper/ms_2.jpg",
            "../../images/Minesweeper/ms_3.jpg",
            "../../images/Minesweeper/ms_4.jpg",
            "../../images/Minesweeper/ms_5.jpg",
            "../../images/Minesweeper/ms_6.jpg",
            "../../images/Minesweeper/ms_7.jpg",
            "../../images/Minesweeper/ms_8.jpg"
        ]
    }
}

// function that dynamically creates the image gallery
function LoadImageGallery (galleryId) {
    for(let i = 0; i < galleries[galleryId].images.length; i++){
        // create a thumbnail div
        const newThumbnail = document.createElement("div");
        newThumbnail.id = galleryId + "Thumbnail_" + i;    // set the id; ex: "subjectN06GalleryThumbnail_1"
        newThumbnail.classList.add("thumbnail");
        // add event listeners that allow thumbnails to be hovered over and clicked
        newThumbnail.addEventListener("mouseenter", HighlightThumbnail);
        newThumbnail.addEventListener("mouseleave", UnhighlightThumbnail);
        newThumbnail.addEventListener("click", ChangeSlides, true);
        if(i == 0) {
            newThumbnail.classList.add("current"); // the first thumbnail always starts as the current onw
        }

        // create an image
        const newImage = document.createElement("img"); // create a new img element
        newImage.src = galleries[galleryId].images[i];    // add the ref to the image based on the gallery's item
        newThumbnail.appendChild(newImage);    // append the img to the image slide div

        // append the image slide div to the imageGallery div's thumbnail grid
        document.getElementById(galleryId).getElementsByClassName("thumbnailGrid")[0].appendChild(newThumbnail);
    }
}

// Next/previous controls
function IncrementSlides(galleryId, n) {
    // get all of the slides into an array
    let thumbnails = document.getElementById(galleryId).getElementsByClassName("thumbnailGrid")[0].getElementsByClassName("thumbnail");
    
    // unhighlight the old thumbnail
    thumbnails[galleries[galleryId].index].classList.remove("current");

    // increment the index
    galleries[galleryId].index = ModulusFunction(galleries[galleryId].index + n, galleries[galleryId].images.length);

    //highlight the new thumbnail
    const newThumbnail = thumbnails[galleries[galleryId].index];
    newThumbnail.classList.add("current");
    
    // replace the current slide with the new image
    document.getElementById(galleryId).getElementsByClassName("imageSlide")[0].getElementsByTagName("img")[0].src = newThumbnail.getElementsByTagName("img")[0].src;
}

function HighlightThumbnail(event) {
    event.target.classList.add("hover");
}
function UnhighlightThumbnail(event) {
    event.target.classList.remove("hover");
}
function ChangeSlides(event) {
    //get the galleryId and thumbnail index from this thumbnail's id:
    const galleryId = event.currentTarget.id.substring(0, event.currentTarget.id.search("Thumbnail"));
    const thumbnailIndex = parseInt(event.currentTarget.id.substring(event.currentTarget.id.search("_") + 1));

    // get all of the slides into an array
    let thumbnails = document.getElementById(galleryId).getElementsByClassName("thumbnailGrid")[0].getElementsByClassName("thumbnail");
    // unhighlight the old thumbnail
    thumbnails[galleries[galleryId].index].classList.remove("current");
    // change to the index of the clicked thumbnail
    galleries[galleryId].index = thumbnailIndex;

    //highlight the new thumbnail
    const newThumbnail = thumbnails[thumbnailIndex];
    newThumbnail.classList.add("current");
    
    // replace the current slide with the new image
    document.getElementById(galleryId).getElementsByClassName("imageSlide")[0].getElementsByTagName("img")[0].src = newThumbnail.getElementsByTagName("img")[0].src;
}

function ModulusFunction (num1, num2)
{
    return (num1 % num2 + num2) % num2;
}
