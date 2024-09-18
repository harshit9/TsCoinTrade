import BitcoinHalvingCountdown from '../components/BitcoinHalvingCountdown'
import FearGreedIndex from '../components/FearGreedIndex'
import CryptoTable from '../components/CryptoTable'


const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center">
            <div className = "grid grid-cols-2 w-9/12 gap-5 h-full my-8">
                <div className='bg-[#1F2D37]/[0.5] border border-white/[0.2] rounded-md shadow-black/60 shadow-inner'>
                  <BitcoinHalvingCountdown />
                </div>
                <div className='bg-[#1F2D37]/[0.5] border border-white/[0.2] rounded-md shadow-black/60 shadow-inner'>
                 <FearGreedIndex />
                </div>
            </div>
            <CryptoTable />
        </div>
    </div>
  )
}


export default Home
