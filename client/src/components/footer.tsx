import { Link } from "wouter";
import { Brain, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <Brain className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-2xl">Synabl</h3>
                <p className="text-blue-200 text-sm">Intelligence Synergized</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 max-w-md">
              Transforming businesses through intelligent AI and data solutions. 
              We make complex technology accessible and actionable.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="text-blue-100 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">© 2024 Synabl. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
