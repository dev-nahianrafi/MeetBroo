$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        // autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


/* Nice select
******************************************/ 
     $('.contact-select').niceSelect();

/*  AOS
******************************************/ 
AOS.init({
    once: true,
    duration: 700,
    disable: function() {
        // Disable AOS if the screen width is less than or equal to 768px (mobile screens)
        return window.innerWidth <= 768;
    }

});

/* Work and value section
*******************************************/ 
     
$('.work-and-value-item').click(function() {
// Remove 'active' class from all text items
$('.work-and-value-item').removeClass('active');
// Add 'active' class to the clicked text item
$(this).addClass('active');
// Change the image
var newImage = $(this).data('image');
$('#main-image').attr('src', newImage);
});



/* Sign in page 
 *******************************************/ 

$(".forgot-password").on("click", function(){
    $(".reset-popup-wrea").fadeIn();
    $(".sign-in-body-wrapper-overlay").fadeIn();
})

$(".sign-in-body-wrapper-overlay").on("click", function(){
    $(this).fadeOut();
    $(".reset-popup-wrea").fadeOut();
})



/* header sticky
 *******************************************/ 

$(window).on("scroll", function(){
    if($(this).scrollTop() > 50){
        $(".header").addClass("header-sticky");
        // $(".header").slidedown();
    }else{
        $(".header").removeClass("header-sticky");
    }
})
    
/* Mobiel menu
 *******************************************/ 
$(".open-btn").on("click", function() {

    // Toggle the class for the menu
    $(".menu-right-wrapper").toggleClass("open");
    // Toggle between 'fa-bars' and 'fa-xmark'
    $("svg", this).toggleClass("fa-bars fa-xmark");
});



$(".open-btn").click(function(){
    $(".body-overlay").toggleClass("open");
})
$(".body-overlay").click(function(){
    $(this).removeClass("open")
    $(".menu-right-wrapper").toggleClass("open");
})

})


/* Custome input type file design
 *******************************************/ 

const fileInput = document.getElementById('logo-upload');
const fileNameDisplay = document.getElementById('file-name');
const uploadButton = document.querySelector('.upload-btn');

uploadButton?.addEventListener('click', () => {
    fileInput.click(); // Open the file dialog when the button is clicked
});

fileInput?.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name; // Show the selected file name
    } else {
        fileNameDisplay.textContent = 'No file chosen';
    }
});

/* Custome input type colro design
 *******************************************/ 
const colorPicker = document.getElementById('color-picker');
const colorCodeInput = document.getElementById('color-code');

// Set the color code input to the default value of the color picker
if(colorPicker && colorCodeInput){
    colorCodeInput.value = colorPicker.value;
    
    colorPicker.addEventListener('input', () => {
        colorCodeInput.value = colorPicker.value; // Update the color code when the user selects a new color
    });
}












































// =================================== Nahian Js Start Hare ==================================================



$(document).ready(function() {
    $('.nterview--video--creatred--time--select select').niceSelect();
  });

document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#datepicker", {
      dateFormat: "Y-m-d",  // Set the date format
      inline: true,         // Inline calendar display
      allowInput: true,     // Allow typing in the input field
  
      // Redirect on date selection with 2-second delay
      onChange: function(selectedDates, dateStr, instance) {
        if (dateStr) {  // Check if a date is selected
          setTimeout(function() {
            // Redirect to the new page after 2 seconds
            window.location.href = `InterViewScedualSuccess.html`
          }, 1000); 
        }
      }
    });


  });
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.nr--inter--view--play--wrapper');
    const video = document.getElementById('nrVideo');
  
    // Toggle between playing and pausing the video
    playButton?.addEventListener('click', function() {
      if (video.paused) {
        video.play(); // Play the video if it's paused
        playButton.style.opacity = '0'; // Hide the play button
      } else {
        video.pause(); // Pause the video if it's playing
      }
    });
  
    // Show the play button again when the video is paused
    video?.addEventListener('pause', function() {
      playButton.style.opacity = '1'; // Show the play button
    });
  
    // Hide the play button when the video is playing
    video?.addEventListener('play', function() {
      playButton.style.opacity = '0'; // Hide the play button
    });
  });
  
  
  
  function videoShower(){
  
  
  // Select the 'next' button
  const nextBtn = document.querySelector('.nr--next--btn');
  // Select the main video player
  const videoPlay = document.querySelector('.video--player');
  // Select all video answer items
  const videoAns = document.querySelectorAll('.inter--view--section--content--video--item');
  // Select the pagination counter
  const pegisnationcount = document.querySelector('.pegisnation');
  // Select all video containers
  const videoContainers = document.querySelectorAll('.nr--inter--view--right--video--content--item');
  
  // Extract video thumbnails from containers
  const videoWant = Array.from(videoContainers).map(container => container.querySelector('.the--video--wantToshow'));
  
  // Initialize the current index
  let currentIndex = 0;
  
  
  
  // Function to add or remove the 'indicator' class based on active state
  function updateIndicators() {
      videoWant.forEach((thumbnail, index) => {
          if (index === currentIndex) {
              thumbnail.classList.add('indicator'); // Add the class to the active thumbnail
          } else {
              thumbnail.classList.remove('indicator'); // Remove the class from inactive thumbnails
          }
      });
  }
  
  
  
  // Adjust lengths
  function synchronizeLengths() {
      const minLength = Math.min(videoAns.length, videoWant.length);
  
      // Trim videoAns if longer than videoWant
      if (videoAns.length > minLength) {
          videoAns.forEach((ans, index) => {
              if (index >= minLength) {
                  ans.style.display = 'none'; // Hide extra items
              } else {
                  ans.style.display = ''; // Ensure visible
              }
          });
      }
  
      // Trim videoWant if longer than videoAns
      if (videoWant.length > minLength) {
          videoWant.forEach((thumbnail, index) => {
              if (index >= minLength) {
                  thumbnail.parentElement.style.display = 'none'; // Hide parent container if excess items
              } else {
                  thumbnail.parentElement.style.display = ''; // Ensure visible
              }
          });
      }
      
      return minLength;
  }
  
  // Function to update the main video, visibility of content items, and pagination
  function updateContent() {
      const totalItems = synchronizeLengths(); // Ensure synchronized lengths
  
      // Remove 'active' class from all video answer items
      videoAns.forEach(ans => ans.classList.remove('active'));
  
      // Add 'active' class to the current video answer item
      if (videoAns[currentIndex]) {
          videoAns[currentIndex].classList.add('active');
      }
  
      // Update pagination
      if(pegisnationcount){
          pegisnationcount.innerHTML = `${currentIndex + 1}/${totalItems}`;
      }
  
      // Update 'next' button text
      if(nextBtn){
          if (currentIndex === totalItems - 1) {
              nextBtn.textContent = 'Submit';
          } else {
              nextBtn.textContent = 'Next';
          }
      }
  
      // Update indicators
      updateIndicators();
  }
  
  // Function to handle video thumbnail clicks
  function videoChanger() {
      videoWant.forEach((thumbnail, index) => {
          thumbnail.addEventListener('click', () => {
              // Update the main video source based on the clicked thumbnail
              videoPlay.src = thumbnail.src;
              // Update currentIndex to the clicked thumbnail's index
              currentIndex = index;
              // Update content and pagination to reflect the new index
              updateContent();
          });
      });
  }
  
  // Event listener for the 'next' button
  nextBtn?.addEventListener('click', () => {
  
      const totalItems = synchronizeLengths();
      if (currentIndex === totalItems - 1) {
          // Handle form submission or other actions on the last item
          
          // Delay redirection to ensure that the page content updates
          setTimeout(() => {
              window.location.href = 'interviewHavedoned.html'; // Replace with your URL
          }, 100); // Adjust delay as necessary
      } else {
          // Increment the current index and wrap around if necessary
          currentIndex = (currentIndex + 1) % totalItems;
  
          // Update the main video source based on the new index
          videoPlay.src = videoWant[currentIndex].src;
  
          // Update the content and pagination counter
          updateContent();
      }
  });
  
  // Initial setup
  updateContent();
  videoChanger();
  
  
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const videoInput = document.getElementById('videoInput');
    const videoPreview = document.getElementById('videoPreview');
    const videoContent = document.querySelector('.inter--view--section--content--video--content');
    const videoPreviewer = document.querySelector('.inter--view--section--content--video--previewer');
  
    // Show file input when the video content is clicked
    videoContent.addEventListener('click', () => {
        videoInput.click();
    });
  
    // Handle file input change event
    videoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            videoPreview.src = fileURL;
            videoPreview.style.display = 'block'; // Show video preview
            videoPreviewer.style.display = 'block'; // Ensure the previewer is visible
            videoContent.style.display = 'none'; // Hide the content
        }
    });
  
    // Optional: Handle drag and drop functionality
    videoPreviewer.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
  
    videoPreviewer.addEventListener('drop', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            videoPreview.src = fileURL;
            videoPreview.style.display = 'block'; // Show video preview
            videoPreviewer.style.display = 'block'; // Ensure the previewer is visible
            videoContent.style.display = 'none'; // Hide the content
        }
    });
  });
  
  
  }
  
  videoShower()







// Select elements
const dropArea = document.getElementById("dropArea");
const videoPreview = document.getElementById("videoPreviewTwo");
const imagePreview = document.getElementById("imagePreviewTwo");
const mediaInput = document.getElementById("mediaInput");
const dropContent = document.getElementById("dropContent");

// Prevent default behaviors for drag and drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Add highlighting on drag over
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.classList.add('highlight');
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.classList.remove('highlight');
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}

// Handle file input selection
mediaInput.addEventListener('change', (e) => {
  const files = e.target.files;
  handleFiles(files);
});

// Handle selected files
function handleFiles(files) {
  const file = files[0];
  const fileType = file.type;

  if (fileType.startsWith('video/')) {
    previewVideo(file);
  } else if (fileType.startsWith('image/')) {
    previewImage(file);
  }
}

// Preview video
function previewVideo(file) {
  videoPreview.style.display = "block";
  imagePreview.style.display = "none";
  dropContent.style.display = "none"; // Hide drop content after selection

  const fileURL = URL.createObjectURL(file);
  videoPreview.src = fileURL;
  videoPreview.load();
}

// Preview image
function previewImage(file) {
  videoPreview.style.display = "none";
  imagePreview.style.display = "block";
  dropContent.style.display = "none"; // Hide drop content after selection

  const fileURL = URL.createObjectURL(file);
  imagePreview.src = fileURL;
}

// Click to trigger file input
dropContent.addEventListener('click', () => {
  mediaInput.click();
});

  // =================================== Nahian Js End Hare ==================================================
