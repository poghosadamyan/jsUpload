// Upload selected files to uploads folder
var file=document.getElementById("file");
xhr=new XMLHttpRequest();
form=new FormData();

file.onchange=function(){
    var upload_file=file.files[0];
    form.append("file",upload_file);
    xhr.open("post","upload.php",true);
    xhr.send(form);


    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if(xhr.status == 200 && xhr.responseText != 'error') {
                var a = document.createElement("a");
                var p = document.createElement("p");
                a.setAttribute("href", xhr.responseText);
                a.setAttribute("target", "_blank");
                a.innerHTML=xhr.responseText;
                p.appendChild(a);
                document.getElementById("file_url").appendChild(p);
                document.getElementById("upload_link_text").style.display = 'block';
            }
        }
    };
}
