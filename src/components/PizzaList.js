import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { listOfPizzas } from "../store/pizzas/selectors";

function compare_sales(pizza_a, pizza_b) {
  return pizza_b.bought - pizza_a.bought;
}

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(listOfPizzas);

  const pizzasSorted = [...pizzas].sort(compare_sales);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>
        We have <strong>{pizzas.length} delicious options</strong> of pizza in
        our menu!
      </p>
      <ul>
        {pizzasSorted.map((pizza) => (
          <li>
            {pizza.name}
            <p>{pizza.description}</p>
            <p>bought: {pizza.bought} times</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaList };
