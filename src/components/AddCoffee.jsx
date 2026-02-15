const AddCoffee = () => {
    return (
        <div className="p-24 bg-base-200 mt-10">
            <div className="text-center p-12 space-y-6">
                <h2 className="text-6xl">Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
                    <fieldset className="fieldset border-none rounded-box  border ">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name="name" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box  border ">
                        <label className="label">Chef</label>
                        <input type="text" className="input w-full" name="chef" placeholder="Enter coffee chef" />
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
                        <label className="label">Category</label>
                        <input type="text" className="input w-full" name="category" placeholder="Enter coffee category" />
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