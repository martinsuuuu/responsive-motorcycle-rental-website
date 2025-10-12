import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Gauge, Fuel, Settings } from "lucide-react";

const motorcycles = [
  {
    id: 1,
    name: "Yamaha XMAX",
    category: "Scooter",
    image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNjb290ZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc1OTEzNDE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["300cc Engine", "ABS + Traction Control", "Loud Horn", "60w Driving Lights", "Well Maintained", "White (2022 Model)"],
    specs: {
      passengers: 2,
      topSpeed: "90 mph",
      fuelType: "Gasoline",
      transmission: "Automatic"
    }
  },
  {
    id: 2,
    name: "Yamaha Mio Gear",
    category: "Scooter",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNjb290ZXIlMjB5YW1haGF8ZW58MXx8fHwxNzU5MTM0MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["125cc Engine", "Loud Horn", "30w Driving Light", "36L Givi Box", "White (2022 Model)"],
    specs: {
      passengers: 2,
      topSpeed: "65 mph",
      fuelType: "Gasoline",
      transmission: "Automatic"
    }
  },
  {
    id: 3,
    name: "QjMoto Atr",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNwb3J0JTIwbW90b3JjeWNsZXxlbnwxfHx8fDE3NTkxMzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["160cc Engine", "ABS + Traction Control", "Projector Headlights", "50w Driving Light", "45L Top Box", "White (2024 Model)"],
    specs: {
      passengers: 2,
      topSpeed: "75 mph",
      fuelType: "Gasoline",
      transmission: "Manual"
    }
  },
  {
    id: 4,
    name: "Honda Adv",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFkdmVudHVyZSUyMHNjb290ZXJ8ZW58MXx8fHwxNzU5MTM0MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["160cc Engine", "ABS + Traction Control", "Loud Horn", "60w Driving Light", "36L Top Box", "Black (2024 Model)"],
    specs: {
      passengers: 2,
      topSpeed: "75 mph",
      fuelType: "Gasoline",
      transmission: "Automatic"
    }
  }
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully maintained collection of motorcycles, perfect for any adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((bike) => (
            <Card key={bike.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                  {bike.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{bike.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{bike.specs.passengers} passengers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Gauge className="h-4 w-4" />
                    <span>{bike.specs.topSpeed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Fuel className="h-4 w-4" />
                    <span>{bike.specs.fuelType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Settings className="h-4 w-4" />
                    <span>{bike.specs.transmission}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bike.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button asChild className="w-full">
                  <a href="https://m.me/menace1008" target="_blank" rel="noopener noreferrer">
                    Book This Bike
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}