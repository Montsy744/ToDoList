const form = document.getElementById("form");
const todo = document.getElementById("todo");

form.addEventListener("submit", function (e) {
  e.preventDefault(); /*empeche la page de se rafraichir par defaut*/
  const todoValue = todo.value;

  console.log(todoValue);
  let item = `
                <div class="item">
                    <p>${todoValue}</p>
                    <button class="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button class="btn-archive">
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
            `;

  const listItems = document.querySelector(".list-items");
  listItems.innerHTML += item;

  const btnDelete = document.querySelectorAll(".btn-delete");
  btnDelete.forEach((i) => {
    i.addEventListener("click", function () {
      i.parentElement.remove();
    });
  });

  const btnArchive = document.querySelectorAll(".btn-archive");
  btnArchive.forEach((i) => {
    i.addEventListener("click", function () {
      const parent = i.parentElement;
      parent.classList.toggle("done");
      console.log("bouton clique");
    });
  });

  form.reset();
});
