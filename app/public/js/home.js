for (let i in files) {
  var title = files[i];
  var elmt_li = document.createElement("li");
  elmt_li.id = "titleDetail";
  var idTitle = document.getElementById("titleList");
  idTitle.appendChild(elmt_li);
  var elmt_a = document.createElement("a");
  elmt_a.href = title;
  elmt_li.appendChild(elmt_a);
  var elmtImg = document.createElement("img");
  elmtImg.src = "/pictures/" + title + ".jpg";
  elmt_a.appendChild(elmtImg);
}
