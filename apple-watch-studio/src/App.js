import CollectionSwitch from './components/CollectionSwitch/CollectionSwitch';
import WatchPreview from './components/WatchPreview/WatchPreview';
import CaseSelection from './components/CaseSelection/CaseSelection';
import SizeSelection from './components/SizeSelection/SizeSelection';
import BandSelection from './components/BandSelection/BandSelection';
import './App.css';

function App() {
  return (
    <div>
      <div className="apple-watch-studio">
       <div className="logo">
        <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1735280021/apple-watch-design-studio-logo_tn1wac.jpg" alt="" className="image"/>
       </div>
       <div className="collections-dropdown container mx-auto p-4 space-y-8" >
       <CollectionSwitch/>
       <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <WatchPreview />
          <div className="flex-1 space-y-4">
          <CaseSelection />
          <SizeSelection/>
          <BandSelection/>
        
        </div>
          </div>
          </div>
       </div> 
       </div>  
  </div>
    
  );
}

export default App;
