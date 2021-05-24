var student_all;
$(document).ready(function() {
    // $('#ajax-form button[type="submit"]').click((event) => {
    //   event.preventDefault()
    //   $.get('/step5', {
    //     fname: $('#ajax-form input[name=fname]').val(),
    //     lname: $('#ajax-form input[name=lname]').val(),
    //   }, (data) => {
    //     $('#ajax-output').html(data);
    //   })
    // })
    $('#list button[type="submit"]').click((event) => {
        event.preventDefault()
        $.get('/list_all',(data)=>{
            $('#list-output').html('');
            student_all = data;
            for(i=0;i<Object.keys(student_all).length;i++){
                $('#list-output').append(`"${Object.keys(student_all)[i]}":"${student_all[Object.keys(student_all)[i]]}"<br>`);
            }
            
        })
        // $.get('/list_all', {
        //   fname: $('#ajax-form input[name=fname]').val(),
        //   lname: $('#ajax-form input[name=lname]').val(),
        // }, (data) => {
        //   $('#ajax-output').html(data);
        // })
    })
    $('#search button[type="submit"]').click((event) => {
        event.preventDefault()
        $.get('/search_name',{
            ID: $('#search input[name=ID]').val()
        },(data)=>{
            $('#name-output').html(data);
        })
    })
    $('#add button[type="submit"]').click((event) => {
        event.preventDefault()
        $.get('/add_student',{
            ID:   $('#add input[name=ID]').val(),
            name: $('#add input[name=sname]').val(),
        },(data)=>{
            $('#add-output').html(data);
        })
    })
});