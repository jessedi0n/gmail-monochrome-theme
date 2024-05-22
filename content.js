// Remove the inner text of the "Send" button
function removeInnerText() {
    const element = document.querySelector('.T-I.T-I-KE.L3');
    if (element) {
        element.innerText = '';
        observer.disconnect();  // Stop observing once the element is found and modified
    }
}

// Create a MutationObserver to observe changes in the DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        removeInnerText();
    });
});

// Start observing the document body for added nodes
observer.observe(document.body, { childList: true, subtree: true });

// Initial attempt to remove the inner text
removeInnerText();



