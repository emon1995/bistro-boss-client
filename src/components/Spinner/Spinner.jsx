const Spinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <p className="text-7xl font-extrabold textColor">L</p>
        <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 bgColor font-extrabold"></div>
        <p className="text-7xl font-extrabold textColor">ading...</p>
      </div>
    </div>
  );
};

export default Spinner;
