import { Link } from "react-router-dom"

const NavBar1 = () => {

  // const [darkTheme, setTheme] = useState<boolean>(True);
  return (
    <div className="flex items-center justify-between 
                    border-b-[0.69px] border-white/[0.90] 
                    pt-1 pb-2 text-[18px]">

      <div className="flex gap-20 col-span-8 ml-10 items-center font-bold">
        <p className="text-blue-400 text-2xl mr-10"><Link to = "/">CoinTrade</Link></p>
        <div><Link to = "/Trending">Trending</Link></div>
        <div><Link to = "/Heatmap">Heatmap</Link></div>
        <div><Link to = "/Watchlist">Watchlist</Link></div>
      </div>
      

      <div className="flex gap-10">
        <div>
          <label htmlFor="dropdown">Currency :</label>
          <select id="dropdown" className="bg-inherit"> 
          {/* value={selectedCurrency} onChange={handleCurrencyChange} */}
            <option value="" className="text-white/[.90] bg-[#05010D]">USD</option>
            <option value="option1" className="text-white/[.90] bg-[#05010D]">INR</option>
            <option value="option2" className="text-white/[.90] bg-[#05010D]">USD</option>
            <option value="option3" className="text-white/[.90] bg-[#05010D]">EURO</option>
          </select>
        </div>
        <button className="mr-10">icon</button>
        </div>
    </div>
  )
}

export default NavBar1
