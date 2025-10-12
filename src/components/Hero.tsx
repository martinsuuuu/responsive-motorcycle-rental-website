import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758550470738-e45122a0b5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcm9hZCUyMGFkdmVudHVyZSUyMHNjZW5pY3xlbnwxfHx8fDE3NTkxMzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Motorcycle on scenic road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Your Next
          <span className="block text-yellow-400">Adventure Awaits</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Premium motorcycle rentals for every journey. From city cruising to cross-country adventures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
            <a href="https://m.me/menace1008" target="_blank" rel="noopener noreferrer">
              Book Your Ride
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
            <a href="#fleet">
              View Fleet
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-300">Always here to help</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-8 w-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">5+ Years</h3>
            <p className="text-sm text-gray-300">Trusted experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}