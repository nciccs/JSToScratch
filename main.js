//var id = uid();
//alert(id);

save();


function save()
{
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");


    zip.generateAsync({type:"base64"}).then(function (base64)
    {
        location.href="data:application/zip;base64," + base64;
    });
    /*
    var zip = new JSZip();

    //.file(name, content)
    zip.file("hello.txt", uid());

    zip.generateAsync({type:"blob"}).then(function (content)
    {
        saveAs(content, "hello.zip");
    });*/
}
/*
zip.generateAsync({type:"base64"}).then(function (base64)
{
    location.href="data:application/zip;base64," + base64;
});*/
/*
function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}*/