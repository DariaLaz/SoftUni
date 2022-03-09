let userData = JSON.parse(sessionStorage.userData);
window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData){
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
    } else{
        document.getElementById('user').style.display = 'none';
    }
    document.querySelector('.load').addEventListener('click', loadData);
    document.getElementById('addForm').addEventListener('submit', onCreateSubmit)
    document.getElementById('logout').addEventListener('click', logout)
});

async function onCreateSubmit(e){
    e.preventDefault();
    if(!userData){
        window.location = '/login.html'
    }
    const formData = new FormData(e.currentTarget);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {})
    try{
        if(Object.values(data).some(x => x =='')){
            throw new Error('All fields are required');
        }
        const resp = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        });
        if(!resp.ok){
            const err = await resp.json();
            throw new Error(err.message)
        }
        e.target.reset()
        loadData();
    } catch(err){
        alert(err.message);
    }
}
async function loadData(){
    const resp = await fetch('http://localhost:3030/data/catches');
    const data  = await resp.json();
    document.getElementById('catches').replaceChildren(...data.map(createPreview))
}
function createPreview(item){
    let isOwner = userData && item._ownerId == userData.id;  
    const element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${item.angler}" ${!isOwner? 'disabled' : ''}>
<label>Weight</label>
<input type="text" class="weight" value="${item.weight}" ${!isOwner? 'disabled' : ''}>
<label>Species</label>
<input type="text" class="species" value="${item.species}" ${!isOwner? 'disabled' : ''}>
<label>Location</label>
<input type="text" class="location" value="${item.location}" ${!isOwner? 'disabled' : ''}>
<label>Bait</label>
<input type="text" class="bait" value="${item.bait}" ${!isOwner? 'disabled' : ''}>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner? 'disabled' : ''}>
<button class="update" data-id="${item._id}" ${!isOwner? 'disabled' : ''}>Update</button>
<button class="delete" data-id="${item._id}" ${!isOwner? 'disabled' : ''}>Delete</button>`;

    element.querySelector('.update').addEventListener('click', update)
    element.querySelector('.update')['data-id'] = item._id;
    element.querySelector('.delete').addEventListener('click', deleteFunc)
    element.querySelector('.delete')['data-id'] = item._id;
    return element;
}
async function update(e){
    e.preventDefault();
    if(!userData){
        window.location = '/login.html'
    }
    let inputs = (e.currentTarget.parentElement.querySelectorAll('input'))
    if(Object.values(inputs).some(x => x =='')){
        throw new Error('All fields are required');
    }
    let updated = {
        angler: inputs[0].value, 
        weight: inputs[1].value, 
        species: inputs[2].value, 
        location: inputs[3].value,  
        bait: inputs[4].value, 
        captureTime: inputs[5].value
    }
    try{
        const res = await fetch(`http://localhost:3030/data/catches/${e.currentTarget['data-id']}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(updated)
        });
        if(!res.ok){
            const err = await res.json();
            throw new Error(err.message)
        }
        loadData();
    } catch(err){
        alert(err.message);
    }
}
async function deleteFunc(e){
    let id =  e.target['data-id'];
    await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: 'DELETE',
        headers: {

            "Content-Type": "application/json",
            "X-Authorization": userData.token

        }
    })
    loadData();
}
async function logout(e){
    const res = await fetch(`http://localhost:3030/users/logout`, {
        headers: {
            "X-Authorization": userData.token
        }
    });
    if (res.ok) {
        sessionStorage.clear();
        window.location = 'index.html'
        loadData();
    }
}