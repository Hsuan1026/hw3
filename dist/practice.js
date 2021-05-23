$.get('./step5', {
    fname: $('#ajax-form input[name=fname]').val(),
    lname: $('#ajax-form input[name=lname]').val(),
  },(data)=>{
    console.log(data);
  })