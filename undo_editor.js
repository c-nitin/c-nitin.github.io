
function Tii(Ins[p1,c1], Ins[p2, c2]) {
      if p1 < p2  or (p1 = p2 and u1 > u2) // breaking insert-tie using user identifiers (u1, u2)
            return Ins[p1, c1];  // e.g. Tii(Ins[3, “a”], Ins[4, “b”]) = Ins[3, “a”]
      else return Ins[p1+1, c1]; } // Tii(Ins[3, “a”], Ins[1, “b”]) = Ins[4, “a”]
 
Tid(Ins[p1,c1], Del[p2]) {          
      if p1 <= p2 return Ins[p1, c1]; // e.g. Tid(Ins[3, “a”], Del[4]) = Ins[3, “a”]
     else return Ins[p1-1, c1]; } // Tid(Ins[3, “a”], Del[1] ) = Ins[2, “a”]
 
Tdi(Del[p1], Ins[p2, c2]) {
      if p1 < p2 return Del[p1];  // e.g.  Tdi(Del[3], Ins[4, “b”]) = Del[3]
      else return Del[p1+1]; } // Tdi(Del[3], Ins[1, “b”]) = Del[4]
 
Tdd(Del[p1], Del[p2]) {
      if p1 < p2 return Del[p1]; // e.g.   Tdd(Del[3], Del[4]) = Del[3]
      else if p1 > p2 return Del[p1-1]; // Tdd(Del[3], Del[1]) = Del[2]
      else return I; } // breaking delete-tie using I (identity op)  Tdd(Del[3]. Del[3]) = I


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
