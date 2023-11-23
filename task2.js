'use strict'

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "and1rii@mail.ru" // Нам такі не підходять
    },
];

// Regular expression for validation and filtering
var trustedEmailRegex = /^([a-zA-Z0-9]+\.+[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Filter the array based on the email validation
var trustedEmails = arr.filter(function (item) {
    return trustedEmailRegex.test(item.email);
});

console.log(trustedEmails);
