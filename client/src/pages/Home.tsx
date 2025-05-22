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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Agentic AI Investment Revolution</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                FiLot's cutting-edge agentic AI system uses reinforcement learning to revolutionize cryptocurrency investment experiences through intelligent, adaptive strategies that learn and evolve with market conditions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-brain text-primary mr-2"></i>
                  <span>Reinforcement Learning AI</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-primary mr-2"></i>
                  <span>Non-Custodial Security</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chart-line text-primary mr-2"></i>
                  <span>Adaptive Strategies</span>
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
                    <p className="text-sm">Welcome to FiLot! I'm an agentic AI that uses reinforcement learning to optimize your crypto investments with adaptive strategies.</p>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs ml-auto">
                    <p className="text-sm">What makes you different?</p>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-lg max-w-xs">
                    <p className="text-sm">I learn from market data and user feedback to provide personalized recommendations with confidence ratings and optimal timing insights.</p>
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
              <h2 className="text-3xl font-bold mb-4">Agentic AI Investment Technology</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                FiLot's reinforcement learning AI system continuously adapts and evolves, analyzing multi-factor data from Raydium, SolPool Insight, and FilotSense to deliver personalized investment strategies with confidence ratings and optimal timing insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Invest AI</h3>
                <p className="text-gray-600 mb-4">
                  Advanced reinforcement learning system that adapts and improves recommendations based on market conditions and user feedback, providing confidence ratings for each suggestion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">DQN architecture with experience replay</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Multi-factor analysis combining technical & sentiment data</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Personalized risk assessment with optimal timing insights</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature Card 2 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Adaptive Learning</h3>
                <p className="text-gray-600 mb-4">
                  Agentic AI system that continuously learns from market data, user feedback, and performance outcomes to refine investment strategies and improve recommendation accuracy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Real-time data from Raydium, SolPool Insight & FilotSense</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Market timing insights with optimal entry/exit points</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Performance tracking with continuous strategy refinement</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature Card 3 */}
              <div className="bg-card-bg rounded-xl p-6 shadow-sm border border-border-color">
                <div className="text-primary text-2xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Non-Custodial Security</h3>
                <p className="text-gray-600 mb-4">
                  Advanced security architecture ensures you maintain complete control of your assets through WalletConnect integration, with comprehensive logging and monitoring for peace of mind.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">WalletConnect protocol for secure wallet integration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Read-only access by default with transaction limits</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-sm">Comprehensive logging and monitoring systems</span>
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
              <h2 className="text-3xl font-bold mb-4">Smart Invest AI Workflow</h2>
              <p className="text-gray-600">Intelligent. Adaptive. Profitable.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
                <p className="text-gray-600 text-sm">
                  FiLot's AI analyzes real-time data from multiple sources using reinforcement learning to identify optimal investment opportunities.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600 text-sm">
                  Receive AI-powered recommendations with confidence ratings tailored to your risk profile and investment goals.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Execute Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Deploy your investment with precision timing based on AI insights and multi-factor market analysis.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
                <p className="text-gray-600 text-sm">
                  AI continuously learns from performance outcomes and market changes to refine future recommendations.
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
