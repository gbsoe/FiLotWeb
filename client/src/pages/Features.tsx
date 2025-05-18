import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Features = () => {
  const [isVisible, setIsVisible] = useState({
    oneCommand: false,
    security: false,
    ai: false,
    pool: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const oneCommand = document.getElementById('one-command');
      const security = document.getElementById('security');
      const ai = document.getElementById('ai');
      const pool = document.getElementById('pool');

      if (oneCommand) {
        setIsVisible(prev => ({ 
          ...prev, 
          oneCommand: oneCommand.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (security) {
        setIsVisible(prev => ({ 
          ...prev, 
          security: security.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (ai) {
        setIsVisible(prev => ({ 
          ...prev, 
          ai: ai.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (pool) {
        setIsVisible(prev => ({ 
          ...prev, 
          pool: pool.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium mb-4">
            <i className="fas fa-shield-alt mr-2"></i>Enterprise-Grade Security
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FiLot Precision Features</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform delivers institutional-grade cryptocurrency investment tools with military-grade security, absolute precision, and uncompromising reliability as our highest priorities.
          </p>
        </div>
        
        {/* One-Command Interface */}
        <div 
          id="one-command" 
          className={cn(
            "mb-20 transition-all duration-1000 transform",
            isVisible.oneCommand ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">One-Command Interface</h2>
              <p className="text-gray-600 mb-6">
                FiLot has reimagined crypto investing with the world's most intuitive Telegram interface. Our persistent button navigation system eliminates the complexity of traditional investment platforms.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-arrows-alt text-primary mr-3"></i>
                    Simpler Navigation
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Persistent buttons remain accessible throughout your investment journey, eliminating the need to remember complex commands or syntax.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Reliable Interactions
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Dubai's most dependable investment interface ensures buttons work consistently, even with unstable internet connections.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-lightbulb text-primary mr-3"></i>
                    Context-Aware Options
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Dynamic menu system adapts to your current position in the investment flow, showing only relevant options.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-universal-access text-primary mr-3"></i>
                    Accessibility First
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Designed for investors of all technical skill levels, from novice to professional, with intuitive visual cues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-card-bg rounded-xl shadow-lg p-6 max-w-md mx-auto border border-border-color">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">One-Command Interface</h3>
                    <p className="text-gray-500 text-sm">Simplified Investment Experience</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-3 rounded-lg border border-border-color">
                    <p className="text-sm font-medium">Which pool would you like to invest in?</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm flex items-center justify-center">
                    <i className="fas fa-exchange-alt mr-1"></i> SOL/USDC
                  </button>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm flex items-center justify-center">
                    <i className="fas fa-exchange-alt mr-1"></i> SOL/RAY
                  </button>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm flex items-center justify-center">
                    <i className="fas fa-exchange-alt mr-1"></i> RAY/USDC
                  </button>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm flex items-center justify-center">
                    <i className="fas fa-exchange-alt mr-1"></i> SOL/mSOL
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="gradient-primary text-white py-2 rounded-lg font-medium text-sm">
                    View All Pools
                  </button>
                  <button className="border border-primary text-primary py-2 rounded-lg font-medium text-sm">
                    Back to Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security & Compliance */}
        <div 
          id="security"
          className={cn(
            "mb-20 transition-all duration-1000 transform",
            isVisible.security ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Enterprise Security</h2>
              <p className="text-gray-600 mb-6">
                FiLot implements institutional-grade security measures that exceed industry standards, ensuring your investments are protected at all times.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-certificate text-primary mr-3"></i>
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Fully regulated operation ensuring the highest standards of financial service provision.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-wallet text-primary mr-3"></i>
                    Non-Custodial Architecture
                  </h3>
                  <p className="text-gray-600 pl-8">
                    You maintain complete control of your assets at all times - FiLot never takes custody of your funds.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-link text-primary mr-3"></i>
                    Secure Wallet Integration
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Enterprise-grade WalletConnect protocol with read-only access by default.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-fingerprint text-primary mr-3"></i>
                    Transaction Verification
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Multi-factor authentication and tiered validation protocols for all investment activities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-card-bg rounded-xl p-8 shadow-lg max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-border-color flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-4">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Non-Custodial Design</h4>
                      <p className="text-gray-500 text-sm">Your keys, your crypto, always</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-border-color flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-4">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">DFSA Regulatory Framework</h4>
                      <p className="text-gray-500 text-sm">Dubai's highest financial standards</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-border-color flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-4">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Multi-Factor Authentication</h4>
                      <p className="text-gray-500 text-sm">For all critical transactions</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-border-color flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-4">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Real-Time Risk Monitoring</h4>
                      <p className="text-gray-500 text-sm">24/7 intelligent risk assessment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Investment Intelligence */}
        <div 
          id="ai"
          className={cn(
            "mb-20 transition-all duration-1000 transform",
            isVisible.ai ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Advisory</h2>
              <p className="text-gray-600 mb-6">
                FiLot's proprietary AI analyzes millions of data points across 1,200+ sources to deliver precise investment recommendations optimized for your risk profile and goals.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-chart-pie text-primary mr-3"></i>
                    Market Sentiment Analysis
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Advanced natural language processing monitors market sentiment across social media, news, and forums.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-chart-line text-primary mr-3"></i>
                    Technical Indicators
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Comprehensive technical analysis identifies optimal entry and exit points with predictive modeling.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-shield-alt text-primary mr-3"></i>
                    Risk Assessment
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Multi-factor risk evaluation with impermanent loss protection strategies.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-user-cog text-primary mr-3"></i>
                    Personalized Recommendations
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Tailored investment advice based on your individual risk tolerance and investment horizon.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-card-bg rounded-xl shadow-lg p-6 max-w-md mx-auto border border-border-color">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white text-xl">
                    <i className="fas fa-brain"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">AI Investment Analysis</h3>
                    <p className="text-gray-500 text-sm">Powered by FiLot AI</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-border-color mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">SOL/USDC Pool</h4>
                    <span className="text-green-500 font-semibold">22.5% APY</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Risk Rating</span>
                        <span className="font-medium">Low</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{width: "25%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Market Sentiment</span>
                        <span className="font-medium">Positive</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{width: "75%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Technical Strength</span>
                        <span className="font-medium">Strong</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{width: "85%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary bg-opacity-10 p-4 rounded-lg mb-6">
                  <h4 className="font-medium flex items-center mb-2">
                    <i className="fas fa-robot text-primary mr-2"></i>
                    AI Recommendation
                  </h4>
                  <p className="text-sm">
                    Based on current market analysis, this pool shows strong fundamentals with positive sentiment and low impermanent loss risk. Recommended position size: 10-15% of portfolio.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://t.me/Fi_lotbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gradient-primary text-white py-2 rounded-lg font-medium text-sm text-center"
                  >
                    Invest Now
                  </a>
                  <button className="border border-primary text-primary py-2 rounded-lg font-medium text-sm">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pool Analytics */}
        <div 
          id="pool"
          className={cn(
            "transition-all duration-1000 transform",
            isVisible.pool ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Precision Pool Intelligence</h2>
              <p className="text-gray-600 mb-6">
                FiLot delivers institutional-quality analytics on Raydium liquidity pools, providing comprehensive metrics for informed investment decisions.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-percent text-primary mr-3"></i>
                    Real-Time APY Tracking
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Continuous monitoring of Annual Percentage Yields with historical trend analysis.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-water text-primary mr-3"></i>
                    Liquidity Depth Analysis
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Evaluation of pool stability through liquidity depth metrics and volume patterns.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-chart-bar text-primary mr-3"></i>
                    Volatility Measurement
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Proprietary volatility scoring system to identify stable investment opportunities.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <i className="fas fa-coins text-primary mr-3"></i>
                    Fee Generation Forecasting
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Predictive modeling of fee generation based on trading volume patterns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-border-color">
                <h3 className="font-bold text-lg mb-4">Pool Performance Analytics</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border-color">
                        <th className="text-left py-3 text-sm font-semibold">Pool</th>
                        <th className="text-center py-3 text-sm font-semibold">APY</th>
                        <th className="text-center py-3 text-sm font-semibold">Vol. 24h</th>
                        <th className="text-center py-3 text-sm font-semibold">Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border-color">
                        <td className="py-3 text-sm font-medium">SOL/USDC</td>
                        <td className="py-3 text-sm text-center text-green-500 font-medium">22.5%</td>
                        <td className="py-3 text-sm text-center">$2.1M</td>
                        <td className="py-3 text-sm text-center"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Low</span></td>
                      </tr>
                      <tr className="border-b border-border-color">
                        <td className="py-3 text-sm font-medium">SOL/RAY</td>
                        <td className="py-3 text-sm text-center text-green-500 font-medium">45.8%</td>
                        <td className="py-3 text-sm text-center">$890K</td>
                        <td className="py-3 text-sm text-center"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Medium</span></td>
                      </tr>
                      <tr className="border-b border-border-color">
                        <td className="py-3 text-sm font-medium">RAY/USDC</td>
                        <td className="py-3 text-sm text-center text-green-500 font-medium">38.7%</td>
                        <td className="py-3 text-sm text-center">$650K</td>
                        <td className="py-3 text-sm text-center"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Medium</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-medium">SOL/mSOL</td>
                        <td className="py-3 text-sm text-center text-green-500 font-medium">19.8%</td>
                        <td className="py-3 text-sm text-center">$1.8M</td>
                        <td className="py-3 text-sm text-center"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Low</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-center">
                  <a href="/pools" className="text-primary font-medium hover:underline flex items-center justify-center">
                    View All Available Pools <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
