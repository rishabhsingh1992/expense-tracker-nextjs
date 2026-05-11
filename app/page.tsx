import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b bg-background">
        <div className="container mx-auto flex h-16 justify-between items-center px-4">
          <Link href="" className="text-xl font-bold tracking-tight">
            ET
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/home"
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button size="lg" className="">
              Sign in
            </Button>
            <Button size="lg" className="">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <footer className="border-t bg-background">
        <div className=" container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6">
          <div>ET {new Date().getFullYear()}. All rights reserved.</div>
          <nav className=" flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/legal"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Legal
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
