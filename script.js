const p = document.getElementById('flavor-text');
const h1 = document.getElementById('header-text');

const spinner = document.getElementsByClassName('spinner')[0];

const currentIntervals = [];

const simulateLoading = () => {
    var loadingID = setTimeout(() => {
        // show the hidden paragraph
        p.classList.remove('hide-element');
        p.classList.add('show-element');

        h1.innerText = "Here's what we found out.";

        // hide the visible spinner
        spinner.remove()

        currentIntervals.push(loadingID)
        resetIntervals()
    }, 3000)
}

const resetIntervals = () => {
    currentIntervals.forEach(id => {
        clearInterval(id)
        currentIntervals.splice(currentIntervals.indexOf(id), 1)
    })

    console.log('loading id cleared', currentIntervals);
}


window.addEventListener('load', () => {
    p.classList.add('hide-element');

    simulateLoading()
})