function calculateLuas() {
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);

    if(isNaN(alas) || isNaN(tinggi)){
        console.log('Please enter valid numbers for alas and tinggi');
        return;
    }

    let luas = (0.5 * (alas * tinggi));
    console.log('Luas: ', luas);
    document.getElementById("luas").innerHTML = "Luas = 1/2 x alas x tinggi <br/>Luas = 1/2 x "+ alas + " x " + tinggi + "<br/> Luas = " + luas;
}

function calculateKeliling() {
    let Sisi1 = parseFloat(document.getElementById('Sisi1').value);
    let Sisi2 = parseFloat(document.getElementById('Sisi2').value);
    let Sisi3 = parseFloat(document.getElementById('Sisi3').value);

    if(isNaN(Sisi1) || isNaN(Sisi2) || isNaN(Sisi3)){
        console.log('Please enter valid numbers for all sides');
        return;
    }

    let keliling = Sisi1 + Sisi2 + Sisi3
    console.log('Keliling: ', keliling);
    document.getElementById("keliling").innerHTML = "Keliling = Sisi + Sisi + Sisi <br/>Keliling = "+ Sisi1 + " + " + Sisi2 + " + " + Sisi3 + "<br/>Keliling = " + keliling;
}



function resetBtn() {

    if(a == 1){
        document.getElementById('alas').value = "";
        document.getElementById('tinggi').value = "";
        document.getElementById('luas').innerHTML = "";
    } else{
        document.getElementById('Sisi1').value = "";
        document.getElementById('Sisi2').value = "";
        document.getElementById('Sisi3').value = "";
        document.getElementById('keliling').innerHTML = "";
    }
}

const TitleText = document.querySelector('.title-text');
const Input1 = document.querySelector('.input1')
const Input2 = document.querySelector('.input2')
const Input3 = document.querySelector('.input3')
let a = 0;
function setInputs(page) {
    switch (page) {
        case 'luas':
            document.getElementById("title-text").innerHTML = "Luas Segitiga";
            a = 1;
            return [
                { label: 'Alas =', id: 'alas' },
                { label: 'Tinggi =', id: 'tinggi' },
            ];
        case 'keliling':
            document.getElementById("title-text").innerHTML = "Keliling Segitiga";
            a = 2;
            return [
                { label: 'Sisi 1 =', id: 'Sisi1' },
                { label: 'Sisi 2 =', id: 'Sisi2' },
                { label: 'Sisi 3 =', id: 'Sisi3' },
            ];
        default:
            return [];
    }
}

function renderInputs(inputs) {
    return inputs.map(input => `<p>${input.label}</p><input id="${input.id}" name="${input.id}" placeholder="${input.label}">`).join('');
}

function showPage(page) {
    const inputs = setInputs(page);
    Input1.innerHTML = '';
    Input2.innerHTML = '';
    Input3.innerHTML = '';

    if (inputs.length >= 1) {
        Input1.innerHTML = renderInputs([inputs[0]]);
    }

    if (inputs.length >= 2) {
        Input2.innerHTML = renderInputs([inputs[1]]);
    }

    if (inputs.length >= 3) {
        Input3.innerHTML = renderInputs([inputs[2]]);
    }

    if (a == 2){
        document.getElementById('luas').innerHTML = "";
    } else {
        document.getElementById('keliling').innerHTML = "";
    }

    return(page);
}

function submitBtn(page) {

    if(a == 1){
        calculateLuas();
    } else{
        calculateKeliling();
    } 
}