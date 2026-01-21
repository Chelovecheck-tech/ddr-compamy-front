const products = [
  {
    id: 1,
    title: "Бинокль Yukon Solaris 10x50",
    category: "optics",       // Основная категория
    subcategory: "binoculars",// Подкатегория
    price: 12500,
    image: "https://veber.ru/upload/iblock/8da/solaris_main.jpg",
    description: "Полевой бинокль для охоты, туризма и наблюдений",
    brand: "Yukon",
    inStock: true,
  },
  {
    id: 2,
    title: "Бинокль OA Professional 10x42 BAK-4 компакт",
    category: "optics",
    subcategory: "binoculars",
    price: 12990,
    image: "https://img.ohotaktiv.ru/upload/resize_cache/iblock/1d3/200_200_1/jawajqx6anhgzfy2y468m4cgeuq1pixi.webp",
    description: "Компактный бинокль с призмами BAK-4 для охоты и наблюдений",
    brand: "OA Professional",
    inStock: true,
  },
  {
    id: 17,
    title: "Лазерный дальномер SIGHTMARK Range Finder Pin Seeker 1300",
    category: "optics",
    subcategory: "rangefinders",
    price: 45890,
    image: "https://www.premium-optics.ru/upload/iblock/1ba/1badfb7690d1298c96453f368328ca01.jpg",
    description: "Лазерный дальномер до 1300 м с режимом Pin Seeker для точного захвата цели (без подсветки)",
    brand: "Sightmark",
    inStock: true,
  },
  {
    id: 20,
    title: "Труба зрительная Konus Konuspot-60C 20-60x60 mm, наклонный окуляр",
    category: "optics",
    subcategory: "spotting",
    price: 11672,
    image: "https://www.bhphotovideo.com/images/fb/konus_7125_konuspot_60c_20_60x60_zoom_spotting_1401210.jpg",
    description: "Зрительная труба с переменной кратностью 20-60x, объектив 60 мм, наклонный окуляр для комфортных наблюдений",
    brand: "Konus",
    inStock: true,
  },
  // … остальные товары аналогично, например, тепловизоры category: "thermal", туризм category: "tourism", рыбалка category: "fishing" и т.д.
];

export default products;
