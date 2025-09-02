import vegetables from '../data/vegetables.json';

function Vegetables() {
    return (
        <div>
            <h1>Vegetables</h1>
            {/* 
                Step 1: Group vegetables by category using reduce()
                - Start with empty object {}
                - For each vegetable, check if its category exists as a key
                - If not, create empty array for that category
                - Push the vegetable into the appropriate category array
                - This transforms the flat array into grouped object like:
                {
                    "leafyGreens": [{id: 1, name: "Spinach", category: "leafyGreens"}, ...],
                    "rootVegetables": [{id: 3, name: "Carrots", category: "rootVegetables"}, ...],
                    etc.
                }
            */}
            {Object.entries(
                vegetables.reduce((acc, vegetable) => {
                    if (!acc[vegetable.category]) {
                        acc[vegetable.category] = [];
                    }
                    acc[vegetable.category].push(vegetable);
                    return acc;
                }, {})
            ).map(([category, veggies]) => (
                /* 
                    Step 2: Convert grouped object to array of [key, value] pairs using Object.entries()
                    Then map over each category to render it
                    - category: the category name (string)
                    - veggies: array of vegetables in that category
                */
                <div key={category} className="vegetable-category">
                    <h2 className="vegetable-category__title">{category}</h2>
                    <ul className="vegetable-category__list">
                        {/* 
                            Step 3: For each category, map over its vegetables
                            to create list items displaying each vegetable name
                        */}
                        {veggies.map(vegetable => (
                            <li key={vegetable.id} className="vegetable-category__item">
                                {vegetable.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Vegetables