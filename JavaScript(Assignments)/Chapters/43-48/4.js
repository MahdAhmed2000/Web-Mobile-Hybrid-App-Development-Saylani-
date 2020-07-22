function shift() {
  var image1 = document.getElementById("new-img");
  if(image1.src === "file:///C:/Users/Fatima/Desktop/JavaScript(Assignments)/Chapters/43-48/images/1.webp"){
    image1.src = "file:///C:/Users/Fatima/Desktop/JavaScript(Assignments)/Chapters/43-48/images/2.png";
  }
  else {
    image1.src = "file:///C:/Users/Fatima/Desktop/JavaScript(Assignments)/Chapters/43-48/images/1.webp";
  }
}