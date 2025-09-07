import React from "react";
import { Service } from "../../../../interfaces/Data";
import oneCirle from "../../../../assets/blockchain/one-circle.png";
import twoCirle from "../../../../assets/blockchain/two-circle.png";
import threeCirle from "../../../../assets/blockchain/three-circle.png";
import fourCirle from "../../../../assets/blockchain/four-circle.png";
import bgLine from "../../../../assets/blockchain/bg-line.png";

export default function WhyChoose() {
  return (
    <section className="p-page py-16 bg-[#F9F9F9]">
    <h3 className="text-center text-4xl text-[#0F2137] mb-6 pb-[8rem] font-bold">Why Choose Blockchain?</h3>
    <div className="grid grid-cols-4 gap-4 relative">
    <div className="text-center p-7">
        <div className="flex items-center justify-center text-center mt-[-90px]">
         <img src={oneCirle} alt="oneCirle" className="w-100"/>
        </div>
          <div className="pt-3">
          <h5 className="text-[#0F2137] font-bold text-3xl">Unbreakable <br/> Security</h5>
          <p className="text-[#343D48] text-lg font-normal">Immutable ledgers prevent fraud and hacking.</p>
        </div>
    </div>
    <div className="text-center p-7">
    <div className="pt-3">
          <h5 className="text-[#0F2137] font-bold text-3xl">Transparent  <br/>  Transactions</h5>
          <p className="text-[#343D48] text-lg font-normal">Every action is verifiable and auditable.</p>
        </div>
        <div className="flex items-center justify-center text-center mt-[64px]">
         <img src={twoCirle} alt="twoCirle" className="w-100"/>
        </div>
    </div>
    <div className="text-center p-7">
        <div className="flex items-center justify-center text-center mt-[-90px]">
         <img src={threeCirle} alt="threeCirle" className="w-100"/>
        </div>
        <div className="pt-3"> 
          <h5 className="text-[#0F2137] font-bold text-3xl">Cost  <br/>  Efficiency</h5>
          <p className="text-[#343D48] text-lg font-normal">Cut intermediaries with self-executing smart contracts.</p>
        </div>
    </div>
    <div className="text-center p-7">
    <div className="pt-3">
          <h5 className="text-[#0F2137] font-bold text-3xl">Future-Proof <br/>   Growth</h5>
          <p className="text-[#343D48] text-lg font-normal">Tap into Web3, DeFi, and the metaverse economy.</p>
        </div>
        <div className="flex items-center justify-center text-center mt-[64px] ">
         <img src={fourCirle} alt="fourCirle" className="w-100"/>
        </div>
    </div>
    <img src={bgLine} alt="bgLine" className="w-full absolute right-0 left-0"/>
  </div>
  </section>
  );
}
