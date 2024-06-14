window.onload = function(){
    const addButton = document.querySelector("#add");
    const removeButton = document.querySelector("#remove");
    const itemList = document.querySelector(".list"); 

    const flowers = ["Dahlia", "Sunflower", "Daisy", "Marigold", "Orchid", "Lily", "Peony", "Chrysanthemum", "Gardenia", "Iris"];

    addButton.onclick = function() {
        let li = document.createElement("li");
        let randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
        let txt = document.createTextNode(randomFlower);
        li.appendChild(txt);
        itemList.appendChild(li);
    };

    removeButton.onclick = function(){
        let lastItem = itemList.lastElementChild;
        if (lastItem){
        itemList.removeChild(lastItem);
        }
    };
};