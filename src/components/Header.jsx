import './styles/Header.css';
function Header() {  
    return (
        <header className="header">
      <div className="top-bar">
        <div className="container top-inner">
          <div className="brand"><img className = 'logo' src="/assets/logo.png" alt="Logo" /></div>
          <div className='cards'>
            <div className="card"><img className = 'phone-icon' src = 'https://cdn-icons-png.flaticon.com/512/545/545245.png' alt="Phone Icon" /><div className='subcard'><p>Whatsapp number</p><a>+996 508 755 995</a></div></div>
            <div className="card" id = 'loc'><img src = 'https://cdn-icons-png.flaticon.com/512/684/684908.png' alt="Location Icon" /><div className='subcard'><p>Our address</p><a>с.Кожомкул , ул Пионерская 115а</a></div></div>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <nav className="nav">
          <a href="#catalog">Каталог</a>
          <a href="#hero">О нас</a>
          <a href="#footer">Контакты</a>
        </nav>
      </div>
    </header>
         
    
    );
};
export default Header