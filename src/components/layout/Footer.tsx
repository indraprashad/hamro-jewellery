
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-gold bg-clip-text text-transparent">
              Hamro Jewellery
            </h3>
            <p className="text-sm text-muted-foreground">
              Exquisite handcrafted jewellery for every occasion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground">All Products</Link></li>
              <li><Link to="/collections" className="hover:text-foreground">Collections</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-foreground">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-foreground">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-foreground">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Hamro Jewellery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};