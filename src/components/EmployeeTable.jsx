
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const data = sessionStorage.getItem('employeeData');
      if (data) {
        const parsedData = JSON.parse(data);
        console.log("Loaded employee data:", parsedData);
        setEmployeeData(parsedData);
      } else {
        toast.error('No employee data found. Please upload a file first.');
      }
    } catch (error) {
      console.error('Error loading employee data:', error);
      toast.error('Error loading employee data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to get table headers from the first row of data
  const getTableHeaders = () => {
    if (employeeData.length === 0) return [];
    return Object.keys(employeeData[0]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-company-blue-dark dark:to-company-blue">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link to="/upload-excel">
              <Button variant="ghost" className="text-blue hover:bg-blue/10">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Upload
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

        <div className="bg-white dark:bg-white/5 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-red-600">Employee Data</h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <p className="text-lg">Loading data...</p>
            </div>
          ) : employeeData.length === 0 ? (
            <div className="text-center p-8">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No Data Available</h3>
              <p className="text-gray-500 mb-4">Please upload an Excel or CSV file to view employee data.</p>
              <Link to="/upload-excel">
                <Button>Upload File</Button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    {getTableHeaders().map((header, index) => (
                      <TableHead key={index} className="font-bold">
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeData.map((employee, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {getTableHeaders().map((header, colIndex) => (
                        <TableCell key={`${rowIndex}-${colIndex}`}>
                          {employee[header] !== undefined && employee[header] !== null 
                            ? employee[header].toString() 
                            : '-'}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
