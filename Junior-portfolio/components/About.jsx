const About = () => {
  return (
    <div className="flex justify-center items-center p-2 py-16 md:h-screen">
      <div className="grid-cols-3 gap-8 items-center m-auto md:grid">
        <div className="col-span-2 tracking-wider">
          <h5 className="text-[#5651e5]">About</h5>
          <h3>Who I Am</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nec a tellus,
            ante potenti nascetur habitant suspendisse venenatis consequat id.
            Erat faucibus odio imperdiet sollicitudin magnis torquent per
            venenatis vel mollis, viverra aptent montes orci quam et lectus
            vestibulum at dapibus, Erat sem mus parturient pharetra congue eget
            non, orci netus sagittis nulla blandit ullamcorper tellus, rutrum
            viverra nisi nullam ut venenatis.
          </p>
          <p className="py-10">
            Erat sem mus parturient pharetra congue eget non, orci netus
            sagittis nulla blandit ullamcorper tellus, rutrum viverra nisi
            nullam ut venenatis. Magna natoque gravida class hac euismod quisque
            suspendisse mattis nisl rhoncus auctor,
          </p>
        </div>
        <div className="p-3 border border-gray-400 duration-300 ease-in hover:scale-105">
          <img
            className="object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
