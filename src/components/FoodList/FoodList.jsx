import { Link } from 'react-router-dom'

const FoodList = (props) => {
    return (
        <main>
            {props.foods.map((food) => {
                return (
                    <Link key={food._id} to={`/foods/${food._id}`}>
                        <article>
                            <header>
                                <h2>{food.name}</h2>
                                <h3>{food.location}</h3>
                                <p>
                                    {food.text}
                                </p>
                                <p>{food.author.username} posted on {new Date(food.createdAt).toLocaleDateString()}</p>
                            </header>
                        </article>
                    </Link>
                )
            })}
        </main>
    )
};

export default FoodList;