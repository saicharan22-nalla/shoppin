import useStore from "../../store/useStore";

const CaseSelection = () => {
  const { cases, selectedCase, setCase } = useStore();

  const handleSelection = (caseId) => {
    setCase(caseId);
  };

  return (
    <div>
      <h2>Select Case</h2>
      <div>
        {cases.map((caseType) => (
          <button
            key={caseType.id}
            onClick={() => handleSelection(caseType.id)}
            style={{
              border: selectedCase === caseType.id ? "2px solid blue" : "1px solid gray",
            }}
          >
            
            <p>{caseType.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;
