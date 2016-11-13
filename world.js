$(document).ready(function(){
    $('#lookup').on('click',Request)
   
});
function Request(e){
    e.preventDefault();
    if(($('#country').val()=='') && ($('#all').prop('checked')== false)){
        alert('You must Enter a country or check the view all checkbox');
    }
    var hReq = new XMLHttpRequest();
    if( $('#all').prop('checked')){
    var url = 'world.php?all=true';
    hReq.onreadystatechange = Response;
    hReq.open('GET',url);
    hReq.send();
    }
    else{
    var url = 'world.php?c='+ $('#country').val();
    hReq.onreadystatechange = Response;
    hReq.open('GET',url);
    hReq.send();
    }
}

function Response(){
    if(this.readyState==XMLHttpRequest.DONE){
        if(this.status==200){
            var resp=this.responseText;
            $('#result').html(resp);
        }
        else{
            $('#result').html('Problems yute')
        }
    }
}