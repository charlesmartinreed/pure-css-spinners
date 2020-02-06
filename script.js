const p = document.getElementById('flavor-text');
const spinner = document.getElementsByClassName('spinner')[0];
const currentIntervals = [];

const simulateLoading = () => {
    var loadingID = setTimeout(() => {
        // show the hidden paragraph
        p.classList.toggle('hide-element');
        p.classList.toggle('show-element');

        // hide the visible spinner
        spinner.classList.toggle('show-element');
        spinner.classList.toggle('hide-element');

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
    simulateLoading()
})