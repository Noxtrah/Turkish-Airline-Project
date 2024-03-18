async function handleButtonClick(button) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.booker-button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to the parent <li> element of the clicked button
    button.classList.add('active');
    
    // Check if the active button has a specific ID
    const buttonId = button.id;
    console.log("Active button ID: ", buttonId);

    if (buttonId === 'booker-button1') { // Check if the first button is clicked
        console.log("First button is active");
        await handleFlightButton();
    } else if(buttonId === 'booker-button2'){
        console.log("Second button is active");
        await handleCheckinAndManageBookingButton();
    } else if(button.classList.contains('booker-buttons-item3')){
        // Handle other button clicks
    }
}

function handleFlightButton(){
    return new Promise((resolve, reject) => {
        const tabContent = document.querySelector('.tab-content');
        tabContent.innerHTML = '';
        // Create and append radio buttons
        const roundTrip = createRadioButton('Round Trip', 'RoundTrip');
        const roundTripLabel = createLabel('Round Trip', 'RoundTrip');
        tabContent.appendChild(roundTrip);
        tabContent.appendChild(roundTripLabel);

        const oneWay = createRadioButton('One Way', 'OneWay');
        const oneWayLabel = createLabel('One Way', 'OneWay');
        tabContent.appendChild(oneWay);
        tabContent.appendChild(oneWayLabel);

        const stopoverInIstanbul = createRadioButton('Stopover in Istanbul', 'StopoverInIstanbul');
        const stopoverLabel = createLabel('Stopover in Istanbul', 'StopoverInIstanbul');
        tabContent.appendChild(stopoverInIstanbul);
        tabContent.appendChild(stopoverLabel);

        const multiCity = createRadioButton('Multi-city', 'MultiCity');
        const multiCityLabel = createLabel('Multi-city', 'MultiCity');
        tabContent.appendChild(multiCity);
        tabContent.appendChild(multiCityLabel);

        resolve();
    });
}

function createRadioButton(labelText, name) {
    const radioButton = document.createElement('a');
    radioButton.classList.add("flight-radio-buttons");
    radioButton.href = '#'; // To make it behave like a link
    radioButton.dataset.name = name; // Using dataset to store the name
    radioButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const allRadioButtons = document.querySelectorAll('.flight-radio-buttons');
        allRadioButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        radioButton.classList.add('active');
    });
    return radioButton;
}

function createLabel(labelText, htmlFor) {
    const label = document.createElement('label');
    label.classList.add("flight-radio-buttons-labels");
    label.htmlFor = htmlFor;
    label.textContent = labelText;
    return label;
}

function handleCheckinAndManageBookingButton(){
    return new Promise((resolve, reject) => {
        const tabContent = document.querySelector('.tab-content');
        tabContent.innerHTML = '';
        resolve();
    });
}