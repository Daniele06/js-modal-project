// Loads functions so you don't have to click buttons twice
window.onload = buttonForward, buttonBack;

// Filter buttons
document.getElementById("showAll").addEventListener("click", showAll);
document.getElementById("showTrees").addEventListener("click", showTrees);
document.getElementById("showSoil").addEventListener("click", showSoil);
document.getElementById("showFertiliser").addEventListener("click", showFertiliser);
document.getElementById("showTools").addEventListener("click", showTools);

// Search bar
document.getElementById("search-field").addEventListener("input", search);
document.getElementById("search-button").addEventListener("click", search);

// Close image button
document.getElementById("close-zoom").addEventListener("click", closeZoom);

// Arrows to navigate between images
document.getElementById("triangle-right").addEventListener("click", buttonForward);
document.getElementById("triangle-left").addEventListener("click", buttonBack);

// Open image viewer
document.querySelectorAll(".item-img").forEach(el => el.addEventListener('click', zoom));

// Filter buttons
function showAll() {
    document.querySelectorAll(".trees, .soil, .fertiliser, .tools").forEach(el => {
        el.style.display = "inline-block";
    });
}

// Show trees, hide the rest
function showTrees() {
    document.querySelectorAll(".soil, .fertiliser, .tools").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".trees").forEach(el => {
        el.style.display = "inline-block";
    });
};

// Show soil, hide the rest
function showSoil() {
    document.querySelectorAll(".trees, .fertiliser, .tools").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".soil").forEach(el => {
        el.style.display = "inline-block";
    });
};

// Show fertilisers, hide the rest
function showFertiliser() {
    document.querySelectorAll(".trees, .soil, .tools").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".fertiliser").forEach(el => {
        el.style.display = "inline-block";
    });
};

// Show tools, hide the rest
function showTools() {
    document.querySelectorAll(".trees, .soil, .fertiliser").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".tools").forEach(el => {
        el.style.display = "inline-block";
    });
};

// Search function
function search() {
    let input = document.getElementById("search-field").value
    input = input.toLowerCase();
    let x = document.querySelectorAll(".trees, .soil, .fertiliser, .tools");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "inline-block";
        }
    }
}

// Clicked item
function zoom() {
    document.getElementById("zoomed-item").style.visibility = "visible";
}

// Closed item
function closeZoom() {
    document.getElementById("zoomed-item").style.visibility = "hidden";
}

// Selecting store items
let images = document.querySelectorAll(".item-img");

// Creating a new array
let imageList = [];

// Push the images source in the array
images.forEach(function (image) {
    imageList.push(image.src);
})

// Variable to navigate the array
let i = -1;

// Function for each class item - Changes background when clicking a store item
images.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let imageSource = e.target.src;
        document.getElementById("zoomed-item-img").style.backgroundImage = `url(${imageSource})`;
        i = imageList.indexOf(imageSource);
    });
});

// Function for the right arrow
function buttonForward() {
    if (i < (imageList.length - 1)) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById("zoomed-item-img").style.backgroundImage = "url" + "(" + imageList[i] + ")";
}

// Function of the left arrow
function buttonBack() {
    if (i >= 1) {
        i--;
    } else {
        i = (imageList.length - 1);
    }
    document.getElementById("zoomed-item-img").style.backgroundImage = "url" + "(" + imageList[i] + ")";
}

// Coded by Daniele L. 16/4/21