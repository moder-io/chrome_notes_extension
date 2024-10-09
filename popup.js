document.addEventListener('DOMContentLoaded', function() {
  var notepad = document.getElementById('notepad');
  var saveBtn = document.getElementById('saveBtn');

  chrome.storage.sync.get('notes', function(data) {
    if (data.notes) {
      notepad.value = data.notes;
    }
  });

  saveBtn.addEventListener('click', function() {
    var notes = notepad.value;
    chrome.storage.sync.set({notes: notes}, function() {
      console.log('Notas guardadas');
    });
  });
});
