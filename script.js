function capture()
{
    html2canvas(document.getElementById("draw"), {width:'300', height:'300'}).then(function(canvas) {
        var preview = document.getElementById("preview");
        preview.innerHTML="";
        preview.appendChild(canvas);
        canvas.setAttribute('id', 'canvas');
    });
}

function download(f)
{
    try{
        fname = f + ".png";
        var link = document.createElement('a');
        link.download = fname;
        link.href = document.getElementById("canvas").toDataURL();
        //link.click();
        var a = document.getElementById("canvas").toDataURL();
        alert(a);
    }
    catch{
        alert("Draw something!");
    }
}

document.getElementById("cap_but").addEventListener("click", capture)
