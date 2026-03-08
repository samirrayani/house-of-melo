import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center gap-8">
          <Image
            src="/logo.png"
            alt="House of Melo"
            width={160}
            height={64}
            className="h-16 w-auto opacity-80"
          />

          <div className="space-y-2 text-muted text-sm">
            <p>Enoch Pratt Free Library, Baltimore, MD</p>
            <p>
              Press inquiries:{" "}
              <a
                href="mailto:Katie@PressOnComms.Biz"
                className="text-white hover:text-accent transition-colors"
              >
                Katie@PressOnComms.Biz
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="https://www.prattlibrary.org/carmelo-anthony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Visit the Experience
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://www.amazon.com/Where-Tomorrows-Arent-Promised-Survival/dp/1982160594"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              The Book
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 w-full text-center text-xs text-muted/60">
            <p>
              Website by{" "}
              <a
                href="https://treehaus.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Treehaus
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
