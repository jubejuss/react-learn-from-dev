// See kood ekspordib konstanti nimega PRODUCTS, mis on massiiv objektidest.
// Iga objekt esindab ühte toodet ja sisaldab nelja omadust: category, price, stocked ja name.
// 'category' omadus näitab, millisesse kategooriasse toode kuulub, näiteks "Fruits" või "Vegetables".
// 'price' omadus näitab toote hinda stringina, näiteks "$1" või "$2".
// 'stocked' omadus on boolean väärtus, mis näitab, kas toode on laos olemas (true) või mitte (false).
// 'name' omadus on toote nimi, näiteks "Apple" või "Spinach".
export const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
