import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEllipsisV, FaChevronDown } from 'react-icons/fa';

const FeeRecord = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const students = [
    {
      mis: 'ACME2023001',
      name: 'Sophia Clark',
      course: 'MBA/2023',
      totalFee: '₹10,00,000',
      status: 'Partial',
      credited: '₹8,30,000',
      debited: '₹1,70,000'
    },
    {
      mis: 'ACME2023002',
      name: 'Liam Harris',
      course: 'BSc/2023',
      totalFee: '₹8,30,000',
      status: 'Paid',
      credited: '₹8,30,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023003',
      name: 'Olivia Turner',
      course: 'BA/2023',
      totalFee: '₹6,65,000',
      status: 'Partial',
      credited: '₹5,00,000',
      debited: '₹1,65,000'
    },
    {
      mis: 'ACME2023004',
      name: 'Noah Carter',
      course: 'BEng/2023',
      totalFee: '₹11,65,000',
      status: 'Paid',
      credited: '₹11,65,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023005',
      name: 'Ava Mitchell',
      course: 'MBA/2023',
      totalFee: '₹5,00,000',
      status: 'Paid',
      credited: '₹5,00,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023006',
      name: 'Ethan Cooper',
      course: 'BSc/2023',
      totalFee: '₹1,65,000',
      status: 'Paid',
      credited: '₹1,65,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023007',
      name: 'Isabella Reed',
      course: 'BA/2023',
      totalFee: '₹83,000',
      status: 'Pending',
      credited: '₹0',
      debited: '₹83,000'
    }
  ];

  const filterOptions = [
    { value: 'name', label: 'Name' },
    { value: 'course', label: 'Course' },
    { value: 'mis', label: 'MIS' },
    { value: 'status', label: 'Status' }
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch = searchQuery === '' ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.mis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.status.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter && filterValue) {
      const matchesFilter = student[selectedFilter].toLowerCase().includes(filterValue.toLowerCase());
      return matchesSearch && matchesFilter;
    }

    return matchesSearch;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

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
    setSearchQuery('');
  };

  const handleActionClick = (studentName) => {
    alert(`Actions for ${studentName}`);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  return (
    <div className="p-6 bg-white min-h-full">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Fee Records</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-2">Total Fees Collected</p>
          <p className="text-2xl font-semibold text-gray-900">₹4,50,00,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-2">Credited Amount</p>
          <p className="text-2xl font-semibold text-gray-900">₹5,00,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-2">Debited Amount</p>
          <p className="text-2xl font-semibold text-gray-900">₹1,25,000</p>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 border-b border-gray-200">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="search"
              placeholder="Search by student, ID, course..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Filter Section */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={handleFilterClick}
            >
              Filter
              <FaFilter className="text-sm" />
              <FaChevronDown className={`text-sm transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="py-2">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
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
          <div className="px-6 py-3 border-b border-gray-200 bg-gray-50">
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">MIS</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Student Name</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Course</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Total Fee</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Status</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Credited Amount</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Debited Amount</th>
                <th className="px-6 py-4 text-left font-medium text-gray-600 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-600">{student.mis}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                  <td className="px-6 py-4 text-gray-600">{student.course}</td>
                  <td className="px-6 py-4 text-gray-600">{student.totalFee}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(student.status)}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.credited}</td>
                  <td className="px-6 py-4 text-gray-600">{student.debited}</td>
                  <td className="px-6 py-4">
                    <button
                      className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-blue-500 transition-colors"
                      onClick={() => handleActionClick(student.name)}
                    >
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-t border-gray-200 bg-gray-50">
          <span className="text-sm text-gray-600">
            Showing {filteredStudents.length > 0 ? '1' : '0'} to {filteredStudents.length} of {filteredStudents.length} records
            {(selectedFilter || searchQuery) && (
              <span className="ml-2 text-blue-600">
                (filtered from {students.length} total)
              </span>
            )}
          </span>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm bg-white"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm bg-white"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeRecord;
