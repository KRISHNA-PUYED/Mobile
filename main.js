function toggle(el, index) {
 
  var cdEd = document.querySelectorAll(".con");
  if (document.querySelectorAll(".active").length !== 1) {
    el.classList.contains("active")
      ? el.classList.remove("active")
      : el.classList.add("active");
    cdEd[index].style.display == "none"
      ? (cdEd[index].style.display = "flex")
      : (cdEd[index].style.display = "none");
    triggerResize();
  } else {
    !el.classList.contains("active") ? el.classList.add("active") : null;
    cdEd[index].style.display = "flex";
    triggerResize();
  }


}
//function repl

function triggerResize() {
  var resizeEvent = window.document.createEvent("UIEvents");
  resizeEvent.initUIEvent("resize", true, false, window, 0);
  window.dispatchEvent(resizeEvent);
}
var codeEditor = document.querySelectorAll(".editor");
window.addEventListener("DOMContentLoaded", event => {
  document.querySelectorAll(".con")[1].style.display = "none";
  document.querySelectorAll(".con")[2].style.display = "none";
  window.innerWidth <= 1016 ? navToggle() : null;

  codeEditor.forEach.call(codeEditor, function(editor, index) {
    makeEditor(editor, ["html", "css", "javascript"][index]);
  });
  triggerResize();
  updateiFrame();

 
});
window.addEventListener("resize", event => {
  window.innerWidth > 1016 ? navToggle(true) : null;
  updateiFrame();
});

var ariahidden = document.querySelectorAll(".ariahidden");

for (let i = 0; i < ariahidden.length; i++) {
  var fragment = document.createDocumentFragment();
  for (let j = 0; j < 20; j++) {
    ariahidden[i].innerHTML += "<i aria-hidden=true></i>";
  }
  while (ariahidden[i].firstChild) {
    fragment.appendChild(ariahidden[i].firstChild);
  }

  ariahidden[i].parentNode.replaceChild(fragment, ariahidden[i]);
}

let nav_display = false;

function navToggle(val) {
  var navitems = document.querySelectorAll(".navitem");
  for (let i = 0; i < navitems.length; i++) {
    nav_display || val
      ? (navitems[i].style.display = "block")
      : (navitems[i].style.display = "none");
  }
  nav_display = !nav_display;
}

let editorTheme, themeBg;
const changeTheme = () => {
  // var darkThemes = [
  //"ambiance",
  // "dracula",
  // "terminal",
  // "twilight",
  // "cobalt",
  // "gruvbox",
  // "merbivore_soft",
  // "mono_industrial",
  // "monokai",
  // "tomorrow_night_bright"
  // ];

  var themes = ["monokai", "crimson_editor"];
  editorTheme == "crimson_editor"
    ? ((editorTheme = "monokai"), (themeBg = "#272822"))
    : ((editorTheme = "crimson_editor"), (themeBg = "#FFFFFF"));
  // var randomDarkTheme =
  // darkThemes[Math.floor(Math.random() * darkThemes.length)];
  // document.querySelector("#chTheme").innerHTML = randomDarkTheme;
  for (var t = 0; t < aceEditor.length; t++) {
    aceEditor[t].setTheme(`ace/theme/${editorTheme}`);
    document.querySelectorAll(".editor")[t].style.background = themeBg;
  }
};
var aceEditor = [],
  x = 0;
const makeEditor = (editor, editorMode) => {
  let editorContent = editor.innerHTML;
  aceEditor[x] = ace.edit(editor);
  aceEditor[x].setFontSize("16px");
  aceEditor[x].setTheme("ace/theme/monokai");
  aceEditor[x].session.setMode({
    path: `ace/mode/${editorMode}`
  });
  aceEditor[x].setShowPrintMargin(false);
  aceEditor[x].session.setUseWrapMode(true);
  aceEditor[x].session.setValue(editorContent);
  for (let y = 0; y < aceEditor.length; y++) {
    aceEditor[y].session.on("change", function() {
      editorOnChange(aceEditor[y], y);
    });
  }
  x++;
 
};

const editorOnChange = (ed, index) => {
  updateiFrame(index);
  
};

const updateiFrame = index => {
  // aceEditor[index].focus();
  // aceEditor[index].navigateFileEnd();
  
  let htmlTextArea, cssTextArea, jsTextArea, iframeResult;
  let bigscreen = document.querySelector(".bigscreen");
  bigscreen.style.display !== "none"
    ? (htmlTextArea = aceEditor[0].getSession().getValue())
    : null;
  bigscreen.style.display !== "none"
    ? (cssTextArea = aceEditor[1].getSession().getValue())
    : (cssTextArea = aceEditor[4].getSession().getValue());
  bigscreen.style.display !== "none"
    ? (jsTextArea = aceEditor[2].getSession().getValue())
    : (jsTextArea = aceEditor[5].getSession().getValue());
  bigscreen.style.display !== "none"
    ? (iframeResult = document.querySelectorAll(".output")[0])
    : (iframeResult = document.querySelectorAll(".output")[1]);
   
  const iframeDoc =
    iframeResult.contentDocument || iframeResult.contentWindow.document;
  const iframeHead = iframeDoc.head;
  const iframeBody = iframeDoc.body;

  iframeHead.innerHTML = "\n<style>\n" + cssTextArea + "\n</style>\n";
  iframeBody.innerHTML = "\n" + htmlTextArea + "\n";
  const script = iframeDoc.createElement("script");
  script.innerHTML = "\n" + jsTextArea + "\n";
  iframeBody.appendChild(script);
};

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  }
  /* Set the width of the side navigation to 0 */
  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }

var gt= document.getElementById("time");

setInterval(function(){

gt.innerText=new Date().toLocaleTimeString();

})

date=new Date();  
    year=date.getFullYear();
    month=date.getMonth() + 1;
    day = date.getDate();
    document.getElementById("current_date").innerHTML=day + "/" + month + "/" + year;






var ifrResult=document.getElementById("ifrResult");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn8=document.getElementById("btn8");
var btn6=document.getElementById("btn6");
var btn7=document.getElementById("btn7");
var btn9=document.getElementById("btn9");
var btnj9=document.getElementById("btnj9");
var btn11c=document.getElementById("btn11c");
var btn12c=document.getElementById("btn12c");
var btn13cpp=document.getElementById("btn13cpp");
var btnsql1=document.getElementById("btnsql1");
var btnsql2=document.getElementById("btnsql2");

var btnhn1=document.getElementById("btnhn1");
var btnjn1=document.getElementById("btnjn1");
var btncn1=document.getElementById("btncn1");
var btncppn1=document.getElementById("btncppn1");


var btnand1=document.getElementById("btnand1");
var btnwp1=document.getElementById("btnwp1");
var btnpy1=document.getElementById("btnpy1");
var btn1quiz=document.getElementById("btn1quiz");



btn1.addEventListener("click",HTML)
btn2.addEventListener("click",Online_Compiler)
btn5.addEventListener("click",CPP_compiler)
btn6.addEventListener("click",JAVA_compiler)
btn7.addEventListener("click",C_Programs)
btn8.addEventListener("click",CPP_Programs)
btnsql1.addEventListener("click",DBMS_Programs)
btnsql2.addEventListener("click",RDBMS_Programs)
btnand1.addEventListener("click",Android_Programs)
btnwp1.addEventListener("click",WindowsPrograming_Programs)
btnpy1.addEventListener("click",Python_Programs)
btnj9.addEventListener("click",Java_Programs)

btnhn1.addEventListener("click",Html_Notes)
btnjn1.addEventListener("click",JS_Notes)
btncn1.addEventListener("click",C_Notes)
btncppn1.addEventListener("click",CPP_Notes)

btn1quiz.addEventListener("click",HTMLQUIZ)
btn9.addEventListener("click",HTML_Programs)
btn11c.addEventListener("click",Lession_1_C)
btn12c.addEventListener("click",Lession_2_C)
btn13cpp.addEventListener("click",Lession_1_CPP)
function HTML()
{
ifrResult.src="https://www.javatpoint.com/what-is-html"
}
function Lession_1_C()
{
ifrResult.src="Data/From Zero to Hero_ Beginner's Guide to C Programming 🔥.mp4"
}
function Lession_2_C()
{
ifrResult.src="Data/2.Demystifying Compilers_ Understanding How They Transform Code _ By Vikas Singh Sir _@codingseekho.mp4"
}
function Lession_1_CPP()
{
ifrResult.src="Data/Intro1.mp4"
}
function Online_Compiler()
{
ifrResult.src="https://www.online-cpp.com/online_c_compiler"
}
function CPP_compiler()
{
ifrResult.src="https://www.online-cpp.com/"
}
function JAVA_compiler()
{
ifrResult.src="https://www.online-java.com/online_java_compiler"
}
function HTMLQUIZ()
{
ifrResult.src="Data/quiz.html"
}

function Html_Notes()
{
ifrResult.src="Data/HTML_Notes.pdf"
}

function JS_Notes()
{
ifrResult.src="Data/JS_Notes.pdf"
}

function C_Notes()
{
ifrResult.src="Data/C_Notes.pdf"
}
function CPP_Notes()
{
ifrResult.src="Data/CPP_Notes.pdf"
}



function C_Programs()
{
ifrResult.src="Data/AllCPrograms.pdf"
}
function CPP_Programs()
{
ifrResult.src="Data/AllCPPPrograms.pdf"
}
function DBMS_Programs()
{
ifrResult.src="Data/sqlprogram.txt"
}
function RDBMS_Programs()
{
ifrResult.src="Data/RDBMSPrograms.txt"
}
function Android_Programs()
{
ifrResult.src="Data/AndroidKrish.pdf"
}
function WindowsPrograming_Programs()
{
ifrResult.src="Data/WP.txt"
}
function Python_Programs()
{
ifrResult.src="Data/PythonPrograms.txt"
}
function Java_Programs()
{
ifrResult.src="Data/String_question_Answer (2).pdf"
}
function HTML_Programs()
{
ifrResult.src="Data/HTML_PDF.pdf"
}





   
    

  
    




