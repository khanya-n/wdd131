const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list =  document.querySelector("#list");

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const item = document.createElement("li");
        item.textContent = input.value;

        const delButton = document.createElement("button");
        delButton.textContent = "❌";

        delButton.addEventListener("click", function() {
            list.removeChild(item);
            input.focus();
        });
        
        item.appendChild(delButton);
        list.append(item);
        input.value = "";
    }
        
    input.focus();
});
