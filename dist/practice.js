$(document).ready(function() {
    $('#ajax-form button[type="submit"]').click((event) => {
      event.preventDefault()
      $.get('/step5', {
        fname: $('#ajax-form input[name=fname]').val(),
        lname: $('#ajax-form input[name=lname]').val(),
      }, (data) => {
        $('#ajax-output').html(data);
      })
    })
  });