// Get the elements from all the html file, go salma, don't be upset.

// The Menu Element :
const Acceuil_menu = document.getElementById("Acceuil");
const details = document.getElementById("details_moi");
const parcours_menu = document.getElementById("parcours");
const projet_menu = document.getElementById("projets");
const competence_menu = document.getElementById("competences");
const experience_menu = document.getElementById("experience");
const activite_menu = document.getElementById("activite");
const contact = document.getElementById("contact");
const fr_menu = document.getElementById("fr");
const en_menu = document.getElementById("en");

// Pour la translation de menu :
const translations_menu = {
  Acceuil: {
    fr: "Acceuil",
    en: "Home",
  },
  details: {
    fr: "Détails",
    en: "Details",
  },
  parcours: {
    fr: "Parcours",
    en: "Journey",
  },
  projets: {
    fr: "Projets",
    en: "Projects",
  },
  competences: {
    fr: "Compétences",
    en: "Skills",
  },
  experience: {
    fr: "Expérience",
    en: "Experience",
  },
  activite: {
    fr: "Autre activités ",
    en: "Other activities",
  },
  contact: {
    fr: "Contact",
    en: "Contact",
  },
  // ``
  francais: {
    fr: `<i class="fas fa-language"></i> Français`,
    en: `<i class="fas fa-language"></i> French`,
  },
  anglais: {
    fr: `<i class="fas fa-language"></i> Anglais`,
    en: `<i class="fas fa-language"></i> English`,
  },
};

// La premier section Acceuil :
// Les elements de l'Acceuil :
titre = document.getElementById("titre1");
p1 = document.getElementById("presente1");
p2 = document.getElementById("presente2");
p3 = document.getElementById("presente3");
cv_fr = document.getElementById("cv_fr");
cv_en = document.getElementById("cv_en");
r_fr = document.getElementById("r_fr");
r_en = document.getElementById("r_en");
// transaltions Acceuil
const translations_home = {
  titre: {
    fr: "Je me présente :",
    en: "Let me introduce myself :",
  },
  p1: {
    fr: "Bonjour ! Je m'appelle Ouahib Salma, étudiante en deuxième année d'ingénierie à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), filière Business Intelligence and Data Analytics. J'ai obtenu une licence en Sciences Mathématiques et Informatique (SMI) à la Faculté des Sciences Semlalia Marrakech (FSSM).",
    en: "Hello! My name is Ouahib Salma, a second-year engineering student at the National School of Computer Science and Systems Analysis (ENSIAS), specializing in Business Intelligence and Data Analytics. I hold a Bachelor's degree in Mathematical and Computer Sciences (SMI) from the Faculty of Sciences Semlalia Marrakech (FSSM).",
  },
  p2: {
    fr: "Passionnée par l'ingénierie, la Data Analytics, la Business Intelligence, le Data Engineering et l'Analytics, ma mission est de transformer les données brutes en chefs-d'œuvre stratégiques permettant de prendre des décisions informées et de créer une valeur ajoutée au sein d'une entreprise. Avec un éventail riche de compétences en Power BI, Tableau, Python, Data Warehousing, Intelligence Artificielle (ML & DL), et gestion de projet, je suis dévouée à l'art du storytelling de données. Je suis ravie de mettre mes compétences et mes connaissances au service de défis réels et de contribuer à des projets révolutionnaires qui dévoilent le véritable potentiel des données.",
    en: "Passionate about engineering, Data Analytics, Business Intelligence, Data Engineering, and Analytics, my mission is to transform raw data into strategic masterpieces that enable informed decision-making and create added value within a company. With a rich array of skills in Power BI, Tableau, Python, Data Warehousing, Artificial Intelligence (ML & DL), and project management, I am dedicated to the art of data storytelling. I am excited to apply my skills and knowledge to real-world challenges and contribute to groundbreaking projects that unveil the true potential of data.",
  },
  p3: {
    fr: "Explorez tout information sur moi en défilant",
    en: "Let me introduce myself :",
  },
  cv_fr: {
    fr: "CV Version_Francaise",
    en: "CV French_Version",
  },
  cv_en: {
    fr: "CV Version_Anglaise",
    en: "CV English_Version",
  },
  r_fr: {
    fr: "Résumé Version_Francais",
    en: "Resume French_Version",
  },
  r_en: {
    fr: "Résumé Version_Anglais",
    en: "Resume English_Version",
  },
};

// Les elements de details :
titre2 = document.getElementById("titre2");
date_titre = document.getElementById("titre_date");
lieu_O_titre = document.getElementById("titre_O");
lieu_O = document.getElementById("info_lieu_O");
lieu_H_titre = document.getElementById("titre_H");

// translations Acceuil
const translations_details = {
  titre: {
    fr: "Plus de détails :",
    en: "More details :",
  },
  date_titre: {
    fr: "Date de naissance :",
    en: "Date of birth :",
  },
  lieu_O_titre: {
    fr: "Ville d'origine :",
    en: "Hometown :",
  },
  ville: {
    fr: "Marrakech",
    en: "Marrakesh",
  },
  lieu_H_titre: {
    fr: "Ville Actuelle :",
    en: "Current city :",
  },
};

// Les elements de parcours :
titre3 = document.getElementById("titre3");
exp_pa = document.getElementById("title_exp_pa");
pa_parcours = document.getElementById("paragraphe_pa");
progression = document.getElementById("progression");
ing = document.getElementById("ing");
licence = document.getElementById("licence");
technicien = document.getElementById("technicien");
bac = document.getElementById("bac");
/*
spam_ing = document.getElementById("spam_ing");
spam_licence = document.getElementById("spam_licence");
spam_technicien = document.getElementById("spam_technicien");
spam_bac = document.getElementById("spam_bac");
*/
// translations Acceuil
const translations_parcours = {
  titre: {
    fr: "Parcours académique :",
    en: "Academic background :",
  },
  title_exp: {
    fr: "Expérience",
    en: "Experience ",
  },
  pa_parcours: {
    fr: "J'étais une étudiante passionnée par les mathématiques, ce qui m'a poussé à choisir la filière scientifique avec une spécialisation en mathématiques pour le baccalauréat. J'aime l'informatique, mais je n'étais pas encore complètement immergée dans ce domaine. C'est pourquoi j'ai décidé d'étudier la filière mathématiques et informatique à la faculté. J'étais major de ma promotion parce que nous étudions que des sujets mathématiques et informatique, et qui m'intéressaient. Par la suite, j'ai été admise à l'ENSIAS pour poursuivre ma carrière et m'épanouir dans les activités parascolaires.",
    en: "I was a student passionate about mathematics, which led me to choose the scientific path with a specialization in mathematics for the baccalaureate. I love computer science, but I wasn't fully immersed in this field yet. That's why I decided to study mathematics and computer science at the university. I was the top of my class because we only studied subjects related to mathematics and computer science, which interested me. Later, I was admitted to ENSIAS to further my career and thrive in extracurricular activities.",
  },
  progression: {
    fr: "progression académique",
    en: "academic progression",
  },
  ing: {
    fr: "Ingénieur d'état en Business Intelligence and Analytics",
    en: "State Engineer in Business Intelligence and Analytics ",
  },
  licence: {
    fr: "Licence en Science Mathématique et Informatique",
    en: "Lisence Computer Science and Mathematics",
  },
  technicien: {
    fr: "Téchnicien Spécialisé en Gestion d'entreprise",
    en: "Specialized Technician in Business Management",
  },
  bac: {
    fr: "Baccalauréat Science Math A ",
    en: "Baccalaureate in Mathematics Science A",
  },
  spam_ing: {
    fr: "2023-2026 ENSIAS-Rabat",
    en: "2023-2026 ENSIAS-Rabat",
  },
  spam_licence: {
    fr: "2020-2023 FSSM-Marrakech",
    en: "2020-2023 FSSM-Marrakesh",
  },
  spam_technicien: {
    fr: "2020-2022 MEGA SCHOOL-Marrakech",
    en: "2020-2022 MEGA SCHOOL-Marrakesh",
  },
  spam_bac: {
    fr: "2019-2020 Lycée Ibn Abbad-Marrakech",
    en: "2019-2020 High School Abbad-Marrakesh",
  },
};
// Les elements de projets :
titre4 = document.getElementById("titre4");
titre_projet1 = document.getElementById("titre_projet1");
details1 = document.getElementById("details1");
titre_details1 = document.getElementById("titre_details1");
info11 = document.getElementById("info11");
data11 = document.getElementById("data11");
info12 = document.getElementById("info12");
data12 = document.getElementById("data12");
info13 = document.getElementById("info13");
data13 = document.getElementById("data13");
info14 = document.getElementById("info14");
data14 = document.getElementById("data14");
titre_projet2 = document.getElementById("titre_projet2");
details2 = document.getElementById("details2");
titre_details2 = document.getElementById("titre_details2");
info21 = document.getElementById("info21");
data21 = document.getElementById("data21");
info22 = document.getElementById("info22");
data22 = document.getElementById("data22");
info23 = document.getElementById("info23");
data23 = document.getElementById("data23");
info24 = document.getElementById("info24");
info24 = document.getElementById("info24");
data24 = document.getElementById("data24");
titre_projet3 = document.getElementById("titre_projet3");
details3 = document.getElementById("details3");
titre_details3 = document.getElementById("titre_details3");
info31 = document.getElementById("info31");
data31 = document.getElementById("data31");
info32 = document.getElementById("info32");
data32 = document.getElementById("data32");
info33 = document.getElementById("info33");
data33 = document.getElementById("data33");
info34 = document.getElementById("info34");
data34 = document.getElementById("data34");
titre_projet4 = document.getElementById("titre_projet4");
details4 = document.getElementById("details4");
titre_details4 = document.getElementById("titre_details4");
info41 = document.getElementById("info41");
data41 = document.getElementById("data41");
info42 = document.getElementById("info42");
data42 = document.getElementById("data42");
info43 = document.getElementById("info43");
data43 = document.getElementById("data43");
info44 = document.getElementById("info44");
data44 = document.getElementById("data44");
titre_projet5 = document.getElementById("titre_projet5");
details5 = document.getElementById("details5");
titre_details5 = document.getElementById("titre_details5");
info51 = document.getElementById("info51");
data51 = document.getElementById("data51");
info52 = document.getElementById("info52");
data52 = document.getElementById("data52");
info53 = document.getElementById("info53");
data53 = document.getElementById("data53");
info54 = document.getElementById("info54");
data54 = document.getElementById("data54");
titre_projet6 = document.getElementById("titre_projet6");
details6 = document.getElementById("details6");
titre_details6 = document.getElementById("titre_details6");
info61 = document.getElementById("info61");
data61 = document.getElementById("data61");
info62 = document.getElementById("info62");
data62 = document.getElementById("data62");
info63 = document.getElementById("info63");
data63 = document.getElementById("data63");
info64 = document.getElementById("info64");
data64 = document.getElementById("data64");
// Select all elements with the class "btn"
const buttons = document.querySelectorAll(".close-btn");

// Traduction projet : La plus dure :
const traduction_projet1 = {
  titre_projet: {
    fr: "Lisan : Une conversation vocale mieux qu'une lecture",
    en: " Lisan: A voice conversation better than reading",
  },
  data1: {
    fr: "Exploration des modèles de deep Learning pour le traitement de la langue arabe.",
    en: " Exploring deep learning models for Arabic language processing",
  },
  data2: {
    fr: "Avril 2024 - Juin 2024",
    en: "April 2024 - June 2024 ",
  },
  data3: {
    fr: "bibliothèque python Transformers, pydub, gtts...",
    en: "Python library: Transformers, pydub, gtts... ",
  },
  data4: {
    fr: "C'est un projet de recherche dans lequel on a découvert des modèles pré-entraînés qui existent sur la plateforme Hugging Face. L'objectif est de faire une comparaison entre les différents modèles en se basant sur la durée pour obtenir une réponse, l'exactitude, etc. ",
    en: "This is a research project in which we discovered pre-trained models available on the Hugging Face platform. The goal is to compare different models based on response time, accuracy, etc. ",
  },
};
const traduction_projet2 = {
  titre_projet: {
    fr: "PharmaVision : Révolutionner la Gestion des Stocks",
    en: " PharmaVision: Revolutionizing Stock Management",
  },
  data1: {
    fr: "Visualiser les données et trouver des KPIs pertinents qui aident la pharmaceutique d'Oujda à trouver une solution au problème de la rupture de stock et de la surcharge de stocks.",
    en: "Visualizing data and identifying relevant KPIs to help the Oujda pharmaceutical company find a solution to stock shortages and overstocking.",
  },
  data2: {
    fr: "Décembre 2023 - Janvier 2024",
    en: "December 2023 - January 2024",
  },
  data3: {
    fr: "Power BI, Analyse de données",
    en: " Analyze data , Microsoft Power BI",
  },
  data4: {
    fr: "C'est un projet challenge réalisé en utilisant Power BI pour analyser des données collectées par l'hopital d'Oujda. Le projet consiste à explorer ces données pour obtenir des informations clés sur l'activité hospitalière, et la consommation des médicaments, le stock, et tous ce que concerne la commande des fournisseurs.",
    en: "This is a challenging project carried out using Power BI to analyze data collected by the Oujda hospital. The project involves exploring this data to obtain key insights on hospital activity, medication consumption, stock levels, and all matters related to supplier orders.",
  },
};
const traduction_projet3 = {
  titre_projet: {
    fr: "Les tableaux de bord des habitats",
    en: "habitat Dashboard ",
  },
  data1: {
    fr: "Utiliser Bokeh pour réaliser une application qui contient des interfaces interactives avec des visualisations des données.",
    en: "Use Bokeh to create an application with interactive interfaces and data visualizations. ",
  },
  data2: {
    fr: "Mai 2024 - Juin 2024",
    en: "May 2024 - June 2024 ",
  },
  data3: {
    fr: "Analyse de données , bibliothèque python : Pandas, et Bokeh.",
    en: "Data analysis, Python library: Pandas and Bokeh. ",
  },
  data4: {
    fr: "C'est un projet réalisé en lieu et place d'un examen, et dans lequel on a cherché une base de données concernant les habitats. L'objectif est d'extraire les informations à partir des données qu'on a, tout en assurant l'interactivité avec les visualisations.",
    en: "This is a project carried out in place of an exam, where we searched for a database related to habitats. The goal is to extract information from the data we have while ensuring interactivity with the visualizations. ",
  },
};
const traduction_projet4 = {
  titre_projet: {
    fr: "Jeu Mario : Conception et modélisation d’un jeu vidéo avec la bibliothèque pygame",
    en: " Mario Game: Design and modeling of a video game",
  },
  data1: {
    fr: "Créer un jeu vidéo en utilisant la bibliothèque Pygame de Python.",
    en: "Create a video game using Python's Pygame library. ",
  },
  data2: {
    fr: "Mai 2023 - Juin 2023",
    en: "May 2023 - June 2023 ",
  },
  data3: {
    fr: "Modélisation en utilisant UML, graphique avec l'outil Tiled, et la bibliothèque pygame de python.",
    en: "Modeling using UML, graphics with the Tiled tool, and Python's Pygame library.",
  },
  data4: {
    fr: "C'est mon projet de fin d'études de licence dans lequel on a implémenté les différents diagrammes de l'UML pour réaliser l'étape de la conception, dessiner les différents niveaux de jeu en implémentant Tiled. Et finalement, coder en Python, en utilisant la bibliothèque Pygame.",
    en: "This is my bachelor's degree final project where we implemented various UML diagrams for the design phase, drew different game levels using Tiled, and finally coded in Python using the Pygame library. ",
  },
};
const traduction_projet5 = {
  titre_projet: {
    fr: "LearnCode : Création d’un site web vitrine",
    en: "LearnCode: Creation of a showcase website ",
  },
  data1: {
    fr: "Utiliser juste HTML, CSS, JAVASCRIPT pour créer un site web vitrine.",
    en: "Use only HTML, CSS, and JavaScript to create a showcase website. ",
  },
  data2: {
    fr: "Décembre 2021 - Janvier 2022",
    en: "December 2021 - January 2022 ",
  },
  data3: {
    fr: "HTML , CSS, JAVASCRIPT",
    en: "HTML, CSS, JavaScript ",
  },
  data4: {
    fr: " C'est mon premier projet informatique dans lequel on a développé uniquement en utilisant HTML, CSS et JavaScript. C'est grâce à ce projet que j'ai maîtrisé le développement en JavaScript en apprenant via le site web Sololearn.",
    en: " This is my first IT project where we developed using only HTML, CSS, and JavaScript. It's through this project that I mastered JavaScript development by learning via the Sololearn website.",
  },
};
const traduction_projet6 = {
  titre_projet: {
    fr: "Application de gestion de banque en utilisant Java",
    en: "Bank management application using Java",
  },
  data1: {
    fr: "Créer une application de gestion de banque en se basant sur un diagramme de classe, et le language Java",
    en: "Create a bank management application based on a class diagram and the Java language ",
  },
  data2: {
    fr: "Mars 2024 - Avril 2024",
    en: "March 2024 - April 2024",
  },
  data3: {
    fr: "Java , UML ",
    en: "Java, UML",
  },
  data4: {
    fr: "C'est un projet ou a fait une conception en utilisant le diagramme de classe de UML, et on a essayé de développer une application pour une gestion de banque avec des interface simple de swing, et tout en assurant le bon fonctionnement de l'application et les données de base de données.",
    en: "This is a project where we designed using the UML class diagram and developed a bank management application with simple Swing interfaces, ensuring the proper functioning of the application and database management. ",
  },
};

// Traduction titre :
const translations_t_p = {
  titre4: {
    fr: "Projets Académique :",
    en: "Academic projects : ",
  },
  titre_details: {
    fr: "Détails du projet ",
    en: "Details of project",
  },
  info1: {
    fr: "But: ",
    en: "Goals: ",
  },
  info2: {
    fr: "Durée: ",
    en: "Time:",
  },
  info3: {
    fr: "Compétences: ",
    en: "Skills: ",
  },
  info4: {
    fr: "Description: ",
    en: "Description: ",
  },
  close_btn: {
    fr: "Fermer",
    en: "Close",
  },
};

// Les elements de competences :

titre5 = document.getElementById("titre5");
comp1 = document.getElementById("comp1");
comp2 = document.getElementById("comp2");
comp3 = document.getElementById("comp3");
comp4 = document.getElementById("comp4");
comp5 = document.getElementById("comp5");
comp6 = document.getElementById("comp6");

// La translation :
const translations_competences = {
  titre: {
    fr: "Compétences :",
    en: "Skills :",
  },
  comp1: {
    fr: "Bases des Données",
    en: "Database",
  },
  comp2: {
    fr: "Science des données ",
    en: "Data Science",
  },
  comp3: {
    fr: "Extraction de données web",
    en: "Web Scrapping ",
  },
  comp4: {
    fr: "ETL et BI",
    en: "ETL and BI",
  },
  comp5: {
    fr: "Langage de programmation ",
    en: "Programming Language",
  },
  comp6: {
    fr: "Autre compétences",
    en: "Other Skills",
  },
};

// Les elements de l'experience professionelle :
titre6 = document.getElementById("titre6");
conseil_t = document.getElementById("conseil_t");
conseil = document.getElementById("conseil");
compvsex_t = document.getElementById("compvsex_t");
compvsex = document.getElementById("compvsex");

const translations_exp = {
  titre: {
    fr: "Expérience professionnelle :",
    en: "Professionnal experience : ",
  },
  conseil_t: {
    fr: "Conseil : ",
    en: " Advice : ",
  },
  conseil: {
    fr: "LinkedIn s'avère être un outil incontournable pour les étudiants en quête de stages, offrant une plateforme idéale pour établir un réseau professionnel solide. En parallèle, cultiver des relations positives avec vos professeurs peut ouvrir de sujetbreuses portes.",
    en: "LinkedIn proves to be an essential tool for students seeking internships, offering an ideal platform to build a strong professional network. Additionally, fostering positive relationships with your professors can open many doors.",
  },
  compvsex_t: {
    fr: "L'expérience professionnelle est importante que les compétences.",
    en: "Professional experience is more important than skills. ",
  },
  compvsex: {
    fr: " L'expérience professionnelle forge des compétences pratiques essentielles : résolution de problèmes réels, travail d'équipe et adaptabilité. Contrairement aux compétences théoriques, elle démontre la capacité à appliquer ses connaissances et à apprendre de nouvelles technologies pour résoudre des problèmes concrets, ce qui est très valorisé par les employeurs.",
    en: "Professional experience develops essential practical skills: real-world problem solving, teamwork, and adaptability. Unlike theoretical skills, it demonstrates the ability to apply knowledge and learn new technologies to solve concrete problems, which is highly valued by employers.",
  },
};
// Les elements de l'exp extra :
titre7 = document.getElementById("titre7");
// club1 = document.getElementById("club1");
// club2 = document.getElementById("club2");
detail_club1 = document.getElementById("mini_detail1");
// detail_club2 = document.getElementById("detail_club2");
mini_titre1 = document.getElementById("mini_titre1");
mini_titre2 = document.getElementById("mini_titre2");
mini_text1 = document.getElementById("mini_text1");
mini_text2 = document.getElementById("mini_text2");

const translations_activite = {
  titre: {
    fr: "Expérience Extra scolaire :",
    en: " Extracurricular Experience:",
  },
  // club1: {
  //   fr: "Club CINDH ",
  //   en: "CINDH Club ",
  // },
  // club2: {
  //   fr: " Club IA ",
  //   en: "AI Club  ",
  // },
  mini_detail1: {
    fr: "Responsabe Spam, membre cellule dons et sponsoring  ",
    en: "Spam Manager & Member of the Donations and Sponsorship Cell ",
  },
  // detail_club2: {
  //   fr: "Membre cellule sponsoring et cellule Data ",
  //   en: "Member of the Sponsorship Cell & Data Cell",
  // },
  mini_titre1: {
    fr: "Club CINDH ",
    en: "CINDH Club ",
  },
  mini_titre2: {
    fr: "Pourquoi l'Extra scolaire :",
    en: "Why Extracurricular Activities: ",
  },
  mini_text1: {
    fr: "Le Club d'Initiation Nationale au Développement Humain offre une opportunité enrichissante de s'engager dans des actions solidaires. En tant que membre, j'ai le privilège de participer à des activités bénéfiques pour la communauté, notamment auprès des enfants, ce qui est source de grande satisfaction personnelle. Au sein de la cellule sponsoring, nous développons des compétences précieuses en communication et négociation. Cette expérience m'a profondément marqué, renforçant ma conviction qu'il est essentiel de tendre la main à ceux dans le besoin, contribuant ainsi à créer une société plus solidaire et empathique.",
    en: " The National Human Development Initiation Club offers an enriching opportunity to engage in solidarity actions. As a member, I have the privilege of participating in activities beneficial to the community, especially with children, which is a source of great personal satisfaction. Within the sponsorship cell, we develop valuable skills in communication and negotiation. This experience deeply impacted me, reinforcing my belief that it is essential to reach out to those in need, thus helping to create a more supportive and empathetic society.",
  },
  mini_text2: {
    fr: "L'engagement dans des activités extrascolaires enrichit considérablement le profil d'un étudiant, démontrant polyvalence, initiative et compétences pratiques. Ces expériences, qu'elles soient bénévoles, associatives ou créatives, témoignent d'une personnalité équilibrée et proactive, atouts majeurs aux yeux des recruteurs et dans le développement personnel.",
    en: "Engagement in extracurricular activities significantly enriches a student's profile, demonstrating versatility, initiative, and practical skills. These experiences, whether volunteer, associative, or creative, reflect a balanced and proactive personality, major assets in the eyes of recruiters and in personal development.",
  },
};

// La partie contact :
citation = document.getElementById("citation");
citation1 = document.getElementById("citation1");
citation2 = document.getElementById("citation2");
citation3 = document.getElementById("citation3");
discussion = document.getElementById("discussion");
quote1 = document.getElementById("quote1");
quote2 = document.getElementById("quote2");
pa = document.getElementById("pa");

const transaltions_citation = {
  titre: {
    fr: "Citation : ",
    en: "Quotes : ",
  },
  c1: {
    fr: "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. ",
    en: "Success is not final, failure is not fatal. It is the courage to continue that counts. ",
  },
  c2: {
    fr: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
    en: "I never lose. Either I win or I learn. ",
  },
  c3: {
    fr: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
    en: "The only limit to our realization of tomorrow will be our doubts of today. ",
  },
  discuss: {
    fr: "Parlons de tout!",
    en: "Let's talk about everything!",
  },
  q1: {
    fr: "Le dialogue est le chemin le plus court entre deux personnes. ",
    en: " Dialogue is the shortest path between two people.",
  },
  q2: {
    fr: "Les meilleures idées naissent souvent d'une simple conversation.",
    en: " The best ideas often come from a simple conversation.",
  },
  pa: {
    fr: " Vous n'aimez pas les formulaires? Utilisez la méthode que vous convient.",
    en: "Don't like forms? Use the method that suits you. ",
  },
};

// Les elements du formualire :
nom = document.getElementById("nom");
mail = document.getElementById("mail");
sujet = document.getElementById("sujet");
text = document.getElementById("message");
envoyer = document.getElementById("envoyer");

const translations_formulaire = {
  nom: {
    fr: "Insérez votre nom",
    en: "Enter your name",
  },
  mail: {
    fr: "Insérez votre email",
    en: "Enter your email",
  },
  sujet: {
    fr: "Insérez votre sujet",
    en: "Enter your subject",
  },
  text: {
    fr: "Écrivez votre message",
    en: "Write your message",
  },
  envoyer: {
    fr: "Envoyer le message",
    en: "Send message",
  },
};

// La fonction finale de la traduction :
function translateContent(language) {
  // Elements du menu :
  Acceuil_menu.textContent = translations_menu["Acceuil"][language];
  details.textContent = translations_menu["details"][language];
  parcours_menu.textContent = translations_menu["parcours"][language];
  projet_menu.textContent = translations_menu["projets"][language];
  competence_menu.textContent = translations_menu["competences"][language];
  experience_menu.textContent = translations_menu["experience"][language];
  activite_menu.textContent = translations_menu["activite"][language];
  contact.textContent = translations_menu["contact"][language];
  fr_menu.innerHTML = translations_menu["francais"][language];
  en_menu.innerHTML = translations_menu["anglais"][language];
  // Elements de l'Acceuil :
  titre.textContent = translations_home["titre"][language];
  p1.textContent = translations_home["p1"][language];
  p2.textContent = translations_home["p2"][language];
  p3.textContent = translations_home["p3"][language];
  cv_fr.textContent = translations_home["cv_fr"][language];
  cv_en.textContent = translations_home["cv_en"][language];
  r_fr.textContent = translations_home["r_fr"][language];
  r_en.textContent = translations_home["r_en"][language];
  // Elements de more details :
  titre2.textContent = translations_details["titre"][language];
  date_titre.textContent = translations_details["date_titre"][language];
  lieu_O_titre.textContent = translations_details["lieu_O_titre"][language];
  lieu_O.textContent = translations_details["ville"][language];
  lieu_H_titre.textContent = translations_details["lieu_H_titre"][language];
  // Les elements de parcours :
  titre3.textContent = translations_parcours["titre"][language];
  exp_pa.textContent = translations_parcours["title_exp"][language];
  pa_parcours.textContent = translations_parcours["pa_parcours"][language];
  progression.textContent = translations_parcours["progression"][language];
  ing.textContent = translations_parcours["ing"][language];
  licence.textContent = translations_parcours["licence"][language];
  technicien.textContent = translations_parcours["technicien"][language];
  bac.textContent = translations_parcours["bac"][language];
  /*
  spam_ing.textContent = translations_parcours["spam_ing"][language];
  spam_licence.textContent = translations_parcours["spam_licence"][language];
  spam_technicien.textContent =
    translations_parcours["spam_technicien"][language];
  spam_bac.textContent = translations_parcours["spam_bac"][language];
  */
  // Elements de competences :
  titre5.textContent = translations_competences["titre"][language];
  comp1.textContent = translations_competences["comp1"][language];
  comp2.textContent = translations_competences["comp2"][language];
  comp3.textContent = translations_competences["comp3"][language];
  comp4.textContent = translations_competences["comp4"][language];
  comp5.textContent = translations_competences["comp5"][language];
  comp6.textContent = translations_competences["comp6"][language];

  //Elements de l'experience pro
  titre6.textContent = translations_exp["titre"][language];
  conseil_t.textContent = translations_exp["conseil_t"][language];
  conseil.textContent = translations_exp["conseil"][language];
  compvsex_t.textContent = translations_exp["compvsex_t"][language];
  compvsex.textContent = translations_exp["compvsex"][language];
  //Element de l'experience extra
  titre7.textContent = translations_activite["titre"][language];
  // club1.textContent = translations_activite["club1"][language];
  // club2.textContent = translations_activite["club2"][language];
  // detail_club1.textContent = translations_activite["detail_club1"][language];
  // detail_club2.textContent = translations_activite["detail_club2"][language];
  mini_detail1.textContent = translations_activite["mini_detail1"][language];
  mini_titre1.textContent = translations_activite["mini_titre1"][language];
  mini_titre2.textContent = translations_activite["mini_titre2"][language];
  mini_text1.textContent = translations_activite["mini_text1"][language];
  mini_text2.textContent = translations_activite["mini_text2"][language];

  // Element de contact et citation:
  citation.textContent = transaltions_citation["titre"][language];
  citation1.textContent = transaltions_citation["c1"][language];
  citation2.textContent = transaltions_citation["c2"][language];
  citation3.textContent = transaltions_citation["c3"][language];
  discussion.textContent = transaltions_citation["discuss"][language];
  quote1.textContent = transaltions_citation["q1"][language];
  quote2.textContent = transaltions_citation["q2"][language];
  pa.textContent = transaltions_citation["pa"][language];

  // Les elements sdu formulaire :
  nom.placeholder = translations_formulaire["nom"][language];
  mail.placeholder = translations_formulaire["mail"][language];
  sujet.placeholder = translations_formulaire["sujet"][language];
  text.placeholder = translations_formulaire["text"][language];
  envoyer.value = translations_formulaire["envoyer"][language];

  // Les elements de details de projet :
  titre4.textContent = translations_t_p["titre4"][language];
  titre_details1.textContent =
    titre_details2.textContent =
    titre_details3.textContent =
    titre_details5.textContent =
    titre_details5.textContent =
    titre_details6.textContent =
      translations_t_p["titre_details"][language];
  info11.textContent =
    info21.textContent =
    info31.textContent =
    info41.textContent =
      translations_t_p["info1"][language];
  info12.textContent =
    info22.textContent =
    info32.textContent =
    info42.textContent =
      translations_t_p["info2"][language];
  info13.textContent =
    info23.textContent =
    info33.textContent =
    info43.textContent =
      translations_t_p["info3"][language];
  info14.textContent =
    info34.textContent =
    info34.textContent =
    info44.textContent =
      translations_t_p["info4"][language];
  // Iterate over the NodeList and do something with each button
  buttons.forEach((button) => {
    button.textContent = translations_t_p["close_btn"][language]; // or any other operation
  });
  // Les donnees du projet 1 :
  titre_projet1.textContent = traduction_projet1["titre_projet"][language];
  data11.textContent = traduction_projet1["data1"][language];
  data12.textContent = traduction_projet1["data2"][language];
  data13.textContent = traduction_projet1["data3"][language];
  data14.textContent = traduction_projet1["data4"][language];
  // Les donnees du projet 2 :
  titre_projet2.textContent = traduction_projet2["titre_projet"][language];
  data21.textContent = traduction_projet2["data1"][language];
  data22.textContent = traduction_projet2["data2"][language];
  data23.textContent = traduction_projet2["data3"][language];
  data24.textContent = traduction_projet2["data4"][language];
  // Les donnees du projet 3 :
  titre_projet3.textContent = traduction_projet3["titre_projet"][language];
  data31.textContent = traduction_projet3["data1"][language];
  data32.textContent = traduction_projet3["data2"][language];
  data33.textContent = traduction_projet3["data3"][language];
  data34.textContent = traduction_projet3["data4"][language];
  // Les donnees du projet 4 :
  titre_projet4.textContent = traduction_projet4["titre_projet"][language];
  data41.textContent = traduction_projet4["data1"][language];
  data42.textContent = traduction_projet4["data2"][language];
  data43.textContent = traduction_projet4["data3"][language];
  data44.textContent = traduction_projet4["data4"][language];
  // Les donnees du projet 5 :
  titre_projet5.textContent = traduction_projet5["titre_projet"][language];
  data51.textContent = traduction_projet5["data1"][language];
  data52.textContent = traduction_projet5["data2"][language];
  data53.textContent = traduction_projet5["data3"][language];
  data54.textContent = traduction_projet5["data4"][language];
  // Les donnees du projet 6 :
  titre_projet6.textContent = traduction_projet6["titre_projet"][language];
  data61.textContent = traduction_projet6["data1"][language];
  data62.textContent = traduction_projet6["data2"][language];
  data63.textContent = traduction_projet6["data3"][language];
  data64.textContent = traduction_projet6["data4"][language];
}

// Documents pour ecouter les evenements.
document.getElementById("fr").addEventListener("click", () => {
  translateContent("fr");
});

document.getElementById("en").addEventListener("click", () => {
  console.log("i'm here");
  translateContent("en");
});
