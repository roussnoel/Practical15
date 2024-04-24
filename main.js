const themeColour = document.getElementsByName("theme");

for (let themeOption of themeColour) {
    themeOption.addEventListener("change", themeOptionChanged);
    console.log(themeOption);
}

function themeOptionChanged(event) {
console.log("hi");
    const themeChanged = document.getElementById("themeOptions");
    const body = document.getElementsByTagName("body")[0];
    const h1 = document.getElementsByTagName("h1")[0];
    const p = document.getElementsByTagName("p")[0];
    const topic = document.getElementById("topic");

    if (event.target.value === "Theme 1"){
        body.style.backgroundColor = "rgb(86, 178, 178)";      
        h1.style.color = "grey";   
        p.style.color= "grey"; 
        topic.style.color= "grey";
    }

    if (event.target.value === "Theme 2"){
        body.style.backgroundColor = "rgb(86, 178, 126)";    
        h1.style.color = "blue"; 
        p.style.color= "blue"; 
        topic.style.color= "blue";
    }

    if (event.target.value === "Theme 3"){
        body.style.backgroundColor = "rgb(0,0,0)";       
        h1.style.color = "aquamarine"; 
        p.style.color= "aquamarine"; 
        topic.style.color= "aquamarine"; 

    }


}