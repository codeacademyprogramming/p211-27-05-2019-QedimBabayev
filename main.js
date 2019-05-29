const mybtn = document.getElementsByClassName('mybtn')[0];
const input = document.getElementById('text');
const wrapper = document.getElementsByClassName("tag-wrapper")[0];

input.onkeydown = function (e) {
    if (e.keyCode === 13) {
        const tagValue = input.value;
        const newDiv = document.createElement('div');
        newDiv.classList.add("tag");
        newDiv.innerHTML = tagValue;
        wrapper.appendChild(newDiv);
        input.value = "";
    }

}