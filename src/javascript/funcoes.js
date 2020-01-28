function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function listaCidades(estado) {
    var cidadesPorEstado = {
        AC: ["Acrelândia", "Assis Brasil", "Tarauacá", "Xapuri"],
        AL: ["Anadia", "Arapiraca", "Atalaia", "Barra", "Água Branca"],
        AM: ["Alvarães", "Amaturá", "Anamã", "Tefé", "Tonantins", "Uarini", "Urucará", "Urucurituba"],
        BA: ["Salvador", "Varzéa da Roça", "Mairi", "Camaçari", "Feira de Santana"],
        SP: ["São Paulo", "Caraicuíba", "Osasco", "Barueri", "Itapevi", "Cotia", "Jandira"],

    }
    var options = '';
    if (cidadesPorEstado.hasOwnProperty(estado)) {
        for (var i = 0; i < cidadesPorEstado[estado].length; i++) {
            options += '<option value="' + cidadesPorEstado[estado][i] + '"/>';
        }
    }
    document.getElementById('cidades').innerHTML = options;
}

function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    var tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}