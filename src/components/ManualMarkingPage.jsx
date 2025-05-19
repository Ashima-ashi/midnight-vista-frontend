
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from 'sonner';

const ManualMarkingPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Mock employees data (replace with API call)
  useEffect(() => {
    // In a real application, fetch this data from your backend API
    const mockEmployees = [
      { id: 1, name: "John Doe", day1: "Monday", day2: "Tuesday" },
      { id: 2, name: "Jane Smith", day1: "Wednesday", day2: "Thursday" },
      { id: 3, name: "Michael Brown", day1: "Thursday", day2: "Friday" },
      { id: 4, name: "Sara Wilson", day1: "Monday", day2: "Wednesday" },
      { id: 5, name: "Robert Johnson", day1: "Tuesday", day2: "Friday" },
    ];
    
    setEmployees(mockEmployees);
    setLoading(false);
  }, []);

  const handleDayChange = (employeeId, field, value) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId ? { ...emp, [field]: value } : emp
    ));
  };

  const handleSave = (employeeId) => {
    // In a real application, this would send the data to your backend API
    const employee = employees.find(emp => emp.id === employeeId);
    console.log(`Saving for employee ${employeeId}:`, employee);
    
    // Show success toast
    toast.success(`Days saved for ${employee.name}`);
  };

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Manual Day-wise Marking</h1>
          <Button variant="outline" onClick={() => window.history.back()}>Back to Dashboard</Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <Table>
            <TableCaption>List of employees for manual day-wise marking</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Day 1</TableHead>
                <TableHead>Day 2</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>
                    <Select
                      value={employee.day1}
                      onValueChange={(value) => handleDayChange(employee.id, 'day1', value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Day 1" />
                      </SelectTrigger>
                      <SelectContent>
                        {weekdays.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={employee.day2}
                      onValueChange={(value) => handleDayChange(employee.id, 'day2', value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Day 2" />
                      </SelectTrigger>
                      <SelectContent>
                        {weekdays.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button onClick={() => handleSave(employee.id)}>Save</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManualMarkingPage;
