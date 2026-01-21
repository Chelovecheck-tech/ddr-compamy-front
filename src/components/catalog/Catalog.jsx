import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import "../styles/Catalog.css";

const Catalog = ({ filter, setFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    let url = "http://127.0.0.1:8000/api/products/";
    if (filter) {
      if (typeof filter === "object" && filter.type && filter.slug) {
        if (filter.type === "category") {
          url += `?category=${filter.slug}`;
        } else if (filter.type === "subcategory") {
          url += `?subcategory=${filter.slug}`;
        }
      } else if (typeof filter === "string") {
        url += `?category=${filter}`;
      }
    }
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки товаров");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [filter]);

  let filteredProducts = products.filter((p) => {
    const searchMatch =
      (p.name || p.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    return searchMatch;
  });

  if (sortOrder === "asc") {
    filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="catalog-layout">
        <Sidebar setFilter={setFilter} />

        <div style={{ flex: 1 }}>
          {/* Поиск */}
          <div style={{ marginBottom: "15px", display: "flex", gap: "10px", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Поиск по названию или бренду..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.2s ease-in-out",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
                e.target.style.borderColor = "#fb923c";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
                e.target.style.borderColor = "#ddd";
              }}
            />

            <button
    onClick={() => setSortOrder("asc")}
    style={{
      padding: "12px 16px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      fontSize: "14px",
      cursor: "pointer",
      background: sortOrder === "asc" ? "#fb923c" : "#fff",
      color: sortOrder === "asc" ? "#fff" : "#000",
      transition: "all 0.2s ease-in-out",
    }}
  >
    Цена ↑
  </button>

  <button
    onClick={() => setSortOrder("desc")}
    style={{
      padding: "12px 16px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      fontSize: "14px",
      cursor: "pointer",
      background: sortOrder === "desc" ? "#fb923c" : "#fff",
      color: sortOrder === "desc" ? "#fff" : "#000",
      transition: "all 0.2s ease-in-out",
    }}
  >
    Цена ↓
  </button>

          </div>

          <div className="products-grid">
            {loading && <div>Загрузка товаров...</div>}
            {error && <div style={{color:'red'}}>Ошибка: {error}</div>}
            {!loading && !error && filteredProducts.length === 0 && <div>Нет товаров</div>}
            {!loading && !error && filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onDetails={() => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Catalog;
