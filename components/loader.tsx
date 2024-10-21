const Loader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-row items-center justify-center z-9999999 absolute">
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
