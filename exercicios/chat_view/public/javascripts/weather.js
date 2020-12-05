function clima(){
    $.get("/weather", function (data){
        document.getElementById("omg").innerHTML = data.msg;
       /*  alert(data.msg); */
    });
}