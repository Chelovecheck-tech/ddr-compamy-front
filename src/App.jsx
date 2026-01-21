import { useState } from 'react'
import './App.css'

import Catalog from './components/catalog/Catalog'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Footer from './components/Footer'

function App() {
  const [filter, setFilter] = useState(null);

  const handleCategoryClick = (category) => {
    setFilter(category);
    // Плавный скролл по id
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section>
      <Header />
      <section id="hero">
        <HeroBanner onCategoryClick={handleCategoryClick} />
      </section>
      <section id="catalog">
        <Catalog filter={filter} setFilter={setFilter} />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </section>
  );
}

export default App
