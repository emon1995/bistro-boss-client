const MenuItem = ({ subHeading, heading }) => {
  return (
    <div className="text-center mt-20 mb-8 md:w-4/12 mx-auto">
      <p className="text-yellow-500 mb-2">--- {subHeading} ---</p>
      <h2 className="text-2xl uppercase py-3 border-y-4">{heading}</h2>
    </div>
  );
};

export default MenuItem;
