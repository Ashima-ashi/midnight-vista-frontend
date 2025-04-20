
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Upload, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const ExcelUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('spreadsheet')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a valid Excel file');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.includes('spreadsheet')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a valid Excel file');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-company-blue-dark dark:to-company-blue">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" className="text-blue hover:bg-blue/10">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <img 
              src="/images1/1d18324c-aaea-4755-8d21-e294f33a4bcc.png" 
              alt="24/7 Software Logo" 
              className="h-12 w-auto" 
            />
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-center h-[70vh]">
          <div className="bg-white dark:bg-white/5 p-8 rounded-2xl text-center max-w-md w-full shadow-lg">
            <h1 className="text-3xl font-bold text-blue mb-6">Upload Excel File</h1>
            
            <div
              className={`border-2 border-dashed rounded-lg p-8 mb-6 transition-colors ${
                isDragging 
                  ? 'border-company-accent bg-blue/10' 
                  : 'border-gray-300 hover:border-company-accent'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-blue" />
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Drag & drop your Excel file here or click to browse
              </p>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="bg-company-accent hover:bg-company-blue-light text-white">
                  Choose File
                </Button>
              </label>
            </div>

            {selectedFile && (
              <div className="text-left p-4 bg-blue/10 rounded-lg">
                <p className="text-blue">Selected file:</p>
                <p className="text-gray-600 dark:text-gray-200 truncate">{selectedFile.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelUploadPage;
