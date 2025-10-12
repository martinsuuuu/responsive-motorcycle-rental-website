import { Button } from "./ui/button";
import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">CM Motorcycle Rental</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#fleet" className="text-gray-700 hover:text-primary transition-colors">
              Our Fleet
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(+63)9052794814</span>
            </div>
            <Button asChild>
              <a href="https://m.me/menace1008" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#fleet" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Our Fleet
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Contact
              </a>
              <div className="pt-2">
                <Button asChild className="w-full">
                  <a href="https://m.me/menace1008" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}