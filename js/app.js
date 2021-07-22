function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
let string = "";

function getElec() {
    const requeteAjax = new XMLHttpRequest();
    requeteAjax.open("GET", "app.php");

    requeteAjax.onload = function () {
        const dropdown_content = document.querySelectorAll(".dropdown_content");
        const scrolls = document.querySelectorAll(".scroll");
        const resultat = JSON.parse(requeteAjax.responseText);
        

        resultat['fab'].forEach(element => {
            string = string + ` <button class="dropdown_content_scroll_btn"><i class="fab fa-${element}"></i> ${element}</button>
                                <form method="POST" class="form_invisible" id="fab fa-${element}">
                                    <input type="hidden" name="fa" value="fab fa-${element}">
                                    <input type="hidden" name="id_qual" value="' + qual_id + '">
                                </form>`;
        });
        resultat['far'].forEach(element => {
            string = string + `<button class="dropdown_content_scroll_btn"><i class="far fa-${element}"></i> ${element}</button>`;
        });
        resultat['fas'].forEach(element => {  
            string = string + `<button class="dropdown_content_scroll_btn"><i class="fas fa-${element}"></i> ${element}</button>`;
        });

        scrolls.forEach(scroll => {
            scroll.innerHTML = string;         
        });
        string = 
        `<div class="dropdown_content" id="dropdown">
            <a target="_blank" href="https://fontawesome.com/v5.15/icons?d=gallery&p=2" class="dropdown_content_titre" style="text-align:center;"><i class="fab fa-font-awesome"></i> Site officiel<br><span style="color:grey;">Si vous ne trouvez pas votre bonheur.</span></a>
            <input onkeyup="logosearch()" class="dropdown_content_search_logo" type="search">
            <div class="scroll">
            ${string}
            </div>
        </div>`;
    }

    requeteAjax.send();
}
  
getElec()

function DropdownADD(id){
    document.querySelector('#a_logo_choix_' + id).insertAdjacentHTML('afterend', string);
    const dropdown = document.querySelector(".dropdown_content");
    dropdown.classList.add("show");
}

window.onclick = function(e) {
    if (e.target.matches('.a_logo') || e.target.matches('body') || e.target.matches('td') || e.target.matches('th') || e.target.matches('h1') || e.target.matches('html') || e.target.matches('.page-footer')) {
        const dropdowns = document.querySelectorAll(".dropdown_content");

        if(dropdowns != undefined){
            dropdowns.forEach(elements => {
                elements.classList.forEach(element => {
                    if(element == "show"){
                        elements.classList.remove("show");
                        elements.remove();
                    }
                });
            });
        }
    }
}


function logosearch() {
    value = document.querySelector(".dropdown_content_search_logo").value.toLowerCase();
    label = document.querySelectorAll(".dropdown_content_scroll_btn");
    for (i = 0; i < label.length; i++) {
        content = label[i].textContent || label[i].innerText;
        content = content.toLowerCase();
        if (content.includes(value)) {
            label[i].style.display = "block";
        } else {
            label[i].style.display = "none";
        }
    }
}