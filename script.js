const FAQContiners = document.querySelectorAll(".faq");
const detailsElements = [];

FAQContiners.forEach(element => {
    const details = element.querySelector("details");
    detailsElements.push(details);

    details.addEventListener("click" , (event) =>{
        HandleClick(event ,details)
    })

    
});

function HandleClick(event ,details){
    event.preventDefault();

    detailsElements.forEach(element => {
        if(element !== details){
            element.open = false;
            element.setAttribute("aria-expanded" , false)
        }
    });

    details.open = true;
    details.setAttribute("aria-expanded" , true)
}