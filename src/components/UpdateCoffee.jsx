import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const { _id, name, photo, price, quantity, supplier, taste, details } = useLoaderData();
    // console.log(coffee)

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee)

        //send updated coffee to db
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset()
            })
    }
    return (
        <div className="p-24 bg-base-200 mt-10">
            <div className="text-center p-12 space-y-6">
                <h2 className="text-6xl">Update Coffee</h2>

            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
                    <fieldset className="fieldset border-none rounded-box  border ">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name="name" defaultValue={name} placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Qunatity</label>
                        <input type="text" className="input w-full" name="quantity" defaultValue={quantity} placeholder="Enter coffee quantity" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" name="taste" defaultValue={taste} placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name="price" defaultValue={price} placeholder="Enter coffee Price" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name="details" defaultValue={details} placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset mt-6  border-none rounded-box  border ">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name="photo" defaultValue={photo} placeholder="Enter photo URL" />
                </fieldset>
                <button className="btn w-full mt-6 bg-[#D2B48C]">Update Coffee</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;