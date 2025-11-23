import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  details: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Eucalyptus Honey',
    description: 'It has the sweet of lavender, makes as distinctive, which is also finest as honey.',
    price: '₽890',
    image: 'https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png',
    details: 'Натуральный эвкалиптовый мёд с уникальным ароматом и целебными свойствами. Собран в экологически чистых районах.'
  },
  {
    id: 2,
    name: 'Basswood Honey',
    description: 'Basswood is a tree native and abundant in distinctive, which is also finest as honey.',
    price: '₽950',
    image: 'https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png',
    details: 'Липовый мёд - классика русского пчеловодства. Обладает приятным ароматом липового цвета и целебными свойствами.'
  },
  {
    id: 3,
    name: 'Acacia Honey',
    description: 'Light and delicate honey with a mild, sweet flavor. Perfect for tea and desserts.',
    price: '₽1050',
    image: 'https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png',
    details: 'Акациевый мёд - один из самых ценных сортов. Долго не кристаллизуется, имеет нежный вкус и аромат.'
  },
  {
    id: 4,
    name: 'Wildflower Honey',
    description: 'Rich and aromatic honey from diverse wildflowers, full of natural goodness.',
    price: '₽790',
    image: 'https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png',
    details: 'Полифлорный мёд из разнотравья. Богатый состав и насыщенный вкус делают его особенным.'
  }
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'about', label: 'About', icon: 'Info' },
    { id: 'products', label: 'Our Product', icon: 'ShoppingBag' },
    { id: 'contact', label: 'Contact', icon: 'Mail' }
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🍯</div>
            <span className="text-2xl font-bold text-primary font-['Montserrat']">Honey</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="animate-slide-down">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="pt-16">
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary/30 via-secondary/20 to-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 text-6xl animate-float">🐝</div>
            <div className="absolute top-40 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>🐝</div>
            <div className="absolute bottom-40 left-1/4 text-4xl animate-float" style={{ animationDelay: '2s' }}>🐝</div>
          </div>
          
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="text-6xl mb-4">🍯</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Finger<br />
                licking<br />
                <span className="text-primary">honey!</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Мёд, созданный самой природой. Натуральный продукт с уникальным вкусом и целебными свойствами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => scrollToSection('products')}>
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png" 
                alt="Honey jar" 
                className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Shops</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
              <div className="text-2xl font-bold">EXOTICA</div>
              <div className="text-2xl font-bold">miu miu</div>
              <div className="text-2xl font-bold">DUNKIN'</div>
              <div className="text-2xl font-bold">BURBERRY</div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-white to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <div className="bg-secondary/20 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png" 
                    alt="Honey jar" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Honey created in the laps of nature.</h2>
                <p className="text-muted-foreground mb-6">
                  Мёд - один из главных ингредиентов в вашем ежедневном рационе. Как бренд, вам необходима маркетинговая стратегия, которая поможет продвинуть ваш продукт.
                </p>
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6">Does your honey taste bad? Tell us!</h2>
                <p className="text-muted-foreground mb-6">
                  Мёд - важная часть здорового питания. Мы гарантируем качество каждой баночки и всегда готовы выслушать ваши пожелания.
                </p>
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                  Learn More
                </Button>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="bg-accent/20 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/files/98482bc4-6b68-440a-8d27-a5bd9204c957.png" 
                    alt="Honey jars" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold">Our Product</h2>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                See all <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="mb-16">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedProduct(product)}>
                        <CardHeader>
                          <div className="bg-secondary/20 rounded-lg p-6 mb-4">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
                          </div>
                          <CardTitle className="text-xl">{product.name}</CardTitle>
                          <CardDescription className="min-h-[60px]">{product.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button className="bg-primary hover:bg-primary/90 text-white">
                            Buy Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <CardHeader>
                    <div className="bg-secondary/20 rounded-lg p-6 mb-4">
                      <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-sm min-h-[50px]">{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-3 items-start">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white">
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-t from-secondary/20 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Есть вопросы? Свяжитесь с нами, и мы с радостью поможем вам выбрать идеальный мёд!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Email Us
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🍯</div>
                <span className="text-2xl font-bold">Honey</span>
              </div>
              <p className="text-white/80 text-sm">
                Honey is one of the prime ingredients in your everyday food schedule. Its a brand, you need a marketing strategy that will help...
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Email: info@honey.com</li>
                <li>Phone: +7 (999) 123-45-67</li>
                <li>Address: Moscow, Russia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2025 Honey. All rights reserved.
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProduct?.name}</DialogTitle>
            <DialogDescription>{selectedProduct?.description}</DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/20 rounded-lg p-8">
              <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-64 object-contain" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semibold mb-3">О продукте:</h3>
                <p className="text-muted-foreground mb-6">{selectedProduct?.details}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>100% натуральный продукт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Без добавок и консервантов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Собран в экологически чистых районах</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">{selectedProduct?.price}</span>
                  <span className="text-sm text-muted-foreground">за 500г</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Добавить в корзину
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
