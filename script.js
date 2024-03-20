window.onload = function() {
    const initialButton = document.querySelector('.booker-button.active');
    handleButtonClick(initialButton);
};

async function handleButtonClick(button) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.booker-button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    const buttonId = button.id;
    console.log("Active button ID: ", buttonId);

    if (buttonId === 'booker-button1') {
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

        const roundTrip = createRadioButton('Round Trip', 'RoundTrip');
        roundTrip.classList.add('active'); //Make this radio button active initially
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

        const awardTicket = createDiv('award-ticket-div');
        const spanElement = document.createElement('span');
        spanElement.classList.add('award-ticket-span');
        spanElement.textContent = 'Award ticket - Buy a ticket with Miles';

        const emElement = document.createElement('em');

        const imgElement = document.createElement('img');
        imgElement.classList.add('award-ticket-icon');
        imgElement.src = 'https://www.turkishairlines.com/assets/ms-log-in-aaf383a1.svg';

        emElement.appendChild(imgElement);

        awardTicket.appendChild(emElement);
        awardTicket.appendChild(spanElement);
        tabContent.appendChild(awardTicket);

        const originSelector = createDiv('origin-selector');

        const originLabel = createLabel('From');
        originLabel.classList.add('origin-label');
        originSelector.appendChild(originLabel);

        const portWrapper = createDiv('port-wrapper');
        originSelector.appendChild(portWrapper);

        const originInput = document.createElement('input');
        originInput.classList.add('origin-input');
        originInput.value = 'Izmir';
        const originInputValue = document.createElement('span');
        originInputValue.classList.add('origin-input-value');
        originInputValue.textContent = originInput.value;

        portWrapper.appendChild(originInputValue);

        const originLabel2 = createLabel('Izmir Adnan ... (ADB)');
        originLabel2.classList.add('origin-label2');
        originSelector.appendChild(originLabel2);

        const changePorts = document.createElement('i');
        changePorts.classList.add('change-ports-icon');
        originSelector.appendChild(changePorts);

        const destinationSelector = createDiv('destination-selector');
        originSelector.appendChild(destinationSelector);

        const destinationLabel = createLabel('To');
        destinationLabel.classList.add('destination-label');
        destinationSelector.appendChild(destinationLabel);

        const datesSelector = createDiv('dates-selector');
        originSelector.appendChild(datesSelector);

        const datesSpanElement = document.createElement('span');

        const datesImgElement = document.createElement('img');
        datesImgElement.classList.add('dates-icon');
        datesImgElement.src = 'https://www.turkishairlines.com/assets/booking-calendar-gray-17ffc0da.svg';

        datesSpanElement.appendChild(datesImgElement);
        datesSelector.appendChild(datesSpanElement);

        const datesLabel = createLabel('Dates');
        datesLabel.classList.add('dates-label')
        datesSelector.appendChild(datesLabel);

        const passengersSelector = createDiv('passengers-selector');

        const passengersLabel = createLabel('Passengers');
        passengersLabel.classList.add('passengers-label');
        passengersSelector.appendChild(passengersLabel);

        const passengersPortWrapper = createDiv('passengers-port-wrapper');
        passengersSelector.appendChild(passengersPortWrapper);

        const passengersInput = document.createElement('input');
        passengersInput.classList.add('passengers-input');
        passengersInput.value = '1\u00A0Passenger';

        const passengersInputValue = document.createElement('span');
        passengersInputValue.classList.add('passengers-input-value');
        passengersInputValue.textContent = passengersInput.value;

        passengersPortWrapper.appendChild(passengersInputValue);

        const passengersLabel2 = createLabel('ECO');
        passengersLabel2.classList.add('passengers-label2');
        passengersSelector.appendChild(passengersLabel2);

        originSelector.appendChild(passengersSelector);

        const searchFlightsSelector = createDiv('search-flights-selector');
        originSelector.appendChild(searchFlightsSelector);

        const searchFlightsSpanElement = document.createElement('span');

        const searchFlightsImgElement = document.createElement('img');
        searchFlightsImgElement.classList.add('search-flights-icon');
        searchFlightsImgElement.src = 'https://www.turkishairlines.com/assets/search-flights-right-arrow-8cc5925c.svg';

        searchFlightsSpanElement.appendChild(searchFlightsImgElement);
        searchFlightsSelector.appendChild(searchFlightsSpanElement);

        const searchFlightsLabel = createLabel('Search flights');
        searchFlightsLabel.classList.add('search-flights-label')
        searchFlightsSelector.appendChild(searchFlightsLabel);

        const recentSearchesDiv = createDiv('recent-searches-div');

        const recentSearchesLabel = createLabel('Recent searches');
        recentSearchesLabel.classList.add('recent-searches-label');

        recentSearchesDiv.appendChild(recentSearchesLabel);

        tabContent.appendChild(originSelector);
        tabContent.appendChild(recentSearchesDiv);

        resolve();
    });
}

function createRadioButton(labelText, name) {
    const radioButton = document.createElement('a');
    radioButton.classList.add("flight-radio-buttons");
    radioButton.href = '#'; // To make it behave like a link
    radioButton.dataset.name = name; // Using dataset to store the name
    radioButton.addEventListener('click', function(event) {
        event.preventDefault();
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

function createDiv(classToBeAdded){
    const div = document.createElement('div');
    div.classList.add(classToBeAdded);
    return div;
}

function handleCheckinAndManageBookingButton(){
    return new Promise((resolve, reject) => {
        const tabContent = document.querySelector('.tab-content');
        tabContent.innerHTML = '';
        resolve();
    });
}