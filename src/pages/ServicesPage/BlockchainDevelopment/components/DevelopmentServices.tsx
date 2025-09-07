import React from "react";
import { Service } from "../../../../interfaces/Data";
import custom from "../../../../assets/blockchain/custom.png";
import contract from "../../../../assets/blockchain/contract.png";
import dapp from "../../../../assets/blockchain/dapp.png";
import nft from "../../../../assets/blockchain/nft.png";
import wallet from "../../../../assets/blockchain/wallet.png";
import token from "../../../../assets/blockchain/token.png";
import blockchain from "../../../../assets/blockchain/blockchain.png";
import consulting from "../../../../assets/blockchain/consulting.png";

export default function DevelopmentServices() {
  return (
    <section className="p-page py-16">
    <h3 className="text-center text-4xl text-[#0F2137] pb-16 font-bold">Our Blockchain Development Services</h3>
    <div className="grid grid-cols-2 gap-4">
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
      <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
      <img src={custom} alt="custom"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">Custom Blockchain Development</h5>
        <p className="text-[#343D48] text-xs font-normal">We build secure, scalable, and custom blockchain   solutions tailored to your business needs.</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
        <span className="bg-[#07507B] inline-block border-2 w-[75px] h-[75px] rounded-[10px]">
        <img src={contract} alt="contract"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">Smart Contract Development</h5>
        <p className="text-[#343D48] text-xs font-normal">We create secure, tamper-proof smart contracts that automate transactions and cut third-party costs.</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
        <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
        <img src={dapp} alt="dapp"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">dApp Development</h5>
        <p className="text-[#343D48] text-xs font-normal">We build fast, secure, and user-friendly dApps on Ethereum, Solana, and Polygon—blending performance with trust</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
      <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
      <img src={nft} alt="nft"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">NFT Marketplace Development</h5>
        <p className="text-[#343D48] text-xs font-normal">Launch your own NFT platform with minting, trading, and wallet integration—built for creators and collectors.</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
      <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
      <img src={wallet} alt="wallet"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">Blockchain Wallet Development</h5>
        <p className="text-[#343D48] text-xs font-normal">We build secure, multi-currency crypto wallets with encryption, easy UI, and integration with exchanges and dApps</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
      <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
      <img src={token} alt="token"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">Token Development</h5>
        <p className="text-[#343D48] text-xs font-normal">Easily launch your own crypto tokens—ERC-20, BEP-20, and more—with our end-to-end development services.</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
      <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
      <img src={blockchain} alt="Blockchain"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">Private & Public Blockchain</h5>
        <p className="text-[#343D48] text-xs font-normal">We build private and public blockchains that balance transparency, control, and performance—tailored to your strategy.</p>
        </div>
      </div>
    </div>
    <div className="bg-[#FAFAFA] border border-[#E7DAED] p-2">
      <div className="flex gap-3 justify-between">
      <span className="flex items-center justify-center text-center bg-[#07507B] border-2 w-[75px] h-[75px] rounded-[10px]">
      <img src={consulting} alt="Consulting"/>
        </span>
        <div className="w-[90%]">
        <h5 className="text-[#0F2137] font-bold text-xl">Blockchain Consulting</h5>
        <p className="text-[#343D48] text-xs font-normal">Unsure where to start? Get a free consultation to find the right blockchain strategy and tech stack for your project.</p>
        </div>
      </div>
    </div>
  </div>
  </section>
  );
}
