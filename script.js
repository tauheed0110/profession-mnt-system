const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const add = document.getElementById("add-user");
const deleteBtn = document.getElementById("delete");
const logError = document.getElementById("log-error");
const list = document.getElementById("list");
const listError = document.getElementById("list-error");

let datas = [];

add.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value;
    if (!name || !profession || !age) {
        logError.textContent = "Error :Please Make sure All the field are filled before adding in an emplyee"
    } else {
        listError.textContent = "";
        logError.textContent = "";
        const obj = { id: datas.length + 1, name, profession, age };
        datas.push(obj);
        renderData(datas);
        nameInput.value = "";
        professionInput.value = "";
        ageInput.value = "";
    }

})

function renderData(datas) {
    list.innerHTML = "";
    datas.map((data, index) => {
        list.innerHTML += `
            <div class='flex-box'>
                <div class="box">
                    <p>${data.name}</p>
                    <p>${data.profession}</p>
                    <p>${data.age}</p>
                </div>
                <button class="delete" id="delete" onclick='handleDelete(${data.id})'>Delete</button>
            </div>
        `;
    })

}

function handleDelete(id) {
    datas = datas.filter((data) => {
        return data.id != id;
    })
    if(datas.length === 0){
        listError.textContent = "Data Not Found";
    }
    renderData(datas);
}

