// Smooth scroll for ALL anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = document.getElementById('header').offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

// Header shadow on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
  });

  // Reveal animation on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

// Dados dos pontos de coleta
const pcqData = {

  P1: {
    bairro: "Paraíso dos Ipês",
    tipo: "Residencial",
    endereco: "Rua 21, n. 201",
    coordenadas: `10°11'48.13"S 48°54'32.24"W`,

    junho: {
      ph: "7,76",
      cor: "0",
      turbidez: "1,67",
      fluoreto: "0,52",
      cloro: "0,42",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,7",
      cor: "0,0",
      turbidez: "2,76",
      fluoreto: "0,67",
      cloro: "1,19",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,92",
      cor: "0,0",
      turbidez: "2,15",
      fluoreto: "0,14",
      cloro: "0,65",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P2: {
    bairro: "Área Verde",
    tipo: "Residencial",
    endereco: "Rua 02, n. 106",
    coordenadas: `10°11'12.04"S 48°54'11.19"W`,

    junho: {
      ph: "6,75",
      cor: "0",
      turbidez: "1,92",
      fluoreto: "0,13",
      cloro: "0,36",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "6,76",
      cor: "0,0",
      turbidez: "1,54",
      fluoreto: "0,33",
      cloro: "0,53",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "6,85",
      cor: "0,0",
      turbidez: "1,85",
      fluoreto: "0,28",
      cloro: "0,19",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P3: {
    bairro: "Setor Bueno",
    tipo: "Comercial",
    endereco: "Rua 06, Qd. 01, Lt. 39",
    coordenadas: `10°11'04.05"S 48°54'37.22"W`,

    junho: {
      ph: "7,8",
      cor: "0",
      turbidez: "3,98",
      fluoreto: "0,72",
      cloro: "0,73",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,21",
      cor: "0,0",
      turbidez: "1,26",
      fluoreto: "0,95",
      cloro: "1,18",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,4",
      cor: "0,0",
      turbidez: "2,04",
      fluoreto: "0,61",
      cloro: "0,38",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P4: {
    bairro: "Setor Marista",
    tipo: "Residencial",
    endereco: "Rua José Ferreira Borges, prox. ao complexo poliesportivo",
    coordenadas: `10°11'38.02"S 48°55'08.04"W`,

    junho: {
      ph: "7,23",
      cor: "0",
      turbidez: "1,61",
      fluoreto: "0,83",
      cloro: "0,66",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,29",
      cor: "0,0",
      turbidez: "1,9",
      fluoreto: "0,75",
      cloro: "0,97",
      coliformesTotais: "1",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,36",
      cor: "0,0",
      turbidez: "1,87",
      fluoreto: "0,78",
      cloro: "0,5",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P5: {
    bairro: "Nova Fronteira",
    tipo: "Comercial",
    endereco: "Rua 06, Qd. 23, Lt. 44 (Borracharia do Galo)",
    coordenadas: `10°11'58.7"S 48°53'23.8"W`,

    junho: {
      ph: "7,54",
      cor: "0",
      turbidez: "1,82",
      fluoreto: "0,25",
      cloro: "0,63",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,5",
      cor: "0,0",
      turbidez: "2,01",
      fluoreto: "0,77",
      cloro: "1,08",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,45",
      cor: "0,0",
      turbidez: "1,97",
      fluoreto: "0,615",
      cloro: "0,795",
      coliformesTotais: "1,0",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P6: {
    bairro: "Jardim América",
    tipo: "Residencial",
    endereco: "Rua 13, n. 1760, Qd. 52, Lt. 03",
    coordenadas: `10°11'39.7"S 48°54'24.0"W`,

    junho: {
      ph: "7,33",
      cor: "0",
      turbidez: "3,04",
      fluoreto: "0,47",
      cloro: "0,61",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,47",
      cor: "0,0",
      turbidez: "2,51",
      fluoreto: "0,705",
      cloro: "1,05",
      coliformesTotais: "5,0",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,34",
      cor: "0,0",
      turbidez: "2,51",
      fluoreto: "0,71",
      cloro: "0,65",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P7: {
    bairro: "Parque das Águas",
    tipo: "Comercial",
    endereco: "Av. Beira Lago, Parque das Águas",
    coordenadas: `10°11'09.5"S 48°53'15.9"W`,

    junho: {
      ph: "7,11",
      cor: "0",
      turbidez: "1,52",
      fluoreto: "0,8",
      cloro: "0,35",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,44",
      cor: "0,0",
      turbidez: "1,67",
      fluoreto: "0,84",
      cloro: "0,86",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,43",
      cor: "0,0",
      turbidez: "1,77",
      fluoreto: "0,605",
      cloro: "0,07",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P8: {
    bairro: "Setor Bela Vista",
    tipo: "Residencial",
    endereco: "Rua Barão do Rio Branco, n. 1003",
    coordenadas: `10°10'48.7"S 48°53'02.9"W`,

    junho: {
      ph: "7,04",
      cor: "0",
      turbidez: "2,77",
      fluoreto: "0,63",
      cloro: "0,78",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,25",
      cor: "0,0",
      turbidez: "1,96",
      fluoreto: "1,08",
      cloro: "1,43",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,56",
      cor: "0,0",
      turbidez: "1,25",
      fluoreto: "0,415",
      cloro: "0,705",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P9: {
    bairro: "Residencial Serra Verde",
    tipo: "Residencial",
    endereco: "A definir",
    coordenadas: `10°11'42.30"S 48°52'19.68"W`,

    junho: {
      ph: "8,17",
      cor: "0",
      turbidez: "1,53",
      fluoreto: "0,8",
      cloro: "0,06",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,47",
      cor: "0,18",
      turbidez: "2,25",
      fluoreto: "0,58",
      cloro: "0,05",
      coliformesTotais: "3,1",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,74",
      cor: "0",
      turbidez: "1,86",
      fluoreto: "0,495",
      cloro: "0,065",
      coliformesTotais: "26,2",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P10: {
    bairro: "Jardim Limeira",
    tipo: "Residencial",
    endereco: "Rua 25B, Qd. 31, Lt. 37",
    coordenadas: `10°11'12.69"S 48°52'26.83"W`,

    junho: {
      ph: "8,17",
      cor: "41,32",
      turbidez: "6,94",
      fluoreto: "0,63",
      cloro: "0,18",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,22",
      cor: "0",
      turbidez: "1,9",
      fluoreto: "0,57",
      cloro: "0,11",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,47",
      cor: "0",
      turbidez: "2,42",
      fluoreto: "0,173",
      cloro: "0,06",
      coliformesTotais: "235,9",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P11: {
    bairro: "Parque dos Buritis",
    tipo: "Residencial",
    endereco: "Rua 10 (Casa de esquina com a Assembleia de Deus)",
    coordenadas: `10°09'39.54"S 48°52'23.39"W`,

    junho: {
      ph: "7,34",
      cor: "0",
      turbidez: "2,1",
      fluoreto: "0,4",
      cloro: "0,63",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,35",
      cor: "0",
      turbidez: "1,93",
      fluoreto: "0,52",
      cloro: "0,35",
      coliformesTotais: "14,8",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,45",
      cor: "0",
      turbidez: "1,77",
      fluoreto: "0,465",
      cloro: "0,235",
      coliformesTotais: "12,2",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P12: {
    bairro: "Setor Universitário",
    tipo: "Comercial",
    endereco: "Avenida Paraíso",
    coordenadas: `10°12'30.15"S 48°52'56.35"W`,

    junho: {
      ph: "8,05",
      cor: "0",
      turbidez: "1,94",
      fluoreto: "0,13",
      cloro: "1,27",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "8,05",
      cor: "0",
      turbidez: "1,58",
      fluoreto: "0,02",
      cloro: "0,93",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "8,04",
      cor: "0",
      turbidez: "2,05",
      fluoreto: "<0,02",
      cloro: "0,95",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P13: {
    bairro: "Serrano I",
    tipo: "Residencial",
    endereco: "Rua Hugo de Carvalho Ramos, n. 225",
    coordenadas: `10°10'03.9"S 48°52'14.0"W`,

    junho: {
      ph: "7,65",
      cor: "0",
      turbidez: "2,48",
      fluoreto: "0,71",
      cloro: "0,81",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,7",
      cor: "0",
      turbidez: "1,93",
      fluoreto: "0,495",
      cloro: "1,05",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,81",
      cor: "0,0",
      turbidez: "1,96",
      fluoreto: "0,73",
      cloro: "0,55",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P14: {
    bairro: "Novo Jardim Paulista",
    tipo: "Residencial",
    endereco: "Rua 07, Qd. 39, S/N",
    coordenadas: `10°11'09.7"S 48°54'21.4"W`,

    junho: {
      ph: "7,57",
      cor: "0",
      turbidez: "2,03",
      fluoreto: "0,4",
      cloro: "0,28",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,38",
      cor: "0",
      turbidez: "1,931",
      fluoreto: "0,2",
      cloro: "0,945",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,5",
      cor: "0,0",
      turbidez: "1,05",
      fluoreto: "0,03",
      cloro: "0,66",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P15: {
    bairro: "Centro",
    tipo: "Comercial",
    endereco: "Rua Tupinambás, n. 603 (Em frente a Pedal Ciclo)",
    coordenadas: `10°10'16.4"S 48°53'08.4"W`,

    junho: {
      ph: "7,05",
      cor: "0",
      turbidez: "2,85",
      fluoreto: "0,16",
      cloro: "1,03",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,26",
      cor: "0",
      turbidez: "1,56",
      fluoreto: "0,37",
      cloro: "1,47",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,34",
      cor: "0,0",
      turbidez: "2,76",
      fluoreto: "0,58",
      cloro: "0,91",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    }
  },

  P16: {
    bairro: "Oeste",
    tipo: "Comercial",
    endereco: "Bernardinho Maciel (próx. ao Supermercado econômico)",
    coordenadas: `10°10'45.4"S 48°53'54.2"W`,

    junho: {
      ph: "6,92",
      cor: "0",
      turbidez: "2",
      fluoreto: "0,58",
      cloro: "0,06",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    agosto: {
      ph: "7,28",
      cor: "0",
      turbidez: "1,71",
      fluoreto: "0,505",
      cloro: "0,675",
      coliformesTotais: "Ausente",
      coliformesTermotolerantes: "Ausente"
    },

    setembro: {
      ph: "7,36",
      cor: "0,0",
      turbidez: "2,02",
      fluoreto: "",
      cloro: "0,3",
      coliformesTotais: "1",
      coliformesTermotolerantes: "Ausente"
    }
  }
};


// Mês selecionado
let currentMonth = "junho";

const monthNames = {
  junho: "Junho/2026",
  agosto: "Agosto/2026",
  setembro: "Setembro/2026"
};


// Verifica se a água está dentro dos parâmetros
function verificarQualidade(data) {

  const ph = parseFloat(String(data.ph).replace(",", "."));
  const cloro = parseFloat(String(data.cloro).replace(",", "."));
  const fluoreto = parseFloat(String(data.fluoreto).replace(",", "."));

  const phOk = ph >= 6.0 && ph <= 9.5;
  const cloroOk = cloro >= 0.2 && cloro <= 5;
  const fluoretoOk = !isNaN(fluoreto) && fluoreto <= 1.5;

  const coliformesOk =
    String(data.coliformesTotais).toLowerCase() === "ausente" &&
    String(data.coliformesTermotolerantes).toLowerCase() === "ausente";

  return phOk && cloroOk && fluoretoOk && coliformesOk
    ? "Potável"
    : "Fora do padrão";
}


// Fotos da água coletada em cada ponto
const imagensPCQ = {
  P1: "img/P1 - Paraiso do Ipes.jpeg",
  P2: "img/P2 - Area verde.jpeg",
  P3: "img/P3 - Setor Bueno.jpeg",
  P4: "img/P4 - Setor Marista.jpeg",
  P5: "img/P5 - NOVA FRONTEIRA.jpeg",
  P6: "img/P6 - JARDIM AMERICA.jpeg",
  P7: "img/P7 - PARQUE DAS AGUAS.jpeg",
  P8: "img/P8- Bela Vista.jpg.jpeg.jpeg",
  P9: "img/P9 - Residencial Serra Verde.jpeg",
  P10: "img/P10 - Jardim Limeira.jpeg",
  P11: "img/P11 - Parque dos Buritis.jpeg",
  P12: "img/P12 - Universitario.jpeg",
  P13: "img/P13 - Serrano 1.jpg.jpeg",
  P14: "img/P14 - Novo Jardim Paulista.jpg.jpeg",
  P15: "img/P15 - Centro.jpg.jpeg",
  P16: "img/P16 - Setor Oeste.jpg.jpeg"
};

// Converte coordenadas no formato 10°11'48.13"S 48°54'32.24"W para decimal
function dmsParaDecimal(coordenadas) {
  const partes = [...coordenadas.matchAll(/(\d+)°(\d+)'([\d.]+)"([NSEW])/g)];
  if (partes.length !== 2) return null;

  const [lat, lng] = partes.map(([, graus, min, seg, dir]) => {
    const valor = Number(graus) + Number(min) / 60 + Number(seg) / 3600;
    return dir === "S" || dir === "W" ? -valor : valor;
  });

  return { lat, lng };
}

// Centraliza o mapa no ponto selecionado
function mostrarNoMapa(point, data) {
  const mapa = document.getElementById("pcqMap");
  const pos = dmsParaDecimal(data.coordenadas);
  if (!mapa || !pos) return;

  const src = `https://maps.google.com/maps?q=${pos.lat.toFixed(6)},${pos.lng.toFixed(6)}&z=17&output=embed`;
  if (mapa.src !== src) mapa.src = src;

  const label = document.getElementById("pcqMapLabel");
  if (label) label.textContent = `${point} · ${data.bairro}`;
}

// Parâmetros da tabela "Padrões de Qualidade da Água"
const numero = valor => parseFloat(String(valor).replace(",", "."));
const ausente = valor => String(valor).trim().toLowerCase() === "ausente";

const parametrosTabela = [
  { nome: "pH", unidade: "—", vmp: "6,0 – 9,5", campo: "ph",
    ok: v => numero(v) >= 6 && numero(v) <= 9.5 },
  { nome: "Turbidez", unidade: "NTU", vmp: "≤ 5", campo: "turbidez",
    ok: v => numero(v) <= 5 },
  { nome: "Cloro Residual Livre", unidade: "mg/L", vmp: "0,2 – 5,0", campo: "cloro",
    ok: v => numero(v) >= 0.2 && numero(v) <= 5 },
  { nome: "Fluoreto", unidade: "mg/L", vmp: "≤ 1,5", campo: "fluoreto",
    ok: v => numero(v) <= 1.5 },
  { nome: "Coliformes Totais", unidade: "UFC/100mL", vmp: "Ausência", campo: "coliformesTotais",
    ok: ausente, texto: v => ausente(v) ? "Ausente" : "Presente" },
  { nome: "Coliformes Termotolerantes", unidade: "UFC/100mL", vmp: "Ausência", campo: "coliformesTermotolerantes",
    ok: ausente, texto: v => ausente(v) ? "Ausente" : "Presente" },
  { nome: "Cor Aparente", unidade: "uH", vmp: "≤ 15", campo: "cor",
    ok: v => numero(v) <= 15 }
];

function atualizarTabelaParametros(point, data, mes) {
  const corpo = document.getElementById("paramsBody");
  if (!corpo) return;

  corpo.innerHTML = "";

  parametrosTabela.forEach(param => {
    const valor = mes[param.campo];
    const semDado = valor === undefined || String(valor).trim() === "";

    let resultado = "A definir";
    let status = "Sem dado";
    let classe = "status-data";

    if (!semDado) {
      resultado = param.texto ? param.texto(valor) : valor;
      const conforme = param.ok(valor);
      status = conforme ? "Conforme" : "Atenção";
      classe = conforme ? "status-ok" : "status-alert";
    }

    const linha = document.createElement("tr");
    [param.nome, resultado, param.unidade, param.vmp].forEach(texto => {
      const celula = document.createElement("td");
      celula.textContent = texto;
      linha.appendChild(celula);
    });

    const celulaStatus = document.createElement("td");
    celulaStatus.textContent = status;
    celulaStatus.className = classe;
    linha.appendChild(celulaStatus);

    corpo.appendChild(linha);
  });

  document.getElementById("paramsPoint").textContent = `${point} · ${data.bairro}`;
  document.getElementById("paramsMonth").textContent = monthNames[currentMonth];

  const qualidade = Object.keys(mes).length ? verificarQualidade(mes) : "Sem dados";
  const pill = document.getElementById("paramsQuality");
  pill.textContent = qualidade;
  pill.classList.toggle("bad", qualidade === "Fora do padrão");
}

// Atualiza as informações do ponto
function updatePCQ(point) {

  const data = pcqData[point];
  
const pcqImage = document.getElementById("pcqImage");


if (pcqImage && imagensPCQ[point]) {
  pcqImage.src = imagensPCQ[point];
  pcqImage.alt = `Foto do local ${point}`;
}


  if (!data) return;

  mostrarNoMapa(point, data);

  const mes = data[currentMonth] || {};


  document.getElementById("pcqTitle").textContent =
    `${point} · ${data.bairro}`;

  document.getElementById("pcqCode").textContent =
    point;

  document.getElementById("pcqType").textContent =
    data.tipo;

  document.getElementById("pcqAddress").textContent =
    data.endereco;

  document.getElementById("pcqCoordinates").textContent =
    data.coordenadas;


  atualizarTabelaParametros(point, data, mes);
}


// Selecionar ponto P1, P2, P3...
document.querySelectorAll(".pcq-card").forEach(card => {

  card.addEventListener("click", () => {

    document.querySelectorAll(".pcq-card")
      .forEach(c => c.classList.remove("active"));

    card.classList.add("active");

    const point =
      card.querySelector(".pcq-id").textContent.trim();

    updatePCQ(point);
  });

});


// Menu de meses
const monthButton = document.getElementById("monthButton");
const monthOptions = document.getElementById("monthOptions");

if (monthButton && monthOptions) {

  monthButton.addEventListener("click", event => {

    event.stopPropagation();

    monthOptions.classList.toggle("show");

  });


  monthOptions.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", event => {

      event.stopPropagation();

      currentMonth = button.dataset.month;

      monthButton.textContent =
        monthNames[currentMonth];

      monthOptions.classList.remove("show");


      const activeCard =
        document.querySelector(".pcq-card.active");

      if (activeCard) {

        const point =
          activeCard
            .querySelector(".pcq-id")
            .textContent
            .trim();

        updatePCQ(point);

      }

    });

  });


  document.addEventListener("click", () => {

    monthOptions.classList.remove("show");

  });

}


// Começa mostrando P1
updatePCQ("P1");



  // Active nav highlight on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });

  // Session / logout (nav)
  const navUser = document.getElementById('navUser');
  if (navUser) {
    const raw = localStorage.getItem('ypora_session');
    let session = null;
    try { session = raw ? JSON.parse(raw) : null; } catch (e) { session = null; }

    if (session && session.name) {
      const roleLabel = session.role === 'admin' ? 'Administrador' : 'Usuário';
      navUser.innerHTML = `
        <span class="user-greet">👋 ${session.name} · ${roleLabel}</span>
        <button type="button" class="btn-logout" id="btnLogout">Sair</button>
      `;
      document.getElementById('btnLogout').addEventListener('click', () => {
        localStorage.removeItem('ypora_session');
        window.location.href = 'login.html';
      });
    } else {
      navUser.innerHTML = `<a href="login.html" class="btn-login">Entrar</a>`;
    }
  }

  
function atualizarResumoInicial() {
  const pontos = Object.values(pcqData);
  const mes = "setembro";

  function calcularMedia(parametro) {
    const valores = pontos
      .map(ponto => {
        const valor = ponto[mes]?.[parametro];

        if (valor === undefined || valor === null || String(valor).trim() === "") {
          return NaN;
        }

        return Number(String(valor).replace(",", "."));
      })
      .filter(valor => Number.isFinite(valor));

    if (!valores.length) return "—";

    const media = valores.reduce((soma, valor) => soma + valor, 0) / valores.length;

    return media.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  document.getElementById("homePh").textContent = calcularMedia("ph");
  document.getElementById("homeTurbidity").textContent = calcularMedia("turbidez");
  document.getElementById("homeChlorine").textContent = calcularMedia("cloro");
  document.getElementById("homeFluoride").textContent = calcularMedia("fluoreto");
  document.getElementById("homeLastUpdate").textContent = "Setembro/2026";
}

atualizarResumoInicial();

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target.id);
  }
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.style.display === 'flex') closeModal(modal.id);
    });
  }
});

// Galeria de fotos das amostras
const samplesGrid = document.getElementById('samplesGrid');
const samplePoints = Object.keys(imagensPCQ);
let currentSample = 0;

if (samplesGrid) {
  samplePoints.forEach((point, index) => {
    const data = pcqData[point] || {};
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'sample-card';
    card.innerHTML = `
      <div class="sample-img"><img src="${imagensPCQ[point]}" alt="Amostra de água do ponto ${point}" loading="lazy"></div>
      <div class="sample-body">
        <span class="sample-code">${point}</span>
        <h3>${data.bairro || ''}</h3>
        <span class="sample-type">${data.tipo || ''}</span>
      </div>
    `;
    card.addEventListener('click', () => openSample(index));
    samplesGrid.appendChild(card);
  });
}

function showSample(index) {
  currentSample = (index + samplePoints.length) % samplePoints.length;
  const point = samplePoints[currentSample];
  const data = pcqData[point] || {};
  const img = document.getElementById('sampleModalImg');
  img.src = imagensPCQ[point];
  img.alt = `Amostra de água do ponto ${point}`;
  document.getElementById('sampleModalTitle').textContent = `${point} · ${data.bairro || ''}`;
  document.getElementById('sampleModalInfo').textContent =
    [data.tipo, data.endereco].filter(Boolean).join(' · ');
  document.getElementById('sampleModalCount').textContent =
    `${currentSample + 1} de ${samplePoints.length}`;
}

function openSample(index) {
  showSample(index);
  openModal('modal-amostra');
}

document.getElementById('samplePrev')?.addEventListener('click', () => showSample(currentSample - 1));
document.getElementById('sampleNext')?.addEventListener('click', () => showSample(currentSample + 1));

document.addEventListener('keydown', (event) => {
  const modal = document.getElementById('modal-amostra');
  if (!modal || modal.style.display !== 'flex') return;
  if (event.key === 'ArrowLeft') showSample(currentSample - 1);
  if (event.key === 'ArrowRight') showSample(currentSample + 1);
});

document.getElementById('sampleShowData')?.addEventListener('click', () => {
  const point = samplePoints[currentSample];
  closeModal('modal-amostra');
  const card = [...document.querySelectorAll('.pcq-card')]
    .find(c => c.querySelector('.pcq-id').textContent.trim() === point);
  if (card) card.click();
  const headerH = document.getElementById('header').offsetHeight;
  const top = document.getElementById('mapa').getBoundingClientRect().top + window.scrollY - headerH;
  window.scrollTo({ top, behavior: 'smooth' });
});
