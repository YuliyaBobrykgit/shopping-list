const inputField = document.getElementById('input');
const itemsContainer = document.getElementById('items');

inputField.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        if (inputField.value != '') {
            const listItem = document.createElement('li');
            listItem.textContent = inputField.value;
            itemsContainer.append(listItem);;
            inputField.value = '';
            listItem.addEventListener('click',function () {
                listItem.classList.toggle('done');
            });
        } 
    }
});
 


/* + Новые элементы должны добавляться в список по нажатию на Enter */

/* + Пустые элементы не должны добавляться */

/* + Если кликнуть на элемент списка, он зачеркивается */

/* + Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* + Очищать input после добавления нового элемента в список */