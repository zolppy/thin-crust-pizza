const Footer = () => {
  return (
    <footer className="text-white text-4xl text-center bg-black px-4 py-[86px]">
      powered by{" "}
      <a
        href="https://github.com/zolppy"
        target="_blank"
        className="underline active:text-[#4CAF50] lg:hover:text-[#4CAF50]"
      >
        zolppy
      </a>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
