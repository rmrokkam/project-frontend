document.addEventListener('DOMContentLoaded', function() {
    var checkbox_usa = document.getElementById('check-usa');
    var button_usa = document.getElementById('button-usa');
    var checkbox_finland = document.getElementById('check-finland');
    var button_finland = document.getElementById('button-finland');
    var checkbox_india = document.getElementById('check-india');
    var button_india = document.getElementById('button-india');

    checkbox_usa.addEventListener('change', function() {
        button_usa.classList.toggle('active-button', this.checked);
    });

    checkbox_finland.addEventListener('change', function() {
        button_finland.classList.toggle('active-button', this.checked);
    });

    checkbox_india.addEventListener('change', function() {
        button_india.classList.toggle('active-button', this.checked);
    });
});
