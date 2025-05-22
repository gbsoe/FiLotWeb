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
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium mb-6">
                <i className="fas fa-shield-alt mr-2"></i>Secure Investment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Smart Crypto Investing Made Simple</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                FiLot is your smart AI assistant that helps you invest in cryptocurrency safely and profitably. No technical knowledge needed - just tell us your goals and we'll handle the rest.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-brain text-primary mr-2"></i>
                  <span>Smart AI Helper</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-primary mr-2"></i>
                  <span>Your Money Stays Safe</span>
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
                  Start Investing Now
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
                    <i className="fas fa-brain mr-1"></i> Smart Invest
                  </a>
                  <Link href="/pools">
                    <a className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm text-center">
                      View Pools
                    </a>
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
                FiLot makes crypto investing simple and profitable. Our smart AI watches the markets for you and gives you easy-to-follow advice that helps you make money while keeping your investment safe.
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
                <h3 className="text-xl font-semibold mb-3">Your Money Stays Safe</h3>
                <p className="text-gray-600 mb-4">
                  You always keep control of your money. FiLot never touches your funds - it just gives you advice. Your crypto stays in your wallet where only you can access it.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Your money never leaves your wallet</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">FiLot only gives advice, you make the decisions</span>
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
