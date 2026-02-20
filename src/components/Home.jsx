import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    console.log(initialCoffees);
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;