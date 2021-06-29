import React from "react";
import "./Unlock.css";

function UnlockWallet({ helmet }) {
  return (
    <div className="widget flex items-center justify-around my-6 flex-wrap">
      <div className="box flex mx-4 justify-center items-center">
        <img src={helmet} alt="helmet" />
      </div>
      <h1 className="naut">Naut Pool</h1>
      <div className="flex flex-col justify-center items-center">
        <h1 className="oo">0.000</h1>
        <h2 className="earned">naut earned</h2>
      </div>
      <div>
        <h1 className="ooo">126.51%</h1>
        <h2 className="earned">Arp</h2>
      </div>
      <div>
        <h1 className="ooo">126.51%</h1>
        <h2 className="earned">Arp</h2>
      </div>
      <h1 className="earned2">Core</h1>
      <h1 className="earned2">Details</h1>

      <button className="button">Unlock Wallet</button>
    </div>
  );
}

export default UnlockWallet;
