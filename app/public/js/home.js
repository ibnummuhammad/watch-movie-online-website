for (let i in files) {
  var title = files[i];
  var elmt_li = document.createElement("li");
  elmt_li.id = "titleDetail";
  var idTitle = document.getElementById("titleList");
  idTitle.appendChild(elmt_li);
  var elmt_a = document.createElement("a");
  elmt_a.href = title;
  elmt_li.appendChild(elmt_a);
  var elmtFig = document.createElement("figure");
  elmt_a.appendChild(elmtFig);
  var elmtImg = document.createElement("img");
  elmtImg.alt = title;
  elmtImg.src = "/pictures/" + title + ".jpg";
  elmtImg.width = "200";
  elmtFig.appendChild(elmtImg);
}
