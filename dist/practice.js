var student_all;
$(document).ready(function() {
    $('#list button[type="submit"]').click((event) => {
        event.preventDefault()
        $.get('/list_all',(data)=>{
            $('#list-output').html('');
            student_all = data;
            for(i=0;i<Object.keys(student_all).length;i++){
                $('#list-output').append(`"${Object.keys(student_all)[i]}":"${student_all[Object.keys(student_all)[i]]}"<br>`);
            }
            
        })
    })
    $('#search button[type="submit"]').click((event) => {
        event.preventDefault()
        $.get('/search_name',{
            ID1: $('#search input[name=ID1]').val(),
            ID2: $('#search input[name=ID2]').val(),
        },(data)=>{
            $('#name-output').html(data[0]);
            $('#name-output').append(`<br>${data[1]}`);
            // $('#name-output').html(data);
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
    $('#delete button[type="submit"]').click((event) => {
        event.preventDefault()
        $.get('/delete_student',{
            ID:   $('#delete input[name=ID]').val()
        },(data)=>{
            $('#delete-output').html(data);
        })
    })
});