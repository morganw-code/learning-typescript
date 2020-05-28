enum Role { ADMIN, READ_ONLY, AUTHOR };
let button = document.querySelector('button');

function Book(title: string, author: string) {
    this.title = title;
    this.author = author;
}

const book = new Book('hazza', 'wazza');
console.log(book);

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
} = {
    name: 'Morgan',
    age: 20,
    hobbies: ['Cool', 'Woah'],
    role: Role.ADMIN
};

button.addEventListener('click', () => {
    console.log(person);
});