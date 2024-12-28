
import useStore from './../../store/useStore';

const collections = ['Series 10', 'Hermès', 'SE'];

const CollectionSwitch = () => {
  const { selectedCollection, setCollection } = useStore();

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">Collections</h2>
      <select
        value={selectedCollection}
        onChange={(e) => setCollection(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="" disabled>
          Select a collection
        </option>
        {collections.map((collection) => (
          <option key={collection} value={collection}>
            {collection}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CollectionSwitch;
