import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { CheckCircle, Bot, BarChart3, Brain, Database, Settings, FolderSync } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEOHead 
        title="AI & Data Consulting Services"
        description="Comprehensive AI and data solutions tailored to transform your business operations and drive intelligent growth. Expert consulting for enterprise AI implementation."
        keywords="AI consulting services, data analytics consulting, machine learning implementation, enterprise AI, business intelligence"
        canonical="/services"
      />

      {/* Services Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-600 py-20 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bold text-5xl lg:text-6xl mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive AI and data solutions tailored to transform your business operations and drive intelligent growth.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AI Strategy & Implementation */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold text-4xl text-slate-900 mb-6">AI Strategy & Implementation</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Develop comprehensive AI strategies that align with your business objectives. From proof-of-concept 
                  to full-scale deployment, we guide you through every step of AI adoption.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="text-blue-600" />
                    <span className="text-slate-700">AI Readiness Assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bot className="text-blue-600" />
                    <span className="text-slate-700">Custom AI Solution Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FolderSync className="text-blue-600" />
                    <span className="text-slate-700">Implementation & Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="text-blue-600" />
                    <span className="text-slate-700">Performance Optimization</span>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="AI technology consulting and neural networks" 
                  className="rounded-2xl shadow-lg w-full" 
                />
              </div>
            </div>
          </div>

          {/* Data Analytics & Visualization */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Advanced data analytics dashboard with charts" 
                  className="rounded-2xl shadow-lg w-full" 
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="font-bold text-4xl text-slate-900 mb-6">Data Analytics & Visualization</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Turn your data into a competitive advantage with advanced analytics, real-time dashboards, 
                  and predictive models that inform strategic decisions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Database className="text-emerald-600" />
                    <span className="text-slate-700">Data Pipeline Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="text-emerald-600" />
                    <span className="text-slate-700">Interactive Dashboards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="text-emerald-600" />
                    <span className="text-slate-700">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FolderSync className="text-emerald-600" />
                    <span className="text-slate-700">Real-time Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Machine Learning Solutions */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold text-4xl text-slate-900 mb-6">Machine Learning Solutions</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Custom machine learning models that automate complex processes, predict outcomes, 
                  and uncover hidden patterns in your data.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Brain className="text-amber-600" />
                    <span className="text-slate-700">Custom Model Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bot className="text-amber-600" />
                    <span className="text-slate-700">Computer Vision</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="text-amber-600" />
                    <span className="text-slate-700">Natural Language Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="text-amber-600" />
                    <span className="text-slate-700">MLOps & Deployment</span>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Machine learning algorithms and neural networks" 
                  className="rounded-2xl shadow-lg w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-4xl text-slate-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss how our AI and data solutions can drive growth and innovation for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 text-white px-8 py-4 text-lg hover:bg-blue-700 transition-colors">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
