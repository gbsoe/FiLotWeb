import { useState, useEffect } from "react";
import { pools } from "@/data/pools";
import { cn, formatNumber, formatPercent } from "@/lib/utils";

const Pools = () => {
  const [isVisible, setIsVisible] = useState({
    educational: false,
    table: false,
    cta: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const educational = document.getElementById('educational');
      const table = document.getElementById('pools-table');
      const cta = document.getElementById('investment-cta');

      if (educational) {
        setIsVisible(prev => ({ 
          ...prev, 
          educational: educational.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (table) {
        setIsVisible(prev => ({ 
          ...prev, 
          table: table.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (cta) {
        setIsVisible(prev => ({ 
          ...prev, 
          cta: cta.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cryptocurrency Liquidity Pools</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FiLot helps you earn passive income by investing in these high-performance liquidity pools.
          </p>
        </div>
        
        {/* Educational Section */}
        <div 
          id="educational"
          className={cn(
            "bg-white rounded-xl p-8 shadow-sm border border-border-color mb-12 transition-all duration-1000 transform",
            isVisible.educational ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-2xl font-bold mb-4">What are Liquidity Pools?</h2>
          <p className="text-gray-600 mb-6">
            Liquidity pools are on-chain smart contracts that hold paired token reserves, letting traders swap directly against the pool rather than a counterparty. By depositing tokens, liquidity providers earn a proportional share of each swap's fees, converting idle tokens into a yield-generating asset.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-card-bg rounded-lg">
              <div className="text-primary text-xl mb-3">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="font-semibold mb-2">Passive Income</h3>
              <p className="text-sm text-gray-600">
                Earn continuous rewards from trading fees without active management.
              </p>
            </div>
            
            <div className="p-4 bg-card-bg rounded-lg">
              <div className="text-primary text-xl mb-3">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="font-semibold mb-2">Capital Efficiency</h3>
              <p className="text-sm text-gray-600">
                Put your idle cryptocurrency assets to work generating yield.
              </p>
            </div>
            
            <div className="p-4 bg-card-bg rounded-lg">
              <div className="text-primary text-xl mb-3">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3 className="font-semibold mb-2">Market Access</h3>
              <p className="text-sm text-gray-600">
                Participate in DeFi markets without complex trading strategies.
              </p>
            </div>
          </div>
        </div>
        
        {/* Pools Table */}
        <div 
          id="pools-table"
          className={cn(
            "bg-white rounded-xl shadow-md overflow-hidden mb-12 transition-all duration-1000 transform",
            isVisible.table ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-border-color">
                  <th className="text-left py-4 px-6 text-sm font-semibold">Pool</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold">APY</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold">TVL</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold">Fee</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold">Risk</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {pools.map(pool => (
                  <tr key={pool.id} className="border-b border-border-color hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="flex -space-x-2 mr-3">
                          <div className={`w-8 h-8 rounded-full ${pool.token1Color} flex items-center justify-center text-xs z-10`}>
                            {pool.token1}
                          </div>
                          <div className={`w-8 h-8 rounded-full ${pool.token2Color} flex items-center justify-center text-xs`}>
                            {pool.token2}
                          </div>
                        </div>
                        <span className="font-medium">{pool.pair}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-green-500 font-medium">
                      {formatPercent(pool.apy)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      ${formatNumber(pool.tvl)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {pool.fee}%
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`${
                        pool.risk === 'Low' 
                          ? 'bg-green-100 text-green-800' 
                          : pool.risk === 'Medium' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      } text-xs px-2 py-1 rounded-full`}>
                        {pool.risk}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <a 
                        href="https://t.me/Fi_lotbot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gradient-primary text-white px-4 py-2 rounded-lg text-sm font-medium inline-block hover:opacity-90 transition-opacity"
                      >
                        Invest
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Investment CTA */}
        <div 
          id="investment-cta"
          className={cn(
            "text-center bg-white rounded-xl p-8 shadow-sm border border-border-color transition-all duration-1000 transform",
            isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to start earning from these pools?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Begin your journey to financial freedom with FiLot's enterprise-grade investment platform.
          </p>
          <a 
            href="https://t.me/Fi_lotbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-primary text-white px-8 py-4 rounded-lg font-medium inline-flex items-center hover:opacity-90 transition-opacity"
          >
            Start Investing with FiLot <i className="fab fa-telegram ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pools;
