let mode = document.getElementById("mode");

function styler()   {
    if(mode.checked)    {

        document.getElementById("dark").setAttribute("href", "bright.css");
    }
    else{
        
        document.getElementById("dark").setAttribute("href", "dark.css");
    }
}