"use client";

import { Download, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Bonjour, je suis{" "}
              <span className="text-blue-600 dark:text-blue-400">
                ETTAHAIRY MOHAMED
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Développeur Full Stack
            </h2>

            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8 space-x-6">
              <span className="flex items-center">📍 Casablanca, Maroc</span>
              <span className="flex items-center">📱 +212 653 452 615</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Je suis un développeur full stack passionné, avec de l’expérience en Angular, Flutter et Spring Boot. Je développe des applications web et mobiles performantes et sécurisées, de la conception jusqu’au déploiement. Je maîtrise les bases de données comme PostgreSQL et MySQL, et j’utilise Spring Security pour la sécurité, Postman pour tester les API, Spring Batch pour les traitements batch, Selenium pour les tests, et Docker pour le déploiement. Mon travail est centré sur la qualité du code, la performance et une bonne expérience utilisateur.
          </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Me Contacter
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-ettahairy-173050336/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>

            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                1+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Années d'expérience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projets réalisés
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                8+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technologies maîtrisées
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                3
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Langues parlées
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
