import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
    const coffeeData = useLoaderData();
    console.log(coffeeData)
    return (
        <div>
            <h2>Coffee Details</h2>
        </div>
    );
};

export default CoffeeDetails;