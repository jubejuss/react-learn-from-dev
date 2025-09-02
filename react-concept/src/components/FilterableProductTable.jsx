
import { useState } from 'react';

// See kood impordib kaks komponenti: SearchBar ja ProductTable.
// FilterableProductTable funktsioon võtab vastu 'products' prop'i, mis on toodete massiiv.
// Funktsioon tagastab JSX-i, mis sisaldab div elementi.
// Div elemendi sees renderdatakse SearchBar komponent, mis on otsinguriba kasutajaliides.
// Samuti renderdatakse ProductTable komponent, millele antakse edasi 'products' prop.
// Lõpuks eksporditakse FilterableProductTable komponent vaikimisi, et seda saaks teistes failides kasutada.
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}


// ProductCategoryRow komponent võtab vastu 'category' prop'i, mis esindab tootekategooriat.
// Tagastatakse tabeli rida (tr element), mille sees on üks lahter (th element).
// Lahtril on määratud atribuut 'colSpan' väärtusega 2, mis tähendab, et see katab kaks veergu.
// Lahtri sees kuvatakse kategooria nimi, mis on saadud 'category' prop'ist.
// Lõpuks eksporditakse ProductCategoryRow komponent, et seda saaks teistes failides kasutada.
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}


// ProductRow komponent võtab vastu 'product' prop'i, mis esindab ühte toodet.
// Muutuja 'name' määratakse vastavalt sellele, kas toode on laos olemas või mitte.
// Kui toode on laos (product.stocked on true), siis 'name' väärtuseks on toote nimi.
// Kui toode ei ole laos (product.stocked on false), siis 'name' väärtuseks on span element, 
// mille sees on toote nimi ja mille stiiliks on määratud punane värv.
// Tagastatakse tabeli rida (tr element), mille sees on kaks lahtrit (td elemendid).
// Esimene lahter sisaldab 'name' väärtust ja teine lahter sisaldab toote hinda.
// Lõpuks eksporditakse ProductRow komponent, et seda saaks teistes failides kasutada.
function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}


// See kood impordib kaks komponenti: ProductCategoryRow ja ProductRow. 
// ProductTable funktsioon võtab vastu 'products' prop'i, mis on toodete massiiv. 
// Koodis luuakse tühi massiiv 'rows' ja muutuja 'lastCategory', mille algväärtus on null. 
// Iga toote puhul massiivis 'products' kontrollitakse, kas toote kategooria erineb viimasest kategooriast. 
// Kui kategooria on erinev, lisatakse 'rows' massiivi ProductCategoryRow komponent, 
// millele antakse kategooria ja võtmena kategooria nimi. 
// Seejärel lisatakse 'rows' massiivi ProductRow komponent, millele antakse toode ja võtmena toote nimi. 
// Muutuja 'lastCategory' uuendatakse praeguse toote kategooriaga. 
// Lõpuks tagastatakse HTML tabel, mille päises on veerud "Name" ja "Price", 
// ning mille kehas on kõik loodud read 'rows' massiivist.
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


// SearchBar komponent on funktsioon, mis tagastab JSX-i vormi elemendi kujul.
// Vorm sisaldab tekstisisestusvälja (input element), mille tüübiks on 'text' ja mille kohatäiteks on "Search...".
// Tekstisisestusväli võimaldab kasutajal sisestada otsingusõna toodete filtreerimiseks.
// Vorm sisaldab ka märkeruutu (checkbox), mis on paigutatud label elemendi sisse.
// Märkeruudu kõrval on tekst "Only show products in stock", mis viitab sellele, et märkeruudu valimisel kuvatakse ainult laos olevaid tooteid.
// Lõpuks eksporditakse SearchBar komponent, et seda saaks teistes failides kasutada.
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

