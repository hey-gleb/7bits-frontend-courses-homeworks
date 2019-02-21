'use strict';

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('firstName')) {
    document.getElementById('first-name').value = urlParams.get('firstName');
}

if (urlParams.has('lastName')) {
    document.getElementById('last-name').value = urlParams.get('lastName');
}

if (urlParams.has('email')) {
    document.getElementById('email').value = urlParams.get('email');
}

if (urlParams.has('gender') && urlParams.get('gender') === 'male') {
    document.getElementById('gender-male').checked = true;
}