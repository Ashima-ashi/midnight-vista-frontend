import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, BarChart3, Shield, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/images1/1d18324c-aaea-4755-8d21-e294f33a4bcc.png" alt="24/7 Software Logo" className="h-12 w-auto" />
            
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            <Link to="/login">
              <Button className="bg-company-accent hover:bg-company-blue-light button-hover text-white px-6">
                Login
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg border-t border-border py-4 z-50">
            <div className="container mx-auto flex flex-col space-y-4 px-6">
              <Link to="/" className="hover:text-company-accent transition-colors py-2">Home</Link>
              <Link to="/" className="hover:text-company-accent transition-colors py-2">Features</Link>
              <Link to="/" className="hover:text-company-accent transition-colors py-2">Pricing</Link>
              <Link to="/" className="hover:text-company-accent transition-colors py-2">Contact</Link>
              <Link to="/login" className="py-2">
                <Button className="bg-company-accent hover:bg-company-blue-light w-full text-white">
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>}
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col-reverse md:flex-row container mx-auto px-6 py-12 md:py-24">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Welcome to the  <span className="text-company-accent text-glow">Attendance Analysis System</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Track attendance and streamline your employee management with our powerful 24/7 platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-company-accent hover:bg-company-blue-light button-hover text-white px-8 py-6 text-lg">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-company-blue-light text-company-blue-light hover:bg-company-blue-light/10 button-hover px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center mt-12 space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-semibold">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex-1 flex justify-center items-center mb-12 md:mb-0">
          <div className="relative max-w-lg">
            <div className="absolute -top-10 -right-10 h-64 w-64 bg-company-accent/10 rounded-full blur-3xl animate-pulse-light"></div>
            <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-company-blue/20 rounded-full blur-3xl animate-pulse-light"></div>
            
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }} className="glass-card relative z-10 rounded-xl blue-glow overflow-hidden">
              <img alt="24/7 App" className="w-full object-contain" src="/images1/1798df10-dd86-4ccc-af54-21d262e8f7c1.png" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="bg-gradient-to-b from-company-blue-dark to-[#071428] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </motion.h2>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently, all in one place.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2
          }} className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-company-accent/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <footer className="bg-[#071428] py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center space-x-2 mb-4">
                
                <span className="text-xl font-bold text-white">24/7 Software</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering businesses to manage their workforce efficiently and effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">About Us</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Careers</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Features</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Pricing</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Privacy</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Terms</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 24/7 Company. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link to="/" className="text-gray-400 hover:text-company-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

const features = [{
  title: "Attendance Management",
  description: "Track employee attendance with ease, manage time-offs, and generate reports.",
  icon: <Calendar className="h-6 w-6 text-company-accent" />
}, {
  title: "Upload Your Excel Sheet Instantly",
  description: "Easily import your attendance data in Excel format and view it neatly organized in a responsive table. No manual entry needed.",
  icon: <BarChart3 className="h-6 w-6 text-company-accent" />
}, {
  title: "Track Attendance Effortlessly",
  description: "Monitor attendance records in real time with smart tracking tools. Get clear insights into presence, absences, and trends—all in one place.",
  icon: <Users className="h-6 w-6 text-company-accent" />
}, {
  title: "Secure Access",
  description: "Role-based access control and advanced security to protect your data.",
  icon: <Shield className="h-6 w-6 text-company-accent" />
}];

export default LandingPage;
