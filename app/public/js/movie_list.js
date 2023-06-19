for (let i in files) {
  var chapter = files[i].replace("." + video_type, "");
  var elmt_li = document.createElement("li");
  elmt_li.id = "titleDetail";
  var idChapter = document.getElementById("chapter");
  idChapter.appendChild(elmt_li);
  var elmt_a = document.createElement("a");
  elmt_a.href = title + "/" + chapter;
  elmt_li.appendChild(elmt_a);
  var nodeText = document.createTextNode(chapter);
  elmt_a.appendChild(nodeText);
}
