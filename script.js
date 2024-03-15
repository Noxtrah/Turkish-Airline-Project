function handleButtonClick(button) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.booker-button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    console.log("Zaa XD");
    // Add active class to the parent <li> element of the clicked button
    button.classList.add('active');
}

