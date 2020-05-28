var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var button = document.querySelector('button');
function Book(title, author) {
    this.title = title;
    this.author = author;
}
var book = new Book('hazza', 'wazza');
console.log(book);
var person = {
    name: 'Morgan',
    age: 20,
    hobbies: ['Cool', 'Woah'],
    role: Role.ADMIN
};
button.addEventListener('click', function () {
    console.log(person);
});
