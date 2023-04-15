import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { useContext } from "react"


const Details = () => {
  const { pizzas } = useContext(MyContext);
  const { id } = useParams();
  const i = pizzas.findIndex(x => x.id === id)
  const name = pizzas[i].name



  return (
    <>
    <div className="detail-container">
        <div className="detail">
            <div className="detail-l">
                <h2>{name.charAt(0).toUpperCase() +
                        name.slice(1)}</h2>
                <p><span>Ingredientes: </span>{pizzas[i].ingredients.join(", ")}</p>
                <p>{pizzas[i].desc}</p>
                <div className="buy">
                    <button onClick={() => onAddProduct(pizzas[i])} className="add-detail">Agregar</button>

                </div>
            </div>
            <div className="detail-r">
                <div className="detail-img">
                    <img src={pizzas[i].img} alt={name} />
                </div>
            </div>
        </div>
    </div>
</>  
)
}

export default Details