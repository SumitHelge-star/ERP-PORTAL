import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronDown } from 'react-icons/fa';

const Result = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const studentData = [
    { misNo: '1001', name: 'Liam Harper', department: 'Computer Science', semester: 'Fall 2023', grade: 'A', gradeClass: 'grade-a' },
    { misNo: '1002', name: 'Olivia Bennett', department: 'Electrical Engineering', semester: 'Fall 2023', grade: 'B+', gradeClass: 'grade-b' },
    { misNo: '1003', name: 'Noah Carter', department: 'Mechanical Engineering', semester: 'Fall 2023', grade: 'A-', gradeClass: 'grade-a' },
    { misNo: '1004', name: 'Emma Davis', department: 'Civil Engineering', semester: 'Fall 2023', grade: 'B', gradeClass: 'grade-c' },
    { misNo: '1005', name: 'Ethan Foster', department: 'Chemical Engineering', semester: 'Fall 2023', grade: 'A', gradeClass: 'grade-a' }
  ];

  const topPerformers = [
    { rank: 1, misNo: '1001', name: 'Liam Harper', department: 'Computer Science', grade: 'A', gradeClass: 'grade-a' },
    { rank: 2, misNo: '1005', name: 'Ethan Foster', department: 'Chemical Engineering', grade: 'A', gradeClass: 'grade-a' },
    { rank: 3, misNo: '1003', name: 'Noah Carter', department: 'Mechanical Engineering', grade: 'A-', gradeClass: 'grade-a' },
    { rank: 4, misNo: '1002', name: 'Olivia Bennett', department: 'Electrical Engineering', grade: 'B+', gradeClass: 'grade-b' },
    { rank: 5, misNo: '1004', name: 'Emma Davis', department: 'Civil Engineering', grade: 'B', gradeClass: 'grade-c' }
  ];

  const filterOptions = [
    { value: 'misNo', label: 'MIS No.' },
    { value: 'name', label: 'Name' },
    { value: 'department', label: 'Department' },
    { value: 'semester', label: 'Semester' },
    { value: 'grade', label: 'Grade' }
  ];

  const filteredStudents = studentData.filter((student) => {
    const matchesSearch = searchTerm === '' ||
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.misNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.semester.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.grade.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter && filterValue) {
      const matchesFilter = student[selectedFilter].toLowerCase().includes(filterValue.toLowerCase());
      return matchesSearch && matchesFilter;
    }

    return matchesSearch;
  });

  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleFilterSelect = (filterType) => {
    setSelectedFilter(filterType);
    setShowFilterDropdown(false);
    setFilterValue('');
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const clearFilters = () => {
    setSelectedFilter('');
    setFilterValue('');
    setSearchTerm('');
  };

  const handleViewDetails = (misNo) => {
    alert(`Viewing details for student ${misNo}`);
  };

  const getGradeClass = (gradeClass) => {
    switch (gradeClass) {
      case 'grade-a':
        return 'bg-green-100 text-green-800';
      case 'grade-b':
        return 'bg-blue-100 text-blue-800';
      case 'grade-c':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Results & Analysis</h1>
          <p className="text-gray-600">Manage student results and analyze performance.</p>
        </div>

        {/* Student Results Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Student Results</h2>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Search by student name or MIS No."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Section */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium min-w-[100px] justify-center"
                onClick={handleFilterClick}
              >
                <FaFilter className="text-sm" />
                <span>Filter</span>
                <FaChevronDown className={`text-sm transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Filter Dropdown */}
              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-2">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        onClick={() => handleFilterSelect(option.value)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active Filter Display */}
          {selectedFilter && (
            <div className="px-4 py-3 border border-gray-200 rounded-md bg-gray-50 mb-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Filter by {filterOptions.find(opt => opt.value === selectedFilter)?.label}:
                </span>
                <input
                  type="text"
                  placeholder={`Enter ${selectedFilter}...`}
                  value={filterValue}
                  onChange={handleFilterValueChange}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MIS No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.misNo} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.misNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.semester}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getGradeClass(student.gradeClass)}`}>
                        {student.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-blue-600 hover:text-blue-900 text-sm font-medium transition-colors"
                        onClick={() => handleViewDetails(student.misNo)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600">
              Showing {filteredStudents.length > 0 ? '1' : '0'} to {filteredStudents.length} of {filteredStudents.length} results
              {(selectedFilter || searchTerm) && (
                <span className="ml-2 text-blue-600">
                  (filtered from {studentData.length} total)
                </span>
              )}
            </p>
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">
                ‹
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-blue-500 bg-blue-500 text-white rounded">1</button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">2</button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">3</button>
              <span className="px-2 text-gray-500">...</span>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">10</button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Top 5 Performers Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top 5 Performers</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MIS No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topPerformers.map((student) => (
                  <tr key={student.misNo} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.rank}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.misNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getGradeClass(student.gradeClass)}`}>
                        {student.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
