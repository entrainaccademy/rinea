import Image from "next/image";

const navItems = ["Shop", "Collections", "About", "Contact"];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-olive/10 bg-paper px-6 py-4 sm:px-10">
      <Image
        src="/RINEA_logo.jpeg"
        alt="Rinea Fine Jewellery"
        width={180}
        height={115}
        priority
        className="h-10 w-auto sm:h-12"
      />
      <nav className="hidden gap-8 font-sans text-sm tracking-wide text-olive/70 sm:flex">
        {navItems.map((item) => (
          <span key={item} className="cursor-default">
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
}
