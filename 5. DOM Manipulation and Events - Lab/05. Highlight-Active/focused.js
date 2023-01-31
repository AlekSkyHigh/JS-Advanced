function focused() {

    const inputs = Array.from(document.querySelectorAll('input'));

    for (let input of inputs) {

        input.addEventListener('focus', () => {
            input.parentElement.className = 'focused';
        });
        input.addEventListener('blur', () => {
            input.parentElement.className = '';
        });
    }
}
