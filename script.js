// CONFIGURAÇÃO DA EMPRESA
const WHATSAPP_NUMBER = "5514998007658";
const DEFAULT_LANGUAGE = "pt-BR";

const translations = {
  "pt-BR": {
    title: "JOTA GÁS | Instalações e Manutenção Profissional",
    description: "Jota Gás — instalações, manutenção e serviços profissionais em gás. Atendimento pelo WhatsApp.",
    nav: ["Início", "Serviços", "Trabalhos", "Certificação", "Falar no WhatsApp"],
    eyebrow: "JOTA GÁS · SERVIÇO PROFISSIONAL",
    hero1: "Sua cozinha em boas mãos.",
    hero2: "Serviço seguro,",
    hero3: "resultado de confiança.",
    intro: "Instalação, manutenção e ajustes em sistemas a gás com atenção aos detalhes e compromisso com a segurança.",
    quote: "Pedir orçamento",
    services: "Conhecer serviços",
    proof: "Profissional qualificado pelo SENAI",
    proofSub: "Atendimento responsável e personalizado",
    strip: ["INSTALAÇÕES", "MANUTENÇÃO", "REGULAGEM", "CONVERSÃO"],
    servicesEyebrow: "O QUE FAZEMOS",
    servicesTitle: "Soluções para o seu",
    servicesTitle2: "sistema de gás.",
    servicesIntro: "Do ajuste ao serviço de manutenção, conte com atendimento profissional e explicações claras em cada etapa.",
    serviceNames: ["Troca de resistência", "Regulação de fogo industrial", "Conversão de fogão", "Instalações e manutenção"],
    serviceDescriptions: [
      "Serviço de substituição e verificação do equipamento, conforme o modelo e a necessidade.",
      "Avaliação e ajuste para ajudar o equipamento a funcionar de maneira adequada.",
      "Conversão de fogão de gás engarrafado para gás canalizado, conforme compatibilidade técnica.",
      "Atendimento para avaliar a sua necessidade e indicar a solução adequada."
    ],
    serviceLink: "Consultar serviço",
    workEyebrow: "NA PRÁTICA",
    workTitle: "Trabalho real.",
    workTitle2: "Resultado visível.",
    workIntro: "Esta área está pronta para receber seus vídeos e fotos de serviços realizados. Troque os arquivos de exemplo pelos seus.",
    workNames: ["Troca de resistência", "Antes e depois", "Fogão industrial", "Gás Encanado para gás de botijão"],
    workDescriptions: ["Veja como é realizado o serviço.", "Comparação visual do trabalho realizado.", "Regulação de equipamento industrial.", "Serviço de conversão de fogão."],
    qualificationEyebrow: "CONFIANÇA E QUALIFICAÇÃO",
    qualificationTitle: "Profissional qualificado",
    qualificationTitle2: "pelo SENAI.",
    qualificationIntro: "Compromisso com a formação profissional, a responsabilidade e a qualidade em cada atendimento.",
    qualificationPoints: ["Qualificação profissional", "Comunicação clara com o cliente", "Atenção aos procedimentos de segurança"],
    certificateButton: "Ver certificado em PDF",
    contactEyebrow: "VAMOS CONVERSAR",
    contactTitle: "Precisa de ajuda",
    contactTitle2: "com o seu gás?",
    contactIntro: "Conte o que você precisa e solicite seu orçamento diretamente pelo WhatsApp.",
    contactButton: "Conversar pelo WhatsApp",
    contactSideTitle: "Atendimento direto",
    contactSideIntro: "Envie uma mensagem, tire suas dúvidas e combine os detalhes do serviço.",
    footerIntro: "Serviços profissionais em gás com atenção à qualidade e à segurança.",
    help: "Precisa de ajuda?",
    defaultMessage: "Olá, Jota Gás! Gostaria de solicitar um orçamento."
  },
  "es": {
    title: "JOTA GÁS | Instalaciones y mantenimiento profesional",
    description: "Jota Gás — instalaciones, mantenimiento y servicios profesionales de gas. Atención por WhatsApp.",
    nav: ["Inicio", "Servicios", "Trabajos", "Certificación", "Hablar por WhatsApp"],
    eyebrow: "JOTA GÁS · SERVICIO PROFESIONAL",
    hero1: "Tu cosina en buenas manos.",
    hero2: "Servicio seguro,",
    hero3: "resultados confiables.",
    intro: "Instalación, mantenimiento y ajustes en sistemas de gas con atención a los detalles y compromiso con la seguridad.",
    quote: "Solicitar presupuesto",
    services: "Conocer servicios",
    proof: "Profesional cualificado por SENAI",
    proofSub: "Atención responsable y personalizada",
    strip: ["INSTALACIONES", "MANTENIMIENTO", "REGULACIÓN", "CONVERSIÓN"],
    servicesEyebrow: "QUÉ HACEMOS",
    servicesTitle: "Soluciones para tu",
    servicesTitle2: "sistema de gas.",
    servicesIntro: "Desde ajustes hasta mantenimiento, recibe atención profesional y explicaciones claras en cada etapa.",
    serviceNames: ["Cambio de resistencia", "Regulación de fuego industrial", "Conversión de cocina", "Instalaciones y mantenimiento"],
    serviceDescriptions: [
      "Sustitución y revisión del equipo según el modelo y la necesidad.",
      "Evaluación y ajuste para ayudar a que el equipo funcione correctamente.",
      "Conversión de cocina de gas envasado a gas canalizado, según compatibilidad técnica.",
      "Atención para evaluar tu necesidad e indicar una solución adecuada."
    ],
    serviceLink: "Consultar servicio",
    workEyebrow: "EN LA PRÁCTICA",
    workTitle: "Trabajo real.",
    workTitle2: "Resultados visibles.",
    workIntro: "Esta sección está preparada para tus videos y fotos de trabajos realizados. Reemplaza los archivos de ejemplo por los tuyos.",
    workNames: ["Cambio de resistencia", "Antes y después", "Fuego industrial", "Gas envasado a canalizado"],
    workDescriptions: ["Mira cómo se realiza el servicio.", "Comparación visual del trabajo realizado.", "Regulación de equipo industrial.", "Conversión de cocina a gas canalizado."],
    qualificationEyebrow: "CONFIANZA Y FORMACIÓN",
    qualificationTitle: "Profesional cualificado",
    qualificationTitle2: "por SENAI.",
    qualificationIntro: "Compromiso con la formación profesional, la responsabilidad y la calidad en cada atención.",
    qualificationPoints: ["Formación profesional", "Comunicación clara con el cliente", "Atención a los procedimientos de seguridad"],
    certificateButton: "Ver certificado en PDF",
    contactEyebrow: "HABLEMOS",
    contactTitle: "¿Necesitas ayuda",
    contactTitle2: "con tu gas?",
    contactIntro: "Cuéntanos qué necesitas y solicita tu presupuesto directamente por WhatsApp.",
    contactButton: "Hablar por WhatsApp",
    contactSideTitle: "Atención directa",
    contactSideIntro: "Envía un mensaje, resuelve tus dudas y coordina los detalles del servicio.",
    footerIntro: "Servicios profesionales de gas con atención a la calidad y la seguridad.",
    help: "¿Necesitas ayuda?",
    defaultMessage: "Hola, Jota Gás. Quisiera solicitar un presupuesto."
  }
};

function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function setLanguage(language) {
  const t = translations[language] || translations[DEFAULT_LANGUAGE];
  document.documentElement.lang = language;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;

  const navLinks = document.querySelectorAll("#nav a");
  t.nav.forEach((value, index) => {
    if (navLinks[index]) navLinks[index].childNodes[0].nodeType === 3
      ? navLinks[index].childNodes[0].textContent = value
      : navLinks[index].prepend(document.createTextNode(value));
  });

  const textMap = [
    [".hero-copy .eyebrow", t.eyebrow],
    [".hero h1 span", t.hero2],
    [".hero-copy>p", t.intro],
    [".hero-actions .btn-orange", t.quote],
    [".hero-actions .btn-outline", t.services],
    [".hero-proof strong", t.proof],
    [".hero-proof small", t.proofSub],
    [".services .section-heading .eyebrow", t.servicesEyebrow],
    [".services .section-heading h2", t.servicesTitle + " " + t.servicesTitle2],
    [".services .section-heading>p", t.servicesIntro],
    [".work-section .section-heading .eyebrow", t.workEyebrow],
    [".work-section .section-heading h2", t.workTitle + " " + t.workTitle2],
    [".work-section .section-heading>p", t.workIntro],
    [".qualification-copy .eyebrow", t.qualificationEyebrow],
    [".qualification h2", t.qualificationTitle + " " + t.qualificationTitle2],
    [".qualification-copy>p", t.qualificationIntro],
    [".contact-copy .eyebrow", t.contactEyebrow],
    [".contact-copy h2", t.contactTitle + " " + t.contactTitle2],
    [".contact-copy>p", t.contactIntro],
    ["#contactWhatsapp", t.contactButton],
    [".contact-side h3", t.contactSideTitle],
    [".contact-side p", t.contactSideIntro],
    [".footer-main>p", t.footerIntro],
    [".help-bubble", t.help]
  ];
  textMap.forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (el) {
      if (selector === ".hero h1 span") el.textContent = value;
      else if (selector.includes("h2") && selector !== ".qualification h2" && selector !== ".contact-copy h2") {
        // Keep the heading's line structure readable while translating its words.
        el.textContent = value;
      } else if (selector === ".qualification h2") {
        el.innerHTML = value.replace(t.qualificationTitle2, '<span>' + t.qualificationTitle2 + '</span>');
      } else if (selector === ".contact-copy h2") {
        el.innerHTML = value.replace(t.contactTitle2, '<span>' + t.contactTitle2 + '</span>');
      } else if (selector === "#contactWhatsapp") {
        el.innerHTML = value + ' <span>↗</span>';
      } else {
        el.textContent = value;
      }
    }
  });

  // Hero heading has three lines and is translated as a single block.
  const heroHeading = document.querySelector(".hero h1");
  heroHeading.innerHTML = t.hero1 + "<br><span>" + t.hero2 + "</span><br>" + t.hero3;

  document.querySelectorAll(".trust-grid span").forEach((el, i) => el.textContent = t.strip[i] || el.textContent);
  document.querySelectorAll(".service-card h3").forEach((el, i) => el.textContent = t.serviceNames[i] || el.textContent);
  document.querySelectorAll(".service-card p").forEach((el, i) => el.textContent = t.serviceDescriptions[i] || el.textContent);
  document.querySelectorAll(".service-card .text-link").forEach((el, i) => {
    el.innerHTML = t.serviceLink + ' <span>↗</span>';
    el.dataset.service = t.serviceNames[i];
  });
  document.querySelectorAll(".work-info h3").forEach((el, i) => el.textContent = t.workNames[i] || el.textContent);
  document.querySelectorAll(".work-info p").forEach((el, i) => el.textContent = t.workDescriptions[i] || el.textContent);
  document.querySelectorAll(".check-list li").forEach((el, i) => {
    const icon = el.querySelector("span");
    el.textContent = "";
    el.append(icon, document.createTextNode(" " + t.qualificationPoints[i]));
  });
  document.querySelector(".qualification .btn-orange").innerHTML = t.certificateButton + ' <span>↗</span>';

  document.getElementById("floatingWhatsapp").href = whatsappLink(t.defaultMessage);
  document.getElementById("contactWhatsapp").href = whatsappLink(t.defaultMessage);
  document.querySelectorAll("[data-service]").forEach((link) => {
    link.onclick = () => {
      const service = link.getAttribute("data-service");
      const prefix = language === "es" ? "Hola, Jota Gás. Me interesa el servicio: " : "Olá, Jota Gás! Tenho interesse no serviço: ";
      const suffix = language === "es" ? ". Quisiera solicitar un presupuesto." : ". Gostaria de solicitar um orçamento.";
      document.getElementById("contactWhatsapp").href = whatsappLink(prefix + service + suffix);
    };
  });
}

const languageSelect = document.getElementById("languageSelect");
languageSelect.value = DEFAULT_LANGUAGE;
languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
setLanguage(DEFAULT_LANGUAGE);

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
