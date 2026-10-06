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

  /// PCQ card click
const pcqData = {
  P1: {
    bairro: "Paraíso dos Ipês",
    tipo: "Residencial",
    endereco: "Rua 21, n. 201",
    coordenadas: `10°11'48.13"S 48°54'32.24"W`
  },

  P2: {
    bairro: "Área Verde",
    tipo: "Residencial",
    endereco: "Rua 02, n. 106",
    coordenadas: `10°11'12.04"S 48°54'11.19"W`
  },

  P3: {
    bairro: "Setor Bueno",
    tipo: "Comercial",
    endereco: "Rua 06, Qd. 01, Lt. 39",
    coordenadas: `10°11'04.05"S 48°54'37.22"W`
  },

  P4: {
    bairro: "Setor Marista",
    tipo: "Residencial",
    endereco: "Rua José Ferreira Borges, prox. ao complexo poliesportivo",
    coordenadas: `10°11'38.02"S 48°55'08.04"W`
  },

  P5: {
    bairro: "Nova Fronteira",
    tipo: "Comercial",
    endereco: "Rua 06, Qd. 23, Lt. 44 (Borracharia do Galo)",
    coordenadas: `10°11'58.7"S 48°53'23.8"W`
  },

  P6: {
    bairro: "Jardim América",
    tipo: "Residencial",
    endereco: "Rua 13, n. 1760, Qd. 52, Lt. 03",
    coordenadas: `10°11'39.7"S 48°54'24.0"W`
  },

  P7: {
    bairro: "Parque das Águas",
    tipo: "Comercial",
    endereco: "Av. Beira Lago, Parque das Águas",
    coordenadas: `10°11'09.5"S 48°53'15.9"W`
  },

  P8: {
    bairro: "Setor Bela Vista",
    tipo: "Residencial",
    endereco: "Rua Barão do Rio Branco, n. 1003",
    coordenadas: `10°10'48.7"S 48°53'02.9"W`
  },

  P9: {
    bairro: "Residencial Serra Verde",
    tipo: "Residencial",
    endereco: "A definir",
    coordenadas: `10°11'42.30"S 48°52'19.68"W`
  },

  P10: {
    bairro: "Jardim Limeira",
    tipo: "Residencial",
    endereco: "Rua 25B, Qd. 31, Lt. 37",
    coordenadas: `10°11'12.69"S 48°52'26.83"W`
  },

  P11: {
    bairro: "Parque dos Buritis",
    tipo: "Residencial",
    endereco: "Rua 10 (Casa de esquina com a Assembleia de Deus)",
    coordenadas: `10°09'39.54"S 48°52'23.39"W`
  },

  P12: {
    bairro: "Setor Universitário",
    tipo: "Comercial",
    endereco: "Avenida Paraíso",
    coordenadas: `10°12'30.15"S 48°52'56.35"W`
  },

  P13: {
    bairro: "Serrano",
    tipo: "Residencial",
    endereco: "Rua Hugo de Carvalho Ramos, n. 225",
    coordenadas: `10°10'03.9"S 48°52'14.0"W`
  },

  P14: {
    bairro: "Novo Jardim Paulista",
    tipo: "Residencial",
    endereco: "Rua 07, Qd. 39, S/N",
    coordenadas: `10°11'09.7"S 48°54'21.4"W`
  },

  P15: {
    bairro: "Centro",
    tipo: "Comercial",
    endereco: "Rua Tupinambás, n. 603 (Em frente a Pedal Ciclo)",
    coordenadas: `10°10'16.4"S 48°53'08.4"W`
  },

  P16: {
    bairro: "Oeste",
    tipo: "Comercial",
    endereco: "Bernardinho Maciel (próx. ao Supermercado econômico)",
    coordenadas: `10°10'45.4"S 48°53'54.2"W`
  }
};

function updatePCQ(point) {
  const data = pcqData[point];

  if (!data) return;

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
}

document.querySelectorAll(".pcq-card").forEach(card => {
  card.addEventListener("click", () => {

    document.querySelectorAll(".pcq-card")
      .forEach(c => c.classList.remove("active"));

    card.classList.add("active");

    const point = card.querySelector(".pcq-id").textContent.trim();

    updatePCQ(point);
  });
});

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