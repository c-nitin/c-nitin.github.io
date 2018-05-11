function newAction(x,y,w,h) {
  var rect = new Rectangle(x,y,w,h);
  stack.push(rect);
  
  //If the user "undos" an action, we POP off the undo stack,
  //do the operation, then we PUSH an action onto the stack.
  
  undo.push({
   perform: function() {
	   
     stack.push(rect);
   },
   
   
   revert: function() {
     stack.remove(rect);
   }
   
  });
}

function newAction(x,y,w,h) {
  var rect = new Rectangle(x,y,w,h);
  
  stack.push(rect);
  
  undo.pushAction('newAction', [x,y,w,h]);
}

undo.registerScript('newAction', {
	
  perform: function(data) {
	  
    stack.push(data.x,data.y,data.w,data.h);
  },
  revert: function(data) {
   
    stack.remove(data.rectangle);
  }
});

function newAction(x,y,w,h) {  
  undo.exec('newAction', [x,y,w,h]);
}
