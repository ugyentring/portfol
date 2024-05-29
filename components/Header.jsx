import Link from "next/link";
import { Button } from "./ui/button";

//component import
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* My logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ugyen<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mdndj</div>
      </div>
    </header>
  );
};

export default Header;
