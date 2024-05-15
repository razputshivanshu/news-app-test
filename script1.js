document.getElementById("submitBtn").addEventListener("click", function() {
  var newsInput = document.getElementById("newsInput").value;
  
  // Here you can add code to process the news input, such as sending it to a backend for analysis
  
  // For now, let's just log the input to the console
  console.log(newsInput);
});


function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Your other JavaScript functions go here


