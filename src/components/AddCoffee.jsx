import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log(formData.entries())
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee)

        //add new coffee in db
        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('Coffee Added Successfully', data)
                    Swal.fire({
                        title: "Coffee Added Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            });
    }
    return (
        <div className="p-24 bg-base-200 mt-10">
            <div className="text-center p-12 space-y-6">
                <h2 className="text-6xl">Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
                    <fieldset className="fieldset border-none rounded-box  border ">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name="name" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Qunatity</label>
                        <input type="text" className="input w-full" name="quantity" placeholder="Enter coffee quantity" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name="supplier" placeholder="Enter coffee supplier" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" name="taste" placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name="p rice" placeholder="Enter coffee Price" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name="details" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset mt-6  border-none rounded-box  border ">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name="photo" placeholder="Enter photo URL" />
                </fieldset>
                <button className="btn w-full mt-6 bg-[#D2B48C]">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;