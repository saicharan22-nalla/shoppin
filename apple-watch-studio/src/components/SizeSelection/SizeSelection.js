import useStore from "../../store/useStore";

const sizes = ['42mm', '46mm'];

const SizeSelection = () => {
  const { selectedSize, setSize } = useStore();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Select a Size</h2>
      <div className="flex space-x-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSize(size)}
            className={`px-4 py-2 border rounded-md ${
              selectedSize === size ? 'border-blue-500 shadow-lg' : 'border-gray-300'
            } hover:shadow-md transition-all`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
