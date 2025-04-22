
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Upload, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { toast } from "sonner";
import * as XLSX from 'xlsx';

const ExcelUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file && (file.type.includes('spreadsheet') || file.type.includes('csv') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.name.endsWith('.csv'))) {
      setSelectedFile(file);
      handleFileUpload(file);
    } else {
      toast.error('Please upload a valid Excel or CSV file');
    }
  };

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        // Store the data in sessionStorage for the table page
        sessionStorage.setItem('employeeData', JSON.stringify(jsonData));
        
        toast.success('File uploaded successfully!');
        setTimeout(() => {
          navigate('/employee-table');
        }, 1500);
      } catch (error) {
        console.error('Error processing file:', error);
        toast.error('Error processing file. Please try again with a valid Excel or CSV file.');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleDrop = event => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && (file.type.includes('spreadsheet') || file.type.includes('csv') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.name.endsWith('.csv'))) {
      setSelectedFile(file);
      handleFileUpload(file);
    } else {
      toast.error('Please upload a valid Excel or CSV file');
    }
  };

  const handleDragOver = event => {
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
            <img src="/images1/1d18324c-aaea-4755-8d21-e294f33a4bcc.png" alt="24/7 Software Logo" className="h-12 w-auto" />
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-center h-[70vh]">
          <div className="bg-white dark:bg-white/5 p-8 rounded-2xl text-center max-w-md w-full shadow-lg">
            <h1 className="font-bold mb-6 text-2xl text-red-600">Upload Excel or CSV File</h1>
            
            <div 
              className={`border-2 border-dashed rounded-lg p-8 mb-6 transition-colors ${isDragging ? 'border-company-accent bg-blue/10' : 'border-gray-300 hover:border-company-accent'}`} 
              onDrop={handleDrop} 
              onDragOver={handleDragOver} 
              onDragLeave={handleDragLeave}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-blue" />
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Drag & drop your Excel or CSV file here or click to browse
              </p>
              <input 
                type="file" 
                accept=".xlsx,.xls,.csv" 
                onChange={handleFileChange} 
                className="hidden" 
                id="file-upload" 
              />
              <label htmlFor="file-upload">
                <Button className="bg-company-accent hover:bg-company-blue-light text-white cursor-pointer">
                  Choose File
                </Button>
              </label>
            </div>

            {selectedFile && (
              <div className="text-left p-4 bg-blue/10 rounded-lg">
                <p className="text-blue">Selected file:</p>
                <p className="text-gray-600 dark:text-gray-200 truncate">
                  {selectedFile.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelUploadPage;
