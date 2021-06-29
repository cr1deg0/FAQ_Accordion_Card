window.addEventListener("load", function(){
    var menu = document.getElementsByClassName("menu");
    var i;
    console.log("hello");
    for(i=0; i<menu.length; i++){
        console.log("loop i: "+i);
        menu[i].addEventListener("click",function(){
            
            this.classList.toggle("visible");

            var panel = this.nextElementSibling;
            console.log(panel);
            if (panel.style.display === "block"){
                panel.style.display = "none";
            }else{
                panel.style.display = "block";
            }

        });
    }
});
