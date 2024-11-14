const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const socialIcons = document.querySelectorAll('.socials i'); // Get all social icons
const tooltip = document.getElementById('tooltip');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

// Event listeners for showing and hiding the tooltip
socialIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', (event) => {
        // Get the website name from the icon's ID
        const websiteName = event.target.id;
        // Set the tooltip content and position it at the bottom of the mouse
        tooltip.innerText = websiteName;
        tooltip.style.display = 'block';
        tooltip.style.left = event.clientX + 'px';
        tooltip.style.top = event.clientY + 20 + 'px';
    });

    icon.addEventListener('mouseleave', () => {
        // Hide the tooltip when the mouse leaves the icon
        tooltip.style.display = 'none';
    });
});


let labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, i) => 
        `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
    ).join('');
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        // console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// const elements = document.querySelectorAll(".lang");
// elements.forEach((element, index) => {
//     element.style.transitionDelay = `${index * 0.1}s`
// });
