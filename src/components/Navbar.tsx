import { NavLink } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass flex items-center justify-between px-5 py-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-300/80">
              Pépiniériste
            </div>
            <div className="text-base font-semibold text-white">
              {siteConfig.name}
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="hover:text-[#E6D39A] transition">Accueil</NavLink>
            <NavLink to="/infos" className="hover:text-[#E6D39A] transition">Ma démarche</NavLink>
            <NavLink to="/tarifs" className="hover:text-[#E6D39A] transition">Mes arbres</NavLink>
            <NavLink to="/contact" className="hover:text-[#E6D39A] transition">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
