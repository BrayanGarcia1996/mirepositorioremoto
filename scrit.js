var images = [
    'https://images.unsplash.com/photo-1676525413920-09c013d8c03f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlbmVzJTIwZGUlMjBhbmltYWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1655833152785-5a31c0957301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGltYWdlbmVzJTIwZGUlMjBhbmltYWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1627092956631-282690fd3752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VuZXMlMjBkZSUyMGFuaW1hbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1574755210066-09eb3d62e0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VuZXMlMjBkZSUyMGFuaW1hbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
];

let currentImageIndex = 0;
        
        const imgElements = document.getElementsByClassName("img");
        const previousButton = document.getElementById("previousButton");
        const nextButton = document.getElementById("nextButton");
        const toggleButton = document.getElementById("toggleButton");
        const imageSlider = document.querySelector(".image-slider");
        const galleryContainer = document.querySelector(".gallery-container");

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        }
        
        function showPreviousImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;}