function text_adjust(o) {
  var my=document.getElementsByClassName('chatBox_content')[0]
  if(o.scrollHeight>'177'){
    console.log('inside');
    o.style.overflow='scroll'
  }else{
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
    console.log(o.style.height);
      my.style.bottom="9rem";
        my.style.bottom=(2.5+o.scrollHeight/10)+"rem";
    console.log(my.style.bottom);
  }
}
