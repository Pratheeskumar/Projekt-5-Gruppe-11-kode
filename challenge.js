// Challenge side tab-skift 
var tabButtons=document.querySelectorAll(".valgboks .klikbokser button") 
var tabPanels=document.querySelectorAll(".valgboks .panel") 

function showPanel (panelIndex,colorCode) {
  tabButtons.forEach (function(node){
    node.style.backgroundColor="";
    node.style.color="";
  });

  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color= "white"; 

  tabPanels.forEach(function(node){
    node.style.display="none";
  });

  tabPanels[panelIndex].style.display= "block"; 
  tabPanels[panelIndex].style.backgroundColor= colorCode; 
}
showPanel(0,'#D36D75')

