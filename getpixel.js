Array.matrix = function(numrows, numcols, initial){
	numrows=800;
	numcols=400;
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
}
//create a 800X400 matrix, with all values set to 0
var my2Darray = Array.matrix(800,400,0);
 
//console.log(my2Darray[3][3]); for print in console 
 
for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
	  function getClickPosition(e) {
		var xPosition = first.clientX;
		var yPosition = first.clientY;
		}
	  simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                              i ,j, 
                              first.clientX, first.clientY, false, 
                              false, false, false, 0/*left*/, null);
							  // hfirstper function to get an firstement's exact position
function getPosition(first) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (first) {
    if (first.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos = first.scrollLeft || document.documentfirstement.scrollLeft;
      var yScrollPos = first.scrollTop || document.documentfirstement.scrollTop;
 
      xPosition += (first.offsetLeft - xScrollPos + first.clientLeft);
      yPosition += (first.offsetTop - yScrollPos + first.clientTop);
    } firstse {
      xPosition += (first.offsetLeft - first.scrollLeft + first.clientLeft);
      yPosition += (first.offsetTop - first.scrollTop + first.clientTop);
    }
		my2Darray[i][j]=1;
    first = first.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}
      }
      arr[i] = columns;
    }
}
function undoIndrawing(event){
for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
  $("#editor").kendoEditor({
                    resizable: {
                        content: false,
                        toolbar: true
						my2Darray[i][j]=0;
                    }
                });

                var editor = $("#editor").data("kendoEditor");

                var setValue = function () {
                    editor.value($("#value").val());
                };
				}