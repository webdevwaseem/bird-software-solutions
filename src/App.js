import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./images/Logo.png";
import Graphic1 from "./images/graphic1.png";
import UnlockWallet from "./UnlockWallet";
import helmet from "./images/Astronaut.png";
import banana from "./images/banana.png";
import logo31 from "./images/logo31.png";
import lol from "./images/101.png";
import twitter from "./images/twitter.png";
import telegram from "./images/telegram.png";
import discord from "./images/31.png";
import cube from "./images/41.png";
import circle from "./images/51.png";

function App() {
  return (
    <div className="App">
      <div className="header flex h-28 justify-between items-center px-10">
        <div className="w-4/12 flex justify-start">
          <button className="button text-xs mx-4 hidden sm:inline-block ">
            Apply for IDO
          </button>
          <button className="button text-xs mx-4 hidden sm:inline-block ">
            Launch App
          </button>
        </div>
        <div className="w-4/12 flex justify-center">
          <img className="Logo" src={Logo} alt="logo" />
        </div>
        <div className="w-4/12 flex justify-end text-white">
          <MenuIcon />
        </div>
      </div>
      <div className="hero flex justify-center items-center">
        <div className="main-left flex flex-col">
          <div className="astro"></div>
          <div className="main-left-second">
            <div className="fiesta">
              <h1>FIESTA</h1>
            </div>
            <div className="text">
              <h2>
                Stake NAUT to earn new tokens you can unstake at any time
                Rewards are calculated per block .
              </h2>
            </div>
          </div>
        </div>
        <div className="main-right">
          <img src={Graphic1} alt="graphic1" />
        </div>
      </div>
      <div className="body">
        <div className="body-1st">
          <button className="button2">Active</button>
          <button className="similar">Inactivity</button>
        </div>
        <div className="body-2nd">
          <UnlockWallet helmet={helmet} />
          <UnlockWallet helmet={banana} />
          <UnlockWallet helmet={banana} />

          <UnlockWallet helmet={logo31} />
        </div>
        <div className="trade flex justify-center items-center">
          <img src={lol} alt="lol" />
        </div>
        <div className="flex justify-between mx-10 my-16">
          <div className="flex">
            <div className="flex flex-col text-white mx-6">
              <h1 className="my-4 support">Support</h1>
              <h2 className="support-h2">Whitepaper</h2>
              <h2 className="support-h2">Team</h2>
              <h2 className="support-h2">News</h2>
            </div>
            <div className="text-white mx-6">
              <h1 className="my-4 support">About</h1>
              <h2 className="support-h2">Docs</h2>
              <h2 className="support-h2">FAQ</h2>
              <h2 className="support-h2">Privacy</h2>
            </div>
          </div>
          <div className="flex flex-col items-end text-white">
            <h1 className="my-4 updated support">Stay Updated</h1>
            <div className="flex footer-icons">
              <div className="foot-image mr-4 flex justify-center items-center">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="foot-image mr-4 flex justify-center items-center">
                <img src={discord} alt="twitter" />
              </div>
              <div className="foot-image mr-4 flex justify-center items-center">
                <img src={cube} alt="twitter" />
              </div>
              <div className="foot-image mr-4 flex justify-center items-center">
                <img src={circle} alt="twitter" />
              </div>
              <div className="foot-image flex justify-center items-center">
                <img src={telegram} alt="twitter" />
              </div>
            </div>
            <h2 className="support-h2 mt-8 chain">
              Powered by the Binance Smart Chain
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
