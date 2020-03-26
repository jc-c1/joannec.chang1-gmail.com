console.log("Sanity Check: JS is working!");
var $evtsList;
var allEvts = [];
 
$(document).ready(function(){
 
 $evtsList = $('#evtTarget');
 $.ajax({
   method: 'GET',
   url: '/api/evts',
   success: handleSuccess,
   error: handleError
 });
 
 $('#newevtForm').on('submit', function(e) {
   e.preventDefault();
   $.ajax({
     method: 'POST',
     url: '/api/evts',
     data: $(this).serialize(),
     success: newEvtSuccess,
     error: newEvtError
   });
 });
 
/* // TODO: need to design form first 
  $('#newguestForm').on('submit', function(e) {
   e.preventDefault();
   $.ajax({
     method: 'POST',
     url: '/api/evts/:id',
     data: $(this).serialize(),
     success: newguestSuccess,
     error: newEvtError
   });
 });
*/
 $evtsList.on('click', '.deleteBtn', function() {
   console.log('clicked delete button to', '/api/evts/'+$(this).attr('data-id'));
   $.ajax({
     method: 'DELETE',
     url: '/api/evts/'+$(this).attr('data-id'),
     success: deleteEvtSuccess,
     error: deleteEvtError
   });
 });
 
});
// const names = [];
// function findguest(){
//   if(book.guest){
//     book.guest.forEach(function(c){
//       names.push(c.name);
//      })
//   }
// }
// let namesSTR = names.toString();
 
 
 
 
 
 
 
function getEvtHtml(evt) {
/* //TODO:  Guest List Show Function
 const names = [];
 if(evt.guest.length > 0){
   evt.guest.forEach(function(c){
     names.push(c.name);
    })
 }
 else{
   names[0] = "-";
 } 
let namesSTR = names.join(', ');
*/
 
 
 return `<hr>
   <p>
   <b>${evt.title}</b>
   <!-- just this next line is what needs to be changed! -->
   by ${evt.host.name}
 
    guest :
     <!--  ${namesSTR} -->
 
   </p>
       
   
   <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${evt._id}>Delete Event</button>
  
  
   `;
}
function getCreateEvtHTML () {
Return `
<form id="newguestForm">
        <input type="text" class="form-control" name="guestname">
        <button type="submit"  class="deleteBtn btn btn-success pull-right" >Add guest</button>
       </form>`
}
 
function getAllEvtsHtml(evts) {
 return evts.map(getEvtHtml).join("");
}
 
// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
 // empty existing posts from view
 $evtsList.empty();
 
 // pass `allBooks` into the template function
 var evtsHtml = getAllEvtsHtml(allEvts);
 
 // append html to the view
 $evtsList.append(evtsHtml);
};
 
function handleSuccess(json) {
 allEvts = json;
 render();
}
 
function handleError(e) {
 console.log('uh oh');
 $('#evtTarget').text('Failed to load evts, is the server working?');
}
 
function newEvtSuccess(json) {
 $('#newEvtForm input').val('');
 allEvts.push(json);
 render();
}
function newGuestSuccess(json) {
 $('#newGuestForm input').val('');
 allEvts.push(json);
 render();
}
 
function newEvtError() {
 console.log('newEvt error!');
}
 
function deleteEvtSuccess(json) {
 var evt = json;
 console.log(json);
 var evtId = evt._id;
 console.log('delete evt', evtId);
 // find the book with the correct ID and remove it from our allBooks array
 for(var index = 0; index < allEvts.length; index++) {
   if(allEvts[index]._id === evtId) {
     allEvts.splice(index, 1);
     break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
   }
 }
 render();
}
 
function deleteEvtError() {
 console.log('deleteEvterror!');
}
 


