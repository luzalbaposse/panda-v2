// Navbar Component
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8">
      <div className="text-xl font-bold">panda</div>
      <div className="flex gap-4">
        <a href="/about" className="text-gray-600 hover:text-gray-900">Sobre Nosotros</a>
        <a href="/test" className="text-gray-600 hover:text-gray-900">Test de Conciencia</a>
        <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;