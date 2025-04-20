import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, LogIn, ArrowLeft, User, KeyRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from './ThemeToggle';

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!employeeId || !password) {
      setErrorMessage("*Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      // Success case handling would go here
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images1/1d18324c-aaea-4755-8d21-e294f33a4bcc.png" alt="24/7 Software Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="inline-flex items-center text-company-accent hover:text-company-blue-light transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 blue-glow"
          >
            <div className="text-center mb-8">
              <div className="h-16 w-16 rounded-full bg-company-accent mx-auto flex items-center justify-center mb-4">
                <LogIn className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">Sign in to your account</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="employee-id">
                  Employee ID
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    id="employee-id"
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="pl-10 bg-background/50 border-input focus:border-company-accent placeholder:text-muted-foreground"
                    placeholder="Enter your employee ID"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">
                    Password
                  </Label>
                  <Link to="/" className="text-sm text-company-accent hover:text-company-blue-light transition-colors">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <KeyRound className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-background/50 border-input focus:border-company-accent placeholder:text-muted-foreground"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-company-accent hover:bg-company-blue-light button-hover text-white py-6"
              >
                {isLoading ? (
                  <motion.div
                    className="h-5 w-5 rounded-full border-2 border-t-transparent border-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Log In
                    <LogIn className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              
              {errorMessage && (
                <p className="text-[#ea384c] text-sm mt-2">
                  {errorMessage}
                </p>
              )}
              
              <div className="text-center mt-6">
                <p className="text-muted-foreground">
                  New Employee?{" "}
                  <Link to="/" className="text-company-accent hover:text-company-blue-light transition-colors">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              © 2025 24/7 Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
