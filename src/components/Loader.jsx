const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col mt-10">
    <h1 className="font-bold text-2xl text-white">
      {title || 'Loading...'}
    </h1>
  </div>
);
export default Loader;