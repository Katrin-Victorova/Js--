// ============> Массивы для заметок
const inputElement = document.getElementById("title");
const creatBth = document.getElementById("create");
const listElement = document.getElementById("list");

// const notes = ["записать блок про массивы", "рассказать теорию"];

// function render() {
//   /*   for(let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentElement("beforebegin", getNotTemplate(notes[i]));
//   } */
//   for (let note of notes) {
//     listElement.insertAdjacentElement("beforebegin", getNotTemplate(note));
//   }
// }

// render();

/* creatBth.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  listElement.insertAdjacentElement(
    "beforebegin",
    getNotTemplate(inputElement.value)
  );
  inputElement.value = "";
};
 */
/* function getNotTemplate(title) {
  return `
  <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
        `;
} */

// =========> Object
/* const person = {
  firstName: 'Maks',
  lastName: 'Victorov',
  year: 1993,
  hasGirlfriend: true,
  languages: ['ru', 'en', 'de'],
  getFullName: function() {
    console.log(person.firstName + ' ' + person.lastName)
  }
}

const key = 'hasGirlfriend'
console.log([key])
person.hasGirlfriend = true

person.getFullName() */

const notes = [
  {
    title: "записать блок про массивы",
    complited: false,
  },
  { title: "рассказать теорию", complited: false },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentElement(
      "beforebegin",
      getNotTemplate(notes[i], i)
    );
  }
  // for (let note of notes) {
  //   listElement.insertAdjacentElement("beforebegin", getNotTemplate(note));
  // }
}

render();

creatBth.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    complited: false,
  };

  notes.pusg(newNote);
  render();
  // listElement.insertAdjacentElement(
  //   "beforebegin",
  //   getNotTemplate(getNotTemplate(newNote))
  // );
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.index.type;

    if (type === toggle) {
      notes[index].complited = !notes[index].complited;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};

function getNotTemplate(note, index) {
  return `
  <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class ="${
            note.complited ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.complited ? "warning" : "saccess"
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>
        `;
}