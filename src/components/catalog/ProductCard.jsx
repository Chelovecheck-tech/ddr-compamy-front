const ProductCard = ({ product, onDetails }) => {
  return (
    <div className="product-card">
        <img
          src={product.image || "/assets/placeholder300.png"}
          alt={product.title}
        />

      <h3>{product.title}</h3>
      <p>{product.price.toLocaleString()} сом</p>

      <button className="details" onClick={onDetails}>
        Подробнее
      </button>
    </div>
  );
};

export default ProductCard;
