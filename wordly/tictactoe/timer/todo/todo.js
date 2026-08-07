const input = document.querySelector(".header input");
const addBtn = document.querySelector(".header button");

const list = document.querySelector(".list");

const [allBtn, activeBtn, completedBtn] =
   document.querySelectorAll(".filters button");

const createTodo = (text) => {
   const container = document.createElement("div");
   container.classList.add("todo");

   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";

   checkbox.addEventListener("click", () => {
      updateStats();
   });

   const p = document.createElement("p");
   p.textContent = text;

   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";

   deleteBtn.addEventListener("click", () => {
      container.remove();
   });

   container.append(checkbox, p, deleteBtn);

   return container;
};

const updateStats = () => {
   const items = document.querySelectorAll(".todo");

   let count = 0;

   for (const item of items) {
      const checkbox = item.querySelector("input");

      if (checkbox.checked === true) {
         count++;
      }
   }

   const statEl = document.querySelector(".footer p");
   statEl.textContent = count + "/" + items.length;
};

addBtn.addEventListener("click", () => {
   const text = input.value.trim();

   if (!text) return;

   const item = createTodo(text);

   list.appendChild(item);

   input.value = "";

   updateStats();
});

allBtn.addEventListener("click", () => {
   if (activeBtn.classList.contains("active")) {
      activeBtn.classList.remove("active");
   }
   if (completedBtn.classList.contains("active")) {
      completedBtn.classList.remove("active");
   }
   if (!allBtn.classList.contains("active")) {
      allBtn.classList.add("active");
   }

   const items = document.querySelectorAll(".todo");

   for (const item of items) {
      item.style.display = "flex";
   }
});

activeBtn.addEventListener("click", () => {
   if (allBtn.classList.contains("active")) {
      allBtn.classList.remove("active");
   }
   if (completedBtn.classList.contains("active")) {
      completedBtn.classList.remove("active");
   }
   if (!activeBtn.classList.contains("active")) {
      activeBtn.classList.add("active");
   }

   const items = document.querySelectorAll(".todo");

   for (const item of items) {
      const checkbox = item.querySelector("input");

      if (checkbox.checked === true) {
         item.style.display = "none";
      } else {
         item.style.display = "flex";
      }
   }
});

completedBtn.addEventListener("click", () => {
   if (activeBtn.classList.contains("active")) {
      activeBtn.classList.remove("active");
   }
   if (allBtn.classList.contains("active")) {
      allBtn.classList.remove("active");
   }
   if (!completedBtn.classList.contains("active")) {
      completedBtn.classList.add("active");
   }

   const items = document.querySelectorAll(".todo");

   for (const item of items) {
      const checkbox = item.querySelector("input");

      if (checkbox.checked === true) {
         item.style.display = "flex";
      } else {
         item.style.display = "none";
      }
   }
});
