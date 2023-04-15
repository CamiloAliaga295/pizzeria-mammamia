import { MyContext } from "../context/MyContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {

  const { pizzas } = useContext(MyContext);

  
  const navigate = useNavigate();
  const handleClick = (pizza) => {
      navigate(`/${pizza.id}`);
  };

  return (
    <div className="product-list-container">
            <div className="product-list">
                {pizzas.map((pizza) => (
                    <div className="product-card" id={pizza.id} key={pizza.id}>
                        <div className="img-container" onClick={() => handleClick(pizza)}>
                            <img src={pizza.img} alt={pizza.name} />
                        </div>
                        <h2 onClick={() => handleClick(pizza)}>
                            {pizza.name.charAt(0).toUpperCase() +
                                pizza.name.slice(1)}
                        </h2>
                        <p>{pizza.ingredients.join(", ")}</p>
                        
                        </div>
                         ))}
                         </div>
                     </div>
  )
}

export default Products