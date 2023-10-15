const getregional = async () =>{
    const res = await fetch('../data/data.json');
    const dataitem = await res.json();
    displayregional(dataitem.data);
}
const displayregional = (regional) =>{
const getid = document.getElementById('getitem');

regional.forEach(item => {
    const getitems = document.createElement('div');
    getitems.className = 'btn-group mx-1 my-1 me-5';
    getitems.innerHTML = `
    <div class="btn-group">
        <button onclick="additem('${item.region}');" class="btn">${item.regionName}</butto>
    </div>
    `;
    getid.appendChild(getitems);
});


}

function additem(region){
    url = `https://restcountries.com/v3.1/region/${region}`;
    console.log(url);
    }
getregional();