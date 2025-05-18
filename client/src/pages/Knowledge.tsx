import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Knowledge = () => {
  const [isVisible, setIsVisible] = useState({
    what: false,
    how: false,
    your: false,
    faq: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const what = document.getElementById('what-is-filot');
      const how = document.getElementById('how-it-works');
      const your = document.getElementById('your-tokens');
      const faq = document.getElementById('faq');

      if (what) {
        setIsVisible(prev => ({ 
          ...prev, 
          what: what.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (how) {
        setIsVisible(prev => ({ 
          ...prev, 
          how: how.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (your) {
        setIsVisible(prev => ({ 
          ...prev, 
          your: your.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (faq) {
        setIsVisible(prev => ({ 
          ...prev, 
          faq: faq.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cryptocurrency Investing, Simplified</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Learn how FiLot makes earning from your crypto as simple as using a banking app – without the complicated jargon or technical skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#how-it-works" className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              How It Works
            </a>
            <a href="#your-tokens" className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Your Tokens, Your Control
            </a>
          </div>
        </div>
        
        {/* What is FiLot Section */}
        <div 
          id="what-is-filot" 
          className={cn(
            "mb-20 transition-all duration-1000 transform",
            isVisible.what ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">What is FiLot?</h2>
              <p className="text-gray-600 mb-6">
                FiLot is an AI-powered investment advisor that makes cryptocurrency investing accessible and profitable for everyone. Our platform simplifies the complex process of earning returns from crypto liquidity pools.
              </p>
              <p className="text-gray-600 mb-6">
                With our One-Command interface, you can start generating passive income from your crypto assets without needing technical knowledge or complex wallet management.
              </p>
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <i className="fas fa-lightbulb text-primary mr-2"></i>
                  Key Benefit
                </h4>
                <p className="text-sm">
                  Unlike traditional finance platforms, FiLot never takes custody of your assets. You maintain complete control of your tokens while still accessing institutional-grade investment opportunities.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border-color">
                <div className="p-6 border-b border-border-color">
                  <h3 className="font-bold text-xl mb-2">FiLot Advantages</h3>
                  <p className="text-gray-500">Why investors choose our platform</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Non-Custodial Security</h4>
                        <p className="text-sm text-gray-600">
                          FiLot never holds your assets directly. You maintain complete ownership and control of your tokens.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-hand-pointer"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">One-Command Simplicity</h4>
                        <p className="text-sm text-gray-600">
                          Our intuitive button interface makes complex crypto investments as simple as using a banking app.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-brain"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">AI-Powered Intelligence</h4>
                        <p className="text-sm text-gray-600">
                          Advanced AI analyzes over 1,200 data sources to provide institutional-grade investment recommendations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-percentage"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">High-Yield Opportunities</h4>
                        <p className="text-sm text-gray-600">
                          Access to pre-vetted liquidity pools offering 15-55% APY with optimized risk-reward profiles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div 
          id="how-it-works" 
          className={cn(
            "mb-20 transition-all duration-1000 transform",
            isVisible.how ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How FiLot Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes cryptocurrency investing simple, secure, and profitable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border-color text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600 text-sm">
                Open the FiLot bot on Telegram and connect your wallet with enterprise-grade security protocols.
              </p>
              <div className="mt-4">
                <i className="fab fa-telegram text-4xl text-primary"></i>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border-color text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Select</h3>
              <p className="text-gray-600 text-sm">
                Choose from our curated list of high-performance liquidity pools with comprehensive risk-reward profiles.
              </p>
              <div className="mt-4">
                <i className="fas fa-list-ul text-4xl text-primary"></i>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border-color text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Invest</h3>
              <p className="text-gray-600 text-sm">
                Enter your investment amount and confirm the transaction with enterprise-grade validation and security.
              </p>
              <div className="mt-4">
                <i className="fas fa-coins text-4xl text-primary"></i>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border-color text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Monitor</h3>
              <p className="text-gray-600 text-sm">
                Track your investments in real-time and receive AI-powered recommendations for optimal exit timing.
              </p>
              <div className="mt-4">
                <i className="fas fa-chart-line text-4xl text-primary"></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Your Tokens Section */}
        <div 
          id="your-tokens" 
          className={cn(
            "mb-20 transition-all duration-1000 transform",
            isVisible.your ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Your Tokens, Your Control</h2>
              <p className="text-gray-600 mb-6">
                FiLot's non-custodial architecture means you always maintain complete ownership and control of your crypto assets. We never take custody of your funds at any point in the investment process.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <i className="fas fa-key text-primary mr-3"></i>
                    Secure Wallet Integration
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Our read-only connection to your wallet ensures maximum security while providing the access needed for investment recommendations.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <i className="fas fa-unlock text-primary mr-3"></i>
                    Transaction Control
                  </h3>
                  <p className="text-gray-600 pl-8">
                    Every transaction requires your explicit approval. FiLot can never move your funds without your direct authorization.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <i className="fas fa-exchange-alt text-primary mr-3"></i>
                    Transparent Processes
                  </h3>
                  <p className="text-gray-600 pl-8">
                    All investment activities occur on-chain with complete transparency. You can verify every transaction independently.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-card-bg rounded-xl p-8 shadow-lg max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Security First Design</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-5 border border-border-color">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Non-Custodial Architecture</h4>
                        <p className="text-sm text-gray-500">Enterprise-grade security</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your private keys never leave your wallet. FiLot interacts with the blockchain on your behalf only after you explicitly approve each transaction.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-border-color">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4">
                        <i className="fas fa-fingerprint"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Multi-Factor Verification</h4>
                        <p className="text-sm text-gray-500">Enhanced protection</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      All critical operations require multiple verification steps, ensuring complete protection against unauthorized access and transactions.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-border-color">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4">
                        <i className="fas fa-clipboard-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Regulatory Compliance</h4>
                        <p className="text-sm text-gray-500">Dubai DFSA standards</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      FiLot adheres to the strictest regulatory standards, ensuring legal compliance and financial integrity for all operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div 
          id="faq"
          className={cn(
            "bg-white rounded-xl p-8 shadow-sm border border-border-color transition-all duration-1000 transform",
            isVisible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b border-border-color pb-4">
              <h3 className="font-semibold text-lg mb-2">What is a liquidity pool?</h3>
              <p className="text-gray-600">
                A liquidity pool is a collection of funds locked in a smart contract that facilitates decentralized trading. When you provide tokens to a liquidity pool, you earn a share of the trading fees generated by that pool.
              </p>
            </div>
            
            <div className="border-b border-border-color pb-4">
              <h3 className="font-semibold text-lg mb-2">How does FiLot ensure security?</h3>
              <p className="text-gray-600">
                FiLot implements a non-custodial architecture, meaning we never take control of your funds. All transactions require your explicit authorization, and we use enterprise-grade encryption and security protocols.
              </p>
            </div>
            
            <div className="border-b border-border-color pb-4">
              <h3 className="font-semibold text-lg mb-2">What are the minimum and maximum investment amounts?</h3>
              <p className="text-gray-600">
                FiLot supports investments ranging from $100 to $10,000,000+. Our platform is designed to accommodate both retail investors and institutional clients with precision validation.
              </p>
            </div>
            
            <div className="border-b border-border-color pb-4">
              <h3 className="font-semibold text-lg mb-2">How does FiLot select liquidity pools?</h3>
              <p className="text-gray-600">
                Our AI analyzes over 1,200 data sources to identify pools with optimal risk-reward profiles. We evaluate liquidity depth, historical performance, protocol security, and market conditions before recommending any pool.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">What happens if I want to withdraw my investment?</h3>
              <p className="text-gray-600">
                You can withdraw your investment at any time through the FiLot interface. Our AI will provide exit timing recommendations to help you maximize returns, but the final decision is always yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
