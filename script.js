window.addEventListener("load", function(){
    var menu = document.getElementsByClassName("menu");
    var i;
    for(i=0; i<menu.length; i++){
          menu[i].addEventListener("click",function(){
            
            this.classList.toggle("visible");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block"){
                panel.style.display = "none";
            }else{
                panel.style.display = "block";
            }

        });
    }
});
