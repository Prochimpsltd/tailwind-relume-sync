import { Button } from "@relume_io/relume-ui";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          Relume
        </a>
        
        <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] md:block">
          <ul className="flex items-center gap-x-8">
            <li><a href="#" className="text-md font-semibold">Home</a></li>
            <li><a href="#" className="text-md font-semibold">About</a></li>
            <li><a href="#" className="text-md font-semibold">Services</a></li>
            <li><a href="#" className="text-md font-semibold">Contact</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Button variant="secondary" className="hidden md:block">
            Log In
          </Button>
          <Button className="hidden md:block">
            Sign Up
          </Button>
          <button
            className="flex size-12 flex-col items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-border-primary bg-background-primary px-[5%] py-4 md:hidden">
          <nav className="mb-4">
            <ul className="space-y-4">
              <li><a href="#" className="block text-md font-semibold">Home</a></li>
              <li><a href="#" className="block text-md font-semibold">About</a></li>
              <li><a href="#" className="block text-md font-semibold">Services</a></li>
              <li><a href="#" className="block text-md font-semibold">Contact</a></li>
            </ul>
          </nav>
          <div className="flex flex-col gap-y-4">
            <Button variant="secondary">
              Log In
            </Button>
            <Button>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;