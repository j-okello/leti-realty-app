export default function FooterBanner() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <div className="bg-blue-950 py-4 w-screen">
      <p className="text-center md:text-xl text-pretty font-light text-white">
        &copy; {currentYear} LETI REALTY LIMITED. All rights reserved.
      </p>
    </div>
  );
}
