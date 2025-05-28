import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  return (
    <>
      <SEOHead 
        title="AI & Data Insights - Latest Trends & Thought Leadership"
        description="Stay ahead with the latest insights on AI trends, data science best practices, and digital transformation strategies from Synabl experts."
        keywords="AI insights, data science trends, machine learning articles, digital transformation, AI thought leadership"
        canonical="/insights"
      />

      {/* Insights Hero */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-20 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bold text-5xl lg:text-6xl mb-6">Insights & Trends</h1>
            <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto">
              Stay ahead with the latest insights on AI, data science, and digital transformation trends.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="AI and machine learning concepts with digital elements" 
                  className="w-full h-64 object-cover" 
                />
                
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">AI Strategy</span>
                    <span className="text-slate-500 text-sm">December 15, 2024</span>
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 mb-4">
                    The Future of AI in Enterprise: Trends to Watch in 2025
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Discover the key AI trends that will shape enterprise technology in 2025, from autonomous systems 
                    to ethical AI frameworks and their business implications.
                  </p>
                  <Button variant="link" className="text-blue-600 font-semibold hover:text-blue-800 p-0">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar Articles */}
            <div className="space-y-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded text-xs">Data Analytics</span>
                    <span className="text-slate-400 text-xs">Dec 10</span>
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-3">
                    Building Effective Data Pipelines for Real-Time Analytics
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Learn best practices for creating robust data pipelines that support real-time decision making.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs">Machine Learning</span>
                    <span className="text-slate-400 text-xs">Dec 8</span>
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-3">
                    MLOps: Scaling Machine Learning in Production
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Essential strategies for deploying and maintaining ML models at enterprise scale.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Industry Insights</span>
                    <span className="text-slate-400 text-xs">Dec 5</span>
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-3">
                    AI Adoption Across Industries: A 2024 Review
                  </h4>
                  <p className="text-slate-600 text-sm">
                    How different sectors are leveraging AI technologies to drive innovation and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
