
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/api/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (variantId: string) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const imageUrl = product.attributes.images?.[0]?.url_product || 
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop';
  
  const defaultVariantId = product.id; // Simplified - would need to get from variants

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={product.attributes.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.attributes.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {product.attributes.description}
        </p>
        <p className="text-2xl font-bold text-primary">
          {product.attributes.display_price}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => onAddToCart?.(defaultVariantId)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};