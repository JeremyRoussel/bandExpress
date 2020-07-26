$(function() {
    $.getJSON('api', updateFeedback);
  
    $('.forum-form').submit(function(e) {
      e.preventDefault();
      $.post('api', {
        name: $('#feedback-form-name').val(),
        title: $('#feedback-form-title').val(),
        message: $('#feedback-form-message').val()
      }, updateFeedback);
    });
  
    $('.feedback-messages').on('click', function(e) {
        if (e.target.className == 'feedback-delete') {
          console.log('Button Press');
          console.log(e.target.id);
          $.ajax({
            url: 'api/' + e.target.id,
            method: 'DELETE',
            success: updateFeedback
          }); //ajax
        } // the target is a delete button
    }); //feedback messages
  
    function updateFeedback(data) {
     var output = '';
     $.each(data,function(key, item) {
       output += '<div class="feedback-item item-list media-list">';
       output += '  <div class="forum-item media">';
       output += '      <div class="media-left">';
       output += '          <button class="feedback-delete" id="' + key + '"><img src="../images/icons8-delete-trash-24.png"></span></button>';
       output += '      </div>';
       output += '      <div class="feedback-info media-body">';
       output += '          <div class="feedback-head">';
       output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
       output += '          </div>';
       output += '          <div class="feedback-message">' + item.message + '</div>';
       output += '      </div>';
       output += '  </div>';
       output += '</div>';
     });
     $('.feedback-messages').html(output);
    }
  
  });
  