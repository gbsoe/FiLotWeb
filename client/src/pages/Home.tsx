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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Precision Investing with FiLot</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                The trusted AI-powered investment advisor bringing institutional-grade crypto liquidity pool investing to everyone, with cutting-edge security and reliability.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-2"></i>
                  <span>Trusted Platform</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-lock text-primary mr-2"></i>
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chart-line text-primary mr-2"></i>
                  <span>15-55% APY</span>
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
                    <p className="text-sm">Welcome to FiLot! I'm here to help you invest in crypto liquidity pools with institutional-grade security.</p>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs ml-auto">
                    <p className="text-sm">How do I start investing?</p>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Just tap the "Invest" button below to get started, or explore our available pools first.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://t.me/Fi_lotbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gradient-primary text-white py-2 rounded-lg font-medium text-sm text-center"
                  >
                    Invest
                  </a>
                  <Link href="/pools">
                    <a className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm text-center">
                      View Pools
                    </a>
                  </Link>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm">
                    My Portfolio
                  </button>
                  <button className="bg-blue-100 text-primary py-2 rounded-lg font-medium text-sm">
                    Help
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
              <h2 className="text-3xl font-bold mb-4">Secure & Precise Investment Platform</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our investment technology delivers institutional-grade access to crypto liquidity pools with a simplified One-Command interface designed for both novice and experienced investors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-hand-pointer"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">One-Touch Investing</h3>
                <p className="text-gray-600 mb-4">
                  The most advanced investment interface uses persistent buttons for all features, making crypto investing accessible for both novice and professional investors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Enterprise-grade security standards</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">One-tap navigation between sophisticated investment services</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Instant access to high-yield liquidity pools (15-55% APY)</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature Card 2 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-sliders-h"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Precision Control</h3>
                <p className="text-gray-600 mb-4">
                  Institutional-grade investment tools with Dubai's most stringent security standards, offering precision investment control from $100 to $10,000,000+.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Customizable investment amounts with intelligent validation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Tailored risk profiles from conservative to aggressive</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Real-time portfolio monitoring with exit recommendations</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature Card 3 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI intelligence analyzes market data from over 1,200 sources to provide institutional-quality investment recommendations at enterprise scale.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Advanced sentiment analysis meets technical indicators</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Multi-factor risk assessment with impermanent loss protection</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Natural conversation with DIFC's leading financial AI</span>
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
              <h2 className="text-3xl font-bold mb-4">The FiLot Investment Process</h2>
              <p className="text-gray-600">Simple. Secure. Reliable.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Start Investing</h3>
                <p className="text-gray-600 text-sm">
                  Open Telegram and tap the blue "Invest" button to begin your investment journey with Dubai's most trusted crypto advisor.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Select a Pool</h3>
                <p className="text-gray-600 text-sm">
                  Choose from pre-vetted, institutional-grade liquidity pools with the highest security rating and profit potential.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Enter Amount</h3>
                <p className="text-gray-600 text-sm">
                  Specify your investment amount with our precision validation ensuring optimal position sizing for your goals.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Earn Returns</h3>
                <p className="text-gray-600 text-sm">
                  Watch your investment grow while our AI continuously monitors market conditions for optimal exit timing.
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
