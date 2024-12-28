import useStore from './../../store/useStore';

const WatchPreview = () => {
  const { selectedCase, selectedSize, selectedBand } = useStore();

  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-semibold text-center mb-4">Watch Preview</h2>
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 border rounded-full flex items-center justify-center">
          <p>{selectedCase || 'Select a case'}</p>
        </div>
        <p className="mt-4">{selectedSize || 'Select a size'}</p>
        <p className="mt-2">{selectedBand || 'Select a band'}</p>
      </div>
    </div>
  );
};

export default WatchPreview;
