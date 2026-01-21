import './styles/HeroBanner.css';
import Catalog from './catalog/Catalog';

function HeroBanner({ onCategoryClick }) {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Снаряжение для охоты и рыбалки</h1>
          <p className="hero__subtitle">
            DDR - Всё для выезда в лес, на реку и в горы — от проверенных брендов
          </p>
          <div className="hero__actions">
            <a href="#catalog">
              <button className="btn btn--primary">Каталог</button>
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <h2 className="hero__category-title">Популярные категории</h2>
          <div className="hero__categories">
            <div id="equipment" className="hero_card" onClick={() => onCategoryClick("gear")}> {/* Экипировка */}
              <div className="hero__card"></div>
              <section className="hero-banner-title-section">
                <p>Экипировка</p>
              </section>
            </div>
            <div id="tourism" className="hero_card" onClick={() => onCategoryClick("tourism")}> {/* Туризм */}
              <div className="hero__card"></div>
              <section className="hero-banner-title-section">
                <p>Для туризма</p>
              </section>
            </div>
            <div id="fishing" className="hero_card" onClick={() => onCategoryClick("fishing")}> {/* Рыбалка */}
              <div className="hero__card"></div>
              <section className="hero-banner-title-section">
                <p>Рыбалка</p>
              </section>
            </div>
            <div id="optics" className="hero_card" onClick={() => onCategoryClick("optics")}> {/* Оптика */}
              <div className="hero__card"></div>
              <section className="hero-banner-title-section">
                <p>Оптика</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;