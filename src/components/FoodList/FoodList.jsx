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
                                <p>
                                    {food.text}
                                </p>
                            </header>
                            <p>{food.author.username} posted on {new Date(food.createdAt).toLocaleDateString()}</p>
                        </article>
                    </Link>
                )
            })}
        </main>
    )
};

export default FoodList;