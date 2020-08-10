var questions_array = [{question: "What is the full form of AI?", answer: "Artificial Intelligence", options: ["Artificial Intelligence", "Assimilative Intelligence", "Articulative Intelligence", "Annihilative Intelligence"]}, {question: "Who is considered as the father of Artificial Intelligence", answer: "Alan Turing", options: ["Charles Babbage", "Carl Sagan", "Albert Einstein", "Alan Turing"]}, {question: "What is the full form of CPU?", answer: "Central Processing Unit", options: ["Centrally Processed Unit", "Censored Processing Unit", "Central Processor Unit", "Central Processing Unit"]}, {question: "Who invented boolean algebra?", answer: "Sir George Boole", options: ["Sir Robert Boole", "Sir George Boole", "Sir Melvin Boole", "Sir Alvin Boole"]}, {question: "The full form of RAM is?", answer: "Random Access Memory", options: ["Read And Monitor", "Read And Memory", "Read At Memory", "Random Access Memory"]}];
var q = "Question No. 0";
var marks = 0;
var q_count = 0;
var options_list;
var last;
var last_prev;
var msec = 0;
nextQuestion();
add();


function nextQuestion(){
  msec = 0;
  evaluate();
  removeall();
  if(q_count >= questions_array.length){
    showresult();
  }
  else {
    last_prev = q.charAt(q.length - 1);
    last = last_prev;
    last = parseInt(last);
    last++;
    last = last.toString();
    q = q.replace(last_prev, last);
    document.getElementById("display-41").innerHTML = q;
    document.getElementById("qtexture1").innerHTML = questions_array[q_count].question;
    options_list = document.getElementsByClassName("texture");
    for(var i = 0; i < options_list.length; i++){
      options_list[i].innerHTML = questions_array[q_count].options[i];
    }
    q_count++;
  }
}
function select(e){
  e.classList.add("clicked");
  remove(e.id);
}
function remove(a){
  var list_new = document.getElementsByClassName("texture");
  for(var i = 0; i < list_new.length; i++){
    if(list_new[i].id !== a){
      if(list_new[i].classList.contains("clicked")){
        list_new[i].classList.remove("clicked");
      }
    }
  }
}
function removeall(){
  var list_new_new = document.getElementsByClassName("texture");
  for(var i = 0; i < list_new_new.length; i++){
    if(list_new_new[i].classList.contains("clicked")){
      list_new_new[i].classList.remove("clicked");
    }
  }
}
function evaluate(){
  var list_new_new = document.getElementsByClassName("texture");
  for(var i = 0; i < list_new_new.length; i++){
    if(list_new_new[i].classList.contains("clicked")){
      if(list_new_new[i].innerHTML === (questions_array[q_count - 1].answer)){
        marks += 1;
      }
    }
  }
}
function showresult(){
  document.getElementById("btoon").disabled = true;
  marks = (marks / (questions_array.length));
  marks *= 100;
  alert("Your received " + marks + " % marks ");
  clearhtml();
}
function clearhtml(){
  document.body.innerHTML = " ";
}
function start(){
  msec++;
  document.getElementById("one33").innerHTML = msec;
  if(msec === 30){
    msec = 0;
    nextQuestion();
  }
}
function add(){
  interval = setInterval(start, 500);
}