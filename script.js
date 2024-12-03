document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('changeTextButton');
    button.addEventListener('click', function () {
        document.getElementById('message').textContent = 'You clicked the button!';
    });
});
