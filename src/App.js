import "./App.css";
import { Body } from "./components/backgroundControls/Body";
import { Weather } from "./features/weather/Weather";
import { Quote } from "./features/quote/Quote";
import { Background } from "./features/background/Background";


export const App = () => {
  return (
    <div className="App">
      <div className="Backdrop"></div>

      <Background />
      <Weather />
      <Body />
      <Quote/>
      
    </div>
  );
};