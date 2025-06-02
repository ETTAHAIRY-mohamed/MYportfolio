"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Application web de gestion de scolarité",
      description: "Création d'une plateforme pour la gestion des étudiants, des cours et des emplois du temps.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      category: "backend",
      status: "Terminé",
      features: [
        "Gestion des étudiants",
        "Gestion des cours",
        "Emplois du temps",
        "Interface responsive"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Application web de gestion d'hôpital",
      description: "Plateforme intégrée pour la gestion des patients, des rendez-vous et des dossiers médicaux.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring", "MongoDB", "Angular", "Bootstrap"],
      category: "backend",
      status: "Terminé",
      features: [
        "Gestion des patients",
        "Gestion des rendez-vous",
        "Dossiers médicaux",
        "Interface moderne"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Ebancing - Système Bancaire",
      description: "Application bancaire offrant des fonctionnalités d'authentification sécurisée, gestion des comptes et traitement des transactions.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring Boot", "Spring Security", "PostgreSQL", "Angular", "RESTful APIs"],
      category: "backend",
      status: "Terminé",
      features: [
        "Authentification sécurisée",
        "Gestion des comptes",
        "Traitement des transactions",
        "API RESTful"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Système de Gestion des Stocks",
      description: "Solution complète pour la gestion des stocks et des commandes avec interface Thymeleaf.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring Boot", "Hibernate", "MySQL", "Angular"],
      category: "backend",
      status: "Terminé",
      features: [
        "Gestion des stocks",
        "Gestion des commandes",
        "Interface utilisateur Thymeleaf",
        "Base de données MySQL"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Visualisation 3D Lunaire en AR",
      description: "Application de réalité augmentée permettant de visualiser des modèles 3D de la Lune avec informations détaillées.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Blender", "ARCore/ARKit", "model_viewer_plus", "webview_flutter"],
      category: "mobile",
      status: "Terminé",
      features: [
        "Modèles 3D interactifs",
        "Réalité augmentée",
        "Informations détaillées",
        "Visualisation en espace réel"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Application de Voyage et Tourisme",
      description: "Plateforme pour l'organisation de voyages et la découverte des meilleures destinations touristiques.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring Boot", "Angular", "PostgreSQL", "RESTful APIs", "Spring Security"],
      category: "frontend",
      status: "Terminé",
      features: [
        "Découverte de destinations",
        "Organisation de voyages",
        "Interface utilisateur fluide",
        "Authentification sécurisée"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const categories = [
    { name: "Tous", value: "all", icon: Globe },
    { name: "Mobile", value: "mobile", icon: Smartphone },
    { name: "Backend", value: "backend", icon: Server },
    { name: "Frontend", value: "frontend", icon: Globe },
    { name: "IA/ML", value: "ai", icon: ExternalLink },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terminé":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En cours":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "En développement":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Planifié":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Recherche":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "mobile":
        return "📱";
      case "backend":
        return "⚙️";
      case "frontend":
        return "🌐";
      case "ai":
        return "🤖";
      default:
        return "💻";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes réalisations et projets en cours de développement
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.value}
              className="flex items-center px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Fonctionnalités principales:
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Intéressé par une collaboration ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert à discuter de nouveaux projets et
              opportunités. N'hésitez pas à me contacter pour en savoir plus sur
              mes réalisations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Discutons de votre projet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
