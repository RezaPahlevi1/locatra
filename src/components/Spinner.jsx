function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute w-5 h-5 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default Spinner;
