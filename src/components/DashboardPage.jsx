
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileUp } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-company-blue-dark to-company-blue">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-12">
          <img 
            src="/lovable-uploads/1d18324c-aaea-4755-8d21-e294f33a4bcc.png" 
            alt="24/7 Software Logo" 
            className="h-12 w-auto" 
          />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Logout
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center h-[70vh]">
          <div className="glass-card p-8 rounded-2xl text-center max-w-md w-full">
            <h1 className="text-3xl font-bold text-white mb-6">Welcome to Dashboard</h1>
            <p className="text-gray-200 mb-8">Upload and manage your Excel files here</p>
            
            <Link to="/upload-excel">
              <Button 
                className="w-full bg-company-accent hover:bg-company-blue-light text-white py-6 flex items-center justify-center gap-2"
              >
                <FileUp className="h-5 w-5" />
                Upload Excel File
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
