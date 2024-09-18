const NavBar2 = () => {
  return (
    <div className="flex items-center justify-between border-b-[0.69px] border-white/[0.90] 
                    text-white/[0.80] pt-2 pb-2 shadow-md shadow-blue-400/[0.5]">
      <div className="ml-10 gap-5 text-sm flex">
        <span>Market Cap:<span className="text-blue-400">$2.66T</span> 0.90%</span> 
        <span>24h Vol: <span className="text-blue-400">$64.6B </span>22.06%</span>
        <span>Dominance: <span className="text-blue-400">BTC:51.9% ETH: 16.3%</span></span>
        <span>ETH Gas: <span className="text-blue-400">19Gwei</span></span>
      </div>
      <div className="pr-10">
        <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-3 py-1"></input>
      </div>
      
    </div>
  )
}

export default NavBar2
