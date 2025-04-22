
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
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

  useEffect(() => {
    const data = sessionStorage.getItem('employeeData');
    if (data) {
      setEmployeeData(JSON.parse(data));
    }
  }, []);

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

        <div className="bg-white dark:bg-white/5 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-red-600">Employee Data</h1>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Total Work Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeData.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell>{employee['Employee ID'] || employee.employeeId || '-'}</TableCell>
                    <TableCell>{employee['Name'] || employee.name || '-'}</TableCell>
                    <TableCell>{employee['Total Work Duration'] || employee.workDuration || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
