import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">FiLot</div>
            <p className="text-gray-400 mb-6">
              The trusted AI-powered investment advisor bringing institutional-grade crypto liquidity pool investing to everyone.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/Fi_lotbot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram text-xl"></i>
              </a>
              <a 
                href="https://x.com/crazyrichla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pools" className="text-gray-400 hover:text-white transition-colors">
                  Pools
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-gray-400 hover:text-white transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <a 
                  href="https://t.me/Fi_lotbot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Start Investing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fab fa-telegram text-primary mr-2"></i>
                <a 
                  href="https://t.me/Fi_lotbot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @Fi_lotbot
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <a 
                  href="mailto:support@filot.io" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  support@filot.io
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mr-2 mt-1"></i>
                <span className="text-gray-400">
                  Dubai International Financial Centre, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>

          {/* FiLot Ecosystem */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FiLot Ecosystem</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://filotanalytics.replit.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FiLotanalytics
                </a>
              </li>
              <li>
                <a 
                  href="https://filotsense.replit.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FiLotsense
                </a>
              </li>
              <li>
                <a 
                  href="https://crazyrichla.replit.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LA! Token
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} FiLot. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
