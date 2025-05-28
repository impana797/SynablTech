import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { CheckCircle, Brain, BarChart3, Bot, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-up">
              <h1 className="font-bold text-5xl lg:text-7xl leading-tight mb-6 drop-shadow-lg">
                Intelligence
                <span className="text-emerald-400 block">Synergized</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-medium drop-shadow-md">
                Transform your business with cutting-edge AI and data consulting. 
                We turn complex data into actionable insights that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-emerald-500 text-white px-8 py-4 text-lg hover:bg-emerald-600 transition-all transform hover:scale-105">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="glass-effect text-white px-8 py-4 text-lg border-white hover:bg-white/20 transition-all">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern tech office with data analytics" 
                className="rounded-2xl shadow-2xl w-full" 
              />
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-float" style={{animationDelay: '-1s'}}></div>
        <div className="absolute bottom-32 left-10 w-16 h-16 bg-amber-500/20 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl text-slate-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in transforming businesses through intelligent data solutions and cutting-edge AI implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Consulting Card */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-2xl text-slate-900 mb-4">AI Consulting</h3>
                <p className="text-slate-600 mb-6">Strategic AI implementation to automate processes, enhance decision-making, and drive innovation across your organization.</p>
                <Link href="/services">
                  <Button variant="link" className="text-blue-600 font-semibold hover:text-blue-800 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Data Analytics Card */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-2xl text-slate-900 mb-4">Data Analytics</h3>
                <p className="text-slate-600 mb-6">Transform raw data into actionable insights with advanced analytics, visualization, and predictive modeling.</p>
                <Link href="/services">
                  <Button variant="link" className="text-emerald-600 font-semibold hover:text-emerald-800 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Machine Learning Card */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-2xl text-slate-900 mb-4">Machine Learning</h3>
                <p className="text-slate-600 mb-6">Custom ML models and algorithms to solve complex business problems and unlock new opportunities.</p>
                <Link href="/services">
                  <Button variant="link" className="text-amber-600 font-semibold hover:text-orange-800 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Preview */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration in modern tech office" 
                className="rounded-2xl shadow-2xl w-full" 
              />
            </div>
            
            <div>
              <h2 className="font-bold text-4xl lg:text-5xl mb-6">Why Choose Synabl?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                With years of experience in AI and data science, our team brings together deep technical expertise 
                and business acumen to deliver solutions that create real value.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Expert Team</h4>
                    <p className="text-blue-100">Data scientists, ML engineers, and AI specialists with proven track records.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Tailored Solutions</h4>
                    <p className="text-blue-100">Custom approaches designed specifically for your industry and challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Proven Results</h4>
                    <p className="text-blue-100">Measurable outcomes that drive growth and operational efficiency.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <Button className="mt-8 bg-emerald-500 text-white px-8 py-3 hover:bg-emerald-600 transition-colors">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
