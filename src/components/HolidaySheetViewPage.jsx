
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HolidaySheetViewPage = () => {
  const [holidayData, setHolidayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the holiday data from sessionStorage
    const storedData = sessionStorage.getItem('holidayData');
    
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setHolidayData(parsedData);
      } catch (error) {
        console.error('Error parsing holiday data:', error);
        toast.error('Error loading holiday data');
      }
    } else {
      toast.error('No holiday data available');
      // Redirect to upload page if no data is available
      setTimeout(() => {
        navigate('/upload-holiday');
      }, 1500);
    }
    
    setLoading(false);
  }, [navigate]);

  // Function to get column headers from the first entry
  const getHeaders = () => {
    if (holidayData.length === 0) return [];
    return Object.keys(holidayData[0]);
  };

  const headers = getHeaders();

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

        <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-6">Holiday Sheet Data</h1>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-500 dark:text-gray-400">Loading data...</p>
            </div>
          ) : holidayData && holidayData.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>List of uploaded holidays</TableCaption>
                <TableHeader>
                  <TableRow>
                    {headers.map((header, index) => (
                      <TableHead key={index}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {holidayData.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {headers.map((header, colIndex) => (
                        <TableCell key={`${rowIndex}-${colIndex}`}>
                          {row[header] !== undefined ? row[header].toString() : ''}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No holiday data available</p>
              <Link to="/upload-holiday">
                <Button className="bg-company-accent hover:bg-company-blue-light text-white">
                  Upload Holiday Sheet
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HolidaySheetViewPage;
