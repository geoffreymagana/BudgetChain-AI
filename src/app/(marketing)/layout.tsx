import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/icons/app-logo";
import { Menu, Wallet } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import './../marketing.css';

function Header() {
  const navLinks = [
    { href: "/#features", text: "Features" },
    { href: "/#pricing", text: "Pricing" },
    { href: "/#faq", text: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <AppLogo className="size-8" />
            <span className="text-lg font-bold">BudgetChain AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">
                <Wallet className="mr-2" />
                View Dashboard
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-6">
                   <Link href="/" className="flex items-center gap-2 mb-8">
                      <AppLogo className="size-8" />
                      <span className="text-lg font-bold">BudgetChain AI</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </nav>
                     <div className="mt-8 flex flex-col gap-4">
                        <Button variant="ghost" asChild>
                        <Link href="/login">Log In</Link>
                        </Button>
                        <Button asChild>
                        <Link href="/dashboard">
                            <Wallet className="mr-2" />
                            View Dashboard
                        </Link>
                        </Button>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                 <div className="flex items-center gap-2 mb-4">
                    <AppLogo className="size-8" />
                    <span className="font-bold text-lg">BudgetChain AI</span>
                </div>
                <p className="text-sm text-background/70">AI-powered clarity for your entire crypto portfolio.</p>
            </div>
             <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                    <li><Link href="/#features" className="text-sm text-background/70 hover:text-background">Features</Link></li>
                    <li><Link href="/#pricing" className="text-sm text-background/70 hover:text-background">Pricing</Link></li>
                    <li><Link href="/dashboard" className="text-sm text-background/70 hover:text-background">Dashboard</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                    <li><Link href="/about" className="text-sm text-background/70 hover:text-background">About Us</Link></li>
                    <li><Link href="/contact" className="text-sm text-background/70 hover:text-background">Contact</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                    <li><Link href="/privacy" className="text-sm text-background/70 hover:text-background">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-sm text-background/70 hover:text-background">Terms of Service</Link></li>
                </ul>
            </div>
        </div>
         <div className="mt-8 border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-background/70">
                © {new Date().getFullYear()} BudgetChain AI. All rights reserved.
            </p>
         </div>
      </div>
    </footer>
  );
}

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
    )
}
