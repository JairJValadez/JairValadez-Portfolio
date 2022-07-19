var ol = document.getElementById('ol');
const content = [{label: "Week 2", url:"js/teamActivityW02.html"}, {label: "Week 2 (personal solution)", url:"js/teamActivityw2.html"}, {label: "Week 3", url:"js/w03 activity/index.html"}, 
{label:"Week 4", url:"js/teamActivityW04.html"}, {label:"Week 5", url:"js/w05 activity/index.html"}, {label:"Challenge One: Todo", url:"js/Todo_challenge/index.html"}, 
{label: "Week 7", url:"js/w07 activity/index.html"}, {label: "Week 8", url:"js/w08 activity/index.html"}, {label: "Week 9", url:"js/w09 activity/index.html"},
{label: "Week 10", url:"js/w10 activity/index.html"}, {label: "Week 11", url:"js/w11 activity/index.html"}, {label: "Block 2 Challenge"}];
for (var i = 0; i < content.length; i++) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.setAttribute('href', content [i].url);
    link.setAttribute('target', "_blank")
    li.appendChild(link)
    var text = document.createTextNode(content [i].label);
    link.appendChild(text);
    ol.insertBefore(li, ol.childNodes[i]);
}
