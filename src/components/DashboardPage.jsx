
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileUp, FileSearch, Calendar, FileSpreadsheet } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-company-blue-dark dark:to-company-blue">
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-company-blue mb-6 text-center">Excel File Management</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-300 text-center">Upload, view and manage your Excel files from one place</p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <Link to="/upload-excel" className="flex-1">
                <Button className="w-full bg-company-accent hover:bg-company-blue-light text-white py-6 flex items-center justify-center gap-2">
                  <FileUp className="h-5 w-5" />
                  Upload Excel File
                </Button>
              </Link>
              
              <Link to="/employee-table" className="flex-1">
                <Button variant="outline" className="w-full border-company-accent text-company-accent hover:bg-company-accent/10 py-6 flex items-center justify-center gap-2">
                  <FileSearch className="h-5 w-5" />
                  View Recent Files
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <Link to="/manual-marking" className="flex-1">
                <Button className="w-full bg-company-accent hover:bg-company-blue-light text-white py-6 flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Manual Day-wise Marking
                </Button>
              </Link>
              
              <Link to="/upload-holiday" className="flex-1">
                <Button className="w-full bg-company-accent hover:bg-company-blue-light text-white py-6 flex items-center justify-center gap-2">
                  <FileSpreadsheet className="h-5 w-5" />
                  Upload Holiday Sheet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
