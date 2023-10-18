const Bands = () => {
  const handlePostUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const brandName = form.name.value;
    const photo = form.photo.value;
    // console.log(name, photo);
    const myData = {
      brandName,
      photo,
    };
    console.log(myData);

    fetch("http://localhost:5000/brand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user add successfully");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto grid justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">Brands: </h1>
        <form onSubmit={handlePostUser} action="">
          <input
            className="mb-2 input input-bordered input-accent w-full max-w-xs"
            type="text"
            name="name"
            placeholder="Brand Name"
            id=""
          />

          <br />
          <input
            className="mb-2 input input-bordered input-accent w-full max-w-xs"
            type="url"
            name="photo"
            placeholder="Brand Url"
            id=""
          />
          <br />
          <button className="btn-primary p-2 rounded-md" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bands;
