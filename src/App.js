
import { Body } from "./components/backgroundControls/Body";
import { Weather } from "./features/weather/Weather";
import { Quote } from "./features/quote/Quote";


export const App = () => {
  return (
    <div className="App">
      <div className="Backdrop"></div>

      
      <Weather />
      <Body />
      <Quote/>
      
    </div>
  );
};