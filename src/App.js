
import { Body } from "./components/backgroundControls/Body";
import { Weather } from "./features/weather/Weather";



export const App = () => {
  return (
    <div className="App">
      <div className="Backdrop"></div>

      
      <Weather />
      <Body />
      
      
    </div>
  );
};