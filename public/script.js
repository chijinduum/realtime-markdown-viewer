window.onload = function() {
  var converter = new showdown.Converter();
  var pad = document.getElementById('pad');
  var markdownArea = document.getElementById('markdown');



  // make the tab act like a tab
  pad.addEventListener('keydown',function(e) {
      if(e.keyCode === 9) { // tab was pressed
          // get caret position/selection
          var start = this.selectionStart;
          var end = this.selectionEnd;

          var target = e.target;
          var value = target.value;

          // set textarea value to: text before caret + tab + text after caret
          target.value = value.substring(0, start)
                          + "\t"
                          + value.substring(end);

          // put caret at right position again (add one for the tab)
          this.selectionStart = this.selectionEnd = start + 1;

          // prevent the focus lose
          e.preventDefault();
      }
  });

  var previousMarkdownValue;

//converting textarea to markdown
  var convertTextAreaToMarkdown = function(){
    var markdownText = pad.value;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  var didChangeOccur = function(){
    if(previousMarkdownValue != pad.value){
      return true;
    }
    return false;
  };

//checking every second for changes to the text area
  setInterval(function(){
    if(didChangeOccur()){
      convertTextAreaToMarkdown();
    }
  }, 1000);
//converting textarea to input
  pad.addEventListener('input', convertTextAreaToMarkdown);

//ignore if its on the homepage
if(docment.loaction.pathname.length > 1){
  //implement shareJS
  var documentName = document.location.pathname.substring(1);
  sharejs.open(document.location.pathname, 'text', function(error, doc){
    doc.attah_textarea(pad);
    convertTextAreaToMarkdown();
  });
}


convertTextAreaToMarkdown();


};
