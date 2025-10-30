
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Truck } from 'lucide-react';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewellery
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/collections">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                View Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Handcrafted with the finest materials and attention to detail
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Authentic</h3>
              <p className="text-muted-foreground">
                Every piece comes with authenticity certification
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Complimentary shipping on all orders nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of stunning pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-110"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${
                        i === 1 ? '1605100804763-247f67b3557e' :
                        i === 2 ? '1611591437281-460bfbe1220a' :
                        '1599643478518-a784e5dc4c8f'
                      }?w=400&h=400&fit=crop)`
                    }}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Product {i}</h3>
                <p className="text-muted-foreground mb-2">Beautiful handcrafted piece</p>
                <p className="font-bold text-primary">Coming Soon</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};