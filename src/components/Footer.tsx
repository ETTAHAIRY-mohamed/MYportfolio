import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a
                  href="mailto:ettahairy.mohamed.1@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                 ettahairy.mohamed.1@gmail.com

                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a
                  href="tel:+212651462399"
                  className="hover:text-blue-400 transition-colors"
                >
                  +212 653 452 615
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/mohamed-ettahairy-173050336/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">À Propos</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            Développeur full stack passionné avec une expertise en Angular et Spring Boot. Toujours à la recherche de nouveaux défis et d'opportunités d'apprentissage.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ettahairy Mohamed. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
