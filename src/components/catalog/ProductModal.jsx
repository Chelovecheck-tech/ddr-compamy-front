import "../styles/catalog.css";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>

        <div className="modal-content">
          
          <div className="modal-image">
            <img
              src={product.image || "https://via.placeholder.com/400"}
              alt={product.title}
            />
          </div>

          
          <div className="modal-info">
            <h2>{product.title}</h2>
            {product.brand && <p className="brand">Производитель: {product.brand}</p>}
            <p className="price">{product.price.toLocaleString()} Сом</p>
            <p className="description">
              {product.description || "Описание скоро появится"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;