// Le data en francais :

// Radar chart en francais
const chartData_F = {
  "labels": ["Communication", "Analyse de données", "Gestion de projet", "Créativité", "Compétences techniques", "Travail d'équipe"],
  "datasets": [{
    "label": "Auto-évaluation",
    "data": [8, 7, 8, 6, 7, 8],
    "fill": true,
    "backgroundColor": "rgba(54, 162, 235, 0.2)",
    "borderColor": "rgb(54, 162, 235)",
    "pointBackgroundColor": "rgb(54, 162, 235)",
    "pointBorderColor": "#fff",
    "pointHoverBackgroundColor": "#fff",
    "pointHoverBorderColor": "rgb(54, 162, 235)"
  }]
};


// les langages que je maitrise avec le pourcentage :
const barDataM_F = {
  labels: ["C", "C++", "Java", "Python", "PHP", "HTML", "CSS", "JS"],
  datasets: [
    {
      label: "Je suis confortable avec le langage en % ",
      data: [80, 20, 70, 90, 40, 70, 30, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 200, 64, 0.6)",
        "rgba(255, 150, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 100, 255, 1)",
        "rgba(255, 150, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// parcours
const data_parcours_F = {
  labels: [
    "Fin des études secondaires",
    "Lycée",
    "Licence",
    "Cycle d'ingénieur",
    "Fin",
  ],
  datasets: [
    {
      label: "Parcours Académique",
      data: [0, 3, 6, 9, 9],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.1,
      pointBackgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

// Visualisation vs :
const barDataVS_F = {
  labels: ["Projets Dev ", "Projets Data & BI", "Mixte"],
  datasets: [
    {
      label: "Nbre de projets",
      data: [3, 3, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
// Maitrise des bibliotheque python for DS :

const bib_data_F = {
  labels: [
    "numpy",
    "pandas",
    "bokeh",
    "Matplotlib",
    "Scikit learn",
    "TensorFlow",
    "requests",
    "time",
    "json",
    "ftplib",
  ],
  datasets: [
    {
      label: "Je suis confortable avec ... en  % ",
      data: [80, 90, 85, 70, 40, 70, 30, 60, 50, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 200, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 150, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 100, 255, 1)",
        "rgba(255, 150, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const experience_data_F = {
  labels: ["Expérience 1", "Expérience 2"],
  datasets: [
    {
      label: "Durée (semaine)",
      data: [8, 6],
      backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const experiences_F = [
  "Poste: Data Scientist\nEntreprise: AI BOOST FOR INDUSTRIES\nRéalisations: Analyse des appels téléphoniques",
  "Poste: Data Scientist\nEntreprise: FST MARRAKECH\nRéalisations: Détection de violence",
];

// Data in english :

// Radar chart en anglais
var chartData_E ={
  "labels": ["Communication", "Data Analysis", "Project Management", "Creativity", "Technical Skills", "Teamwork"],
  "datasets": [{
    "label": "Self-evaluation",
    "data": [8, 7, 8, 6, 7, 8],
    "fill": true,
    "backgroundColor": "rgba(54, 162, 235, 0.2)",
    "borderColor": "rgb(54, 162, 235)",
    "pointBackgroundColor": "rgb(54, 162, 235)",
    "pointBorderColor": "#fff",
    "pointHoverBackgroundColor": "#fff",
    "pointHoverBorderColor": "rgb(54, 162, 235)"
  }]
}; 

// les langages que je maitrise avec le pourcentage :
const barDataM_E = {
  labels: ["C", "C++", "Java", "Python", "PHP", "HTML", "CSS", "JS"],
  datasets: [
    {
      label: "what language I feel confortable with in % ",
      data: [80, 20, 70, 90, 40, 70, 30, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 200, 64, 0.6)",
        "rgba(255, 150, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 100, 255, 1)",
        "rgba(255, 150, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// parcours
const data_parcours_E = {
  labels: [
    "End of secondary school",
    "High school",
    "License",
    "Engineer",
    "End",
  ],
  datasets: [
    {
      label: "Academic background",
      data: [0, 3, 6, 9, 9],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.1,
      pointBackgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

// Visualisation vs :
const barDataVS_E = {
  labels: ["Dev projects", "Data & BI Projects", "both"],
  datasets: [
    {
      label: "Number of projects",
      data: [3, 3, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Maitrise des bibliotheque python for DS :

const bib_data_E = {
  labels: [
    "numpy",
    "pandas",
    "bokeh",
    "Matplotlib",
    "Scikit learn",
    "TensorFlow",
    "requests",
    "time",
    "json",
    "ftplib",
  ],
  datasets: [
    {
      label: "I feel compfortable with ... in % ",
      data: [80, 90, 85, 70, 40, 70, 30, 60, 50, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 200, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 150, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 100, 255, 1)",
        "rgba(255, 150, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const experience_data_E = {
  labels: ["Experience 1", "Experience 2"],
  datasets: [
    {
      label: "Duration (weeks)",
      data: [8, 6],
      backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const experiences_E = [
  "Position: Data Scientist\nCompany: AI BOOST FOR INDUSTRIES\nAchievements: Analysis of phone calls",
  "Position: Data Scientist\nCompany: FST MARRAKECH\nAchievements: Violence detection",
];

// Function to initialize or update a chart
function initChart(ctx, config) {
  if (ctx.chart) {
    ctx.chart.destroy();
  }
  ctx.chart = new Chart(ctx, config);
}

// Function to get chart options
function getChartOptions(chartId, lang) {
  chartId === "radar_F"
    ? (commonOptions = { elements: { line: { borderWidth: 3 } } })
    : (commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 10,
          },
        },
      });

  if (chartId === "radar_F") {
  }

  if (chartId === "parcours_F") {
    return {
      ...commonOptions,
      scales: {
        ...commonOptions.scales,
        x: {
          title: {
            display: true,
            text: "Étapes du parcours",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Mon Parcours Académique",
        },
        legend: {
          display: false,
        },
      },
    };
  }
  if (chartId === "experience_F") {
    return {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: lang === "fr" ? "Durée (semaine)" : "Duration (weeks)",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text:
            lang === "fr"
              ? "Mes Expériences Professionnelles"
              : "My Professional Experiences",
        },
        tooltip: {
          callbacks: {
            afterLabel: function (context) {
              const experiences = lang === "fr" ? experiences_F : experiences_E;
              return experiences[context.dataIndex].split("\n");
            },
          },
        },
      },
    };
  }
  return commonOptions;
}

// Function to update all charts
function updateCharts(lang) {
  const charts = [
    {
      id: "radar_F",
      data: lang === "fr" ? chartData_F : chartData_E,
      type: "radar",
    },
    {
      id: "langue_F",
      data: lang === "fr" ? barDataM_F : barDataM_E,
      type: "bar",
    },
    {
      id: "parcours_F",
      data: lang === "fr" ? data_parcours_F : data_parcours_E,
      type: "line",
    },
    {
      id: "vs_F",
      data: lang === "fr" ? barDataVS_F : barDataVS_E,
      type: "bar",
    },
    {
      id: "bib_python_F",
      data: lang === "fr" ? bib_data_F : bib_data_E,
      type: "bar",
    },
    {
      id: "experience_F",
      data: lang === "fr" ? experience_data_F : experience_data_E,
      type: "bar",
    },
  ];

  charts.forEach((chart) => {
    const ctx = document.getElementById(`${chart.id}`).getContext("2d");
    initChart(ctx, {
      type: chart.type,
      data: chart.data,
      options: getChartOptions(chart.id, lang),
    });
  });
}

// Event listeners for language buttons
document
  .getElementById("fr")
  .addEventListener("click", () => updateCharts("fr"));
document
  .getElementById("en")
  .addEventListener("click", () => updateCharts("en"));

// Initialize charts in French on page load
document.addEventListener("DOMContentLoaded", () => updateCharts("fr"));

// functions for hide button

const frBtn = document.getElementById("fr");
const enBtn = document.getElementById("en");

frBtn.addEventListener("click", function () {
  frBtn.classList.add("hidebtn");
  enBtn.classList.remove("hidebtn");
  document.getElementById("english").classList.toggle("opa");
  console.log("fr");
  console.log(frBtn);
  console.log(enBtn);
});
enBtn.addEventListener("click", function () {
  enBtn.classList.add("hidebtn");
  frBtn.classList.remove("hidebtn");
  document.getElementById("english").classList.toggle("opa");
});
// Functions for project details

function showDetails(params) {
  document
    .querySelectorAll(".overlay")
    [+params[7] - 1].classList.remove("hidden");
  document.getElementById(`${params}`).classList.remove("hidden");
  document.body.classList.add("bodyH");
  document
    .querySelectorAll(".overlay")
    [+params[7] - 1].addEventListener("click", function () {
      document
        .querySelectorAll(".overlay")
        [+params[7] - 1].classList.add("hidden");
      document.getElementById(`${params}`).classList.add("hidden");
      document.body.classList.remove("bodyH");
    });
}

function closeDetails(params) {
  document.querySelectorAll(".overlay")[+params[7] - 1].classList.add("hidden");
  document.getElementById(`${params}`).classList.add("hidden");
  document.body.classList.remove("bodyH");
}

function customeAlert() {
  document.querySelector(".alert").classList.remove("alert-hidden");
  document.querySelector(".alert").classList.add("alert-animation");
  setTimeout(() => {
    document.querySelector(".alert").classList.add("alert-hidden");
    document.querySelector(".alert").classList.remove("alert-animation");
    console.log("Retardée d'une 4 seconde.");
  }, 4100);
  console.log("test");
}

document.getElementById("envoyer").addEventListener("click", customeAlert);
