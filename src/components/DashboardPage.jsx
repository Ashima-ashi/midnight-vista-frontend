
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileUp, FileSearch } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const DashboardPage = () => {
  return <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-company-blue-dark dark:to-company-blue">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-12">
          <img src="/images1/1d18324c-aaea-4755-8d21-e294f33a4bcc.png" alt="24/7 Software Logo" className="h-12 w-auto" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" className="text-blue border-blue hover:bg-blue/10">
              Logout
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center h-[70vh]">
          <div className="bg-white dark:bg-white/5 p-8 rounded-2xl text-center max-w-md w-full shadow-lg">
            <h1 className="text-3xl font-bold text-blue mb-6">Welcome to Dashboard</h1>
            <p className="mb-8 text-red-600 font-medium">* Upload and manage your Excel files here</p>
            
            <div className="space-y-4">
              <Link to="/upload-excel">
                <Button className="w-full bg-company-accent hover:bg-company-blue-light text-white py-6 flex items-center justify-center gap-2">
                  <FileUp className="h-5 w-5" />
                  Upload Excel File
                </Button>
              </Link>
              
              <Link to="/employee-table">
                <Button variant="outline" className="w-full border-company-accent text-company-accent hover:bg-company-accent/10 py-6 flex items-center justify-center gap-2">
                  <FileSearch className="h-5 w-5" />
                  View Recent Files
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default DashboardPage;
