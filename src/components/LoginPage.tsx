
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, LogIn, ArrowLeft, User, KeyRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!employeeId || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have successfully logged in",
      });
      
      // In a real app, you would navigate to the dashboard or handle auth context here
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center text-company-accent hover:text-company-blue-light transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
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
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
              <p className="text-gray-400 mt-2">Sign in to your account</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="employee-id" className="text-gray-300">
                  Employee ID
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="employee-id"
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="pl-10 bg-company-blue-dark/50 border-company-blue text-white placeholder:text-gray-500 focus:border-company-accent"
                    placeholder="Enter your employee ID"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Link to="/" className="text-sm text-company-accent hover:text-company-blue-light transition-colors">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-company-blue-dark/50 border-company-blue text-white placeholder:text-gray-500 focus:border-company-accent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
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
              
              <div className="text-center mt-6">
                <p className="text-gray-400">
                  New Employee?{" "}
                  <Link to="/" className="text-company-accent hover:text-company-blue-light transition-colors">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              © 2025 24/7 Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
