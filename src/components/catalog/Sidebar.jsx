import { useState, useRef, useEffect } from "react";

const Sidebar = ({ setFilter }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const contentRefs = useRef({}); // для хранения ссылок на блоки подкатегорий

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

 
  // для плавной анимации высоты
  const getMaxHeight = (category) => {
    if (!contentRefs.current[category]) return "0px";
    return openCategory === category
      ? `${contentRefs.current[category].scrollHeight}px`
      : "0px";
  };

  return (
    <aside className="sidebar">
      <h4 onClick={() => { setFilter(null); toggleCategory(null); }} style={{ cursor: "pointer" }}>Все</h4>

      {/* ===== Оптика ===== */}
      <h4 onClick={() => { setFilter({ type: "category", slug: "optics" }); toggleCategory("optics"); }} style={{ cursor: "pointer" }}>
        Оптика
      </h4>       
      <div
        ref={(el) => (contentRefs.current["optics"] = el)}
        style={{
          maxHeight: getMaxHeight("optics"),
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          marginLeft: "10px",
        }}
      >
        <button onClick={() => setFilter({ type: "subcategory", slug: "binoculars" })}>Бинокли</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "spotting" })}>Зрительные трубы</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "rangefinders" })}>Дальномеры</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "optics-accessories" })}>Аксессуары</button>
      </div>

      {/* ===== Тепловизоры ===== */}
      <h4 onClick={() => { setFilter({ type: "category", slug: "thermal" }); toggleCategory("thermal"); }} style={{ cursor: "pointer" }}>
        Тепловизоры
      </h4>
      <div
        ref={(el) => (contentRefs.current["thermal"] = el)}
        style={{
          maxHeight: getMaxHeight("thermal"),
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          marginLeft: "10px",
        }}
      >
        <button onClick={() => setFilter({ type: "subcategory", slug: "thermal" })}>Тепловизоры для охоты</button>
      </div>

      {/* ===== Туризм ===== */}
      <h4 onClick={() => { setFilter({ type: "category", slug: "tourism" }); toggleCategory("tourism"); }} style={{ cursor: "pointer" }}>
        Туризм
      </h4>
      <div
        ref={(el) => (contentRefs.current["tourism"] = el)}
        style={{
          maxHeight: getMaxHeight("tourism"),
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          marginLeft: "10px",
        }}
      >
        <button onClick={() => setFilter({ type: "subcategory", slug: "gas" })}>Газовое оборудование</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "drybags" })}>Гермоупаковки</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "mats" })}>Коврики</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "camp-furniture" })}>Туристическая мебель</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "tents" })}>Палатки</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "tent-stoves" })}>Печи для палаток</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "coolers" })}>Портативные холодильники</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "cookware" })}>Посуда</button>
      </div>

      {/* ===== Рыбалка ===== */}
      <h4 onClick={() => { setFilter({ type: "category", slug: "fishing" }); toggleCategory("fishing"); }} style={{ cursor: "pointer" }}>
        Рыбалка
      </h4>
      <div
        ref={(el) => (contentRefs.current["fishing"] = el)}
        style={{
          maxHeight: getMaxHeight("fishing"),
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          marginLeft: "10px",
        }}
      >
        <button onClick={() => setFilter({ type: "subcategory", slug: "rods" })}>Удилища</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "reels" })}>Катушки</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "lines" })}>Леска и шнуры</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "lures" })}>Приманки</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "bait" })}>Прикормки</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "rigs" })}>Оснащение</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "fishing-equipment" })}>Рыболовное оборудование</button>
      </div>

      {/* ===== Экипировка ===== */}
      <h4 onClick={() => { setFilter({ type: "category", slug: "gear" }); toggleCategory("gear"); }} style={{ cursor: "pointer" }}>
        Экипировка
      </h4>
      <div
        ref={(el) => (contentRefs.current["gear"] = el)}
        style={{
          maxHeight: getMaxHeight("gear"),
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          marginLeft: "10px",
        }}
      >
        <button onClick={() => setFilter({ type: "subcategory", slug: "clothing" })}>Одежда</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "footwear" })}>Обувь</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "accessories" })}>Аксессуары</button>
        <button onClick={() => setFilter({ type: "subcategory", slug: "knifes" })}>Ножи</button>
      </div>
    </aside>
  );
};

export default Sidebar;
