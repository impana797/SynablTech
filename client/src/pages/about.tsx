import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Heart, User } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead 
        title="About Synabl - AI & Data Consulting Experts"
        description="Learn about Synabl's mission to democratize AI and make intelligent solutions accessible to businesses of all sizes. Meet our expert team of data scientists and AI specialists."
        keywords="about synabl, AI consulting team, data science experts, company mission, AI specialists"
        canonical="/about"
      />

      {/* About Hero */}
      <section className="bg-gradient-to-r from-emerald-500 to-green-600 py-20 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bold text-5xl lg:text-6xl mb-6">About Synabl</h1>
            <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto">
              We're passionate about democratizing AI and making intelligent solutions accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold text-4xl text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8">
                To empower organizations with intelligent solutions that transform data into actionable insights, 
                driving innovation and sustainable growth across industries.
              </p>
              
              <h3 className="font-semibold text-2xl text-slate-900 mb-4">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-amber-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Innovation</h4>
                    <p className="text-slate-600">Continuous exploration of cutting-edge technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Partnership</h4>
                    <p className="text-slate-600">Building long-term relationships with our clients</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="text-emerald-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Excellence</h4>
                    <p className="text-slate-600">Delivering the highest quality solutions and services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse team of professionals in modern office" 
                className="rounded-2xl shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-slate-900 mb-6">Meet Our Experts</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with business acumen to deliver transformative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-2">Dr. Sarah Chen</h3>
                <p className="text-emerald-600 font-medium mb-4">Chief AI Officer</p>
                <p className="text-slate-600">15+ years in machine learning and AI research, former Google AI team member</p>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-2">Michael Rodriguez</h3>
                <p className="text-emerald-600 font-medium mb-4">Head of Data Science</p>
                <p className="text-slate-600">Expert in predictive analytics and statistical modeling with Fortune 500 experience</p>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-2">Lisa Thompson</h3>
                <p className="text-emerald-600 font-medium mb-4">Strategy Director</p>
                <p className="text-slate-600">Business transformation specialist with deep industry knowledge across sectors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
