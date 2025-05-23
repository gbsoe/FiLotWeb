import { Link } from "wouter";
import { testimonials } from "@/data/testimonials";
import { pools } from "@/data/pools";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    process: false,
    testimonials: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const features = document.getElementById('features');
      const process = document.getElementById('process');
      const testimonials = document.getElementById('testimonials');

      if (features) {
        setIsVisible(prev => ({ 
          ...prev, 
          features: features.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (process) {
        setIsVisible(prev => ({ 
          ...prev, 
          process: process.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
      
      if (testimonials) {
        setIsVisible(prev => ({ 
          ...prev, 
          testimonials: testimonials.getBoundingClientRect().top < window.innerHeight - 100 
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center mb-20">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium mb-4">
                <i className="fas fa-calendar mr-2"></i>Launching December 2025
              </div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6 ml-2">
                <i className="fas fa-users mr-2"></i>Early Access Available
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Precision Investing Made Simple</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                FiLot delivers precision investing that helps you invest in cryptocurrency safely and profitably. No technical knowledge needed - just tell us your goals and we'll handle the rest.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-brain text-primary mr-2"></i>
                  <span>Smart AI Helper</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-primary mr-2"></i>
                  <span>Smart & Secure Trading</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chart-line text-primary mr-2"></i>
                  <span>Grows Your Investment</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://t.me/Fi_lotbot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
                >
                  Join Early Access
                </a>
                <Link href="/features">
                  <a className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block">
                    See All Features
                  </a>
                </Link>
                <a href="#process" className="text-primary font-medium hover:underline px-2 py-3 flex items-center">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-border-color">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">FiLot Bot</h3>
                    <p className="text-gray-500 text-sm">Your AI Investment Advisor</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Hi! I'm FiLot, your smart crypto investment assistant. I help you make money from your crypto without the stress!</p>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs ml-auto">
                    <p className="text-sm">How do you help me make money?</p>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs">
                    <p className="text-sm">I watch the markets 24/7 and tell you the best times to invest. Just follow my suggestions and watch your money grow!</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://t.me/Fi_lotbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gradient-primary text-white py-2 rounded-lg font-medium text-sm text-center flex items-center justify-center"
                  >
                    <i className="fas fa-brain mr-1"></i> Preview Mode
                  </a>
                  <Link href="/pools">
                    <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm w-full">
                      View Pools
                    </button>
                  </Link>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm">
                    /simulate
                  </button>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm">
                    /profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Overview */}
          <div 
            id="features" 
            className={cn(
              "mb-20 transition-all duration-1000 transform",
              isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose FiLot?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                FiLot delivers smart investing that's simple and profitable. Our AI watches the markets for you and executes precise trades that help you make money while keeping your investment safe.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart AI Assistant</h3>
                <p className="text-gray-600 mb-4">
                  Our smart AI watches the crypto markets 24/7 and learns what works best. It gives you simple advice on when to buy and sell to make the most profit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Watches markets 24/7 so you don't have to</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Learns from thousands of successful trades</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Gives you confidence ratings for each recommendation</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature Card 2 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Always Getting Smarter</h3>
                <p className="text-gray-600 mb-4">
                  FiLot learns from every trade and gets better over time. The more people use it, the smarter it becomes at finding profitable opportunities for everyone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Learns from millions of real market trades</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Tells you the best times to buy and sell</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Tracks your success and improves suggestions</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature Card 3 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart & Secure Trading</h3>
                <p className="text-gray-600 mb-4">
                  FiLot can execute trades for you automatically or wait for your approval. You set the rules and limits, and FiLot works within them to grow your investment safely.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">You control FiLot's trading permissions and limits</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Choose automatic execution or manual approval</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Bank-level security keeps everything protected</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Investment Process */}
          <div 
            id="process" 
            className={cn(
              "mb-20 transition-all duration-1000 transform",
              isVisible.process ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How FiLot Works</h2>
              <p className="text-gray-600">Simple. Safe. Profitable.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Chat with FiLot</h3>
                <p className="text-gray-600 text-sm">
                  Open Telegram and start chatting with FiLot. Tell it how much you want to invest and what your goals are.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Smart Advice</h3>
                <p className="text-gray-600 text-sm">
                  FiLot looks at the markets and gives you personalized recommendations based on what's working best right now.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Make Your Move</h3>
                <p className="text-gray-600 text-sm">
                  Follow FiLot's easy suggestions to invest at the best times. You stay in control of your money at all times.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Watch It Grow</h3>
                <p className="text-gray-600 text-sm">
                  FiLot keeps learning and gives you better advice over time. Your investments get smarter as the AI gets smarter.
                </p>
              </div>
            </div>
          </div>
          
          {/* How You Earn Section */}
          <div 
            id="how-you-earn"
            className={cn(
              "mb-20 transition-all duration-1000 transform bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12",
              isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How You Earn Passive Income</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple steps to start earning money from your crypto while you sleep
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Join a Liquidity Pool</h3>
                    <p className="text-gray-600 text-sm">
                      You provide two cryptocurrencies (like SOL and USDC) to a pool. This helps traders swap between these coins easily.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">Earn Trading Fees</h3>
                    <p className="text-gray-600 text-sm">
                      Every time someone trades in your pool, you earn a small fee. The more trading activity, the more you earn.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">FiLot Protects Your Investment</h3>
                    <p className="text-gray-600 text-sm">
                      Our AI watches for "impermanent loss" (when price changes hurt your returns) and tells you the best time to exit to keep your profits.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold mb-2">Exit at the Right Time</h3>
                    <p className="text-gray-600 text-sm">
                      FiLot calculates when you've earned enough fees to cover any losses, then suggests the perfect exit timing to maximize your profits.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Example: SOL/USDC Pool</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Your Investment:</span>
                    <span className="font-semibold">$1,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Pool APY:</span>
                    <span className="font-semibold text-green-600">22.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm">Daily Earnings:</span>
                    <span className="font-semibold text-green-600">~$0.62</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm">Monthly Potential:</span>
                    <span className="font-semibold text-green-600">~$18.75</span>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-xs text-gray-500 mb-2">✨ FiLot's AI monitors for optimal exit timing</div>
                    <div className="text-xs text-gray-500">🛡️ Protection against impermanent loss</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div 
            id="testimonials" 
            className={cn(
              "mb-20 transition-all duration-1000 transform",
              isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Trusted by Investors Worldwide</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md border border-border-color">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="text-amber-400 mr-1">
                        <i className="fas fa-star"></i>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                      <span className="font-semibold">{testimonial.initials}</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Final CTA Section */}
          <div className="bg-card-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Investing with FiLot Today</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Access institutional-grade crypto investments with One-Command simplicity
            </p>
            <a 
              href="https://t.me/Fi_lotbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-primary text-white px-8 py-4 rounded-lg font-medium inline-flex items-center hover:opacity-90 transition-opacity"
            >
              Launch FiLot on Telegram <i className="fab fa-telegram ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
