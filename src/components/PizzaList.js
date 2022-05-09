import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { listOfPizzas } from "../store/pizzas/selectors";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(listOfPizzas);

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
        {pizzas.map((pizza) => (
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
