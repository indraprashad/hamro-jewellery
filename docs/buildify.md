
# Hamro Jewellery E-commerce Platform
# For all the file maintain max 200 lines of code. as far as possible make re-useable component.
# folder layout
/src
  ├── auth          # auth file
  ├── common        # re‑usable files
  ├── services      # api services
  ├── utils         # utility files
  ├── store         # context
  ├── routes        # app routes
  └── view          # landing page


## Requirements
- E-commerce platform for jewellery products
- Spree Commerce API integration (base URL: https://yalula.dcpl.bt)
- Guest checkout support
- Registered user accounts with full features
- Custom RMA payment integration (AR → AE → DR → Complete)
- Product browsing, cart management, checkout flow
- Responsive design with gold/jewellery theme

## Design
- **Color Scheme**: Gold primary (#D4A574), Dark gray secondary, Ruby red accent
- **Layout**: Header with logo/nav/cart, main content area, footer
- **Components**: Product cards, cart items, checkout forms, payment flow
- **Typography**: Clean, elegant fonts for luxury feel
- **Images**: High-quality jewellery product photos

## Tasks
1. ✅ Project setup & design system (200 LOC × 10 = 2000 tokens)
2. ✅ API configuration & authentication context (200 LOC × 10 = 2000 tokens)
3. ✅ Home page with hero & featured products (200 LOC × 10 = 2000 tokens)
4. 🔄 Product listing page with filters/pagination (200 LOC × 10 = 2000 tokens) - IN PROGRESS
5. ⏳ Product detail page with add-to-cart (200 LOC × 10 = 2000 tokens)
6. ⏳ Cart page with item management (200 LOC × 10 = 2000 tokens)
7. ⏳ Login/Register forms (200 LOC × 10 = 2000 tokens)
8. ⏳ Checkout flow with RMA payment (200 LOC × 10 = 2000 tokens)
9. ⏳ Account dashboard & order history (200 LOC × 10 = 2000 tokens)
10. ⏳ Search & advanced filtering (200 LOC × 10 = 2000 tokens)

## Discussions
- Using React Query for data fetching and caching
- Implementing optimistic updates for cart operations
- Error boundaries for graceful error handling
- Loading skeletons for better UX
