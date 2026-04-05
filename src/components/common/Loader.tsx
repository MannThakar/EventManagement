const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 bg-white">
      <div className="w-10 h-10 rounded-full border-[2.5px] border-blue-100 border-t-blue-500 animate-spin" />

      <div className="text-5xl font-bold tracking-tight text-gray-900 ">
        Even<span className="text-blue-500">t</span>ify
      </div>
    </div>
  );
};

export default Loader;
