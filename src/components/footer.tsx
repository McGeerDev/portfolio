import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const name = "DEVAN MCGEER";

  return (
    <footer className="flex flex-col items-center border-t py-6">
      <div className="flex flex-wrap justify-center space-x-4">
        <a
          href="https://github.com/McGeerDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/devan-mcgeer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
          <Mail size={24} />
        </a>
      </div>
      <div>
        <p className="text-md mt-4 tracking-[0.3em] text-gray-700 sm:text-lg sm:tracking-[0.4em] md:text-xl">
          {name}
        </p>
      </div>
    </footer>
  );
}
