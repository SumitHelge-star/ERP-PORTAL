import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronDown, FaEllipsisH } from 'react-icons/fa';

const StaffTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const staffData = [
    {
      id: 'EMP001',
      name: 'Sophia Carter',
      phone: '555-123-4567',
      email: 'sophia.carter@email.com',
      department: 'Sales',
      designation: 'Sales Manager',
      status: 'Active'
    },
    {
      id: 'EMP002',
      name: 'Ethan Bennett',
      phone: '555-987-6543',
      email: 'ethan.bennett@email.com',
      department: 'Marketing',
      designation: 'Marketing Specialist',
      status: 'Active'
    },
    {
      id: 'EMP003',
      name: 'Olivia Hayes',
      phone: '555-246-8013',
      email: 'olivia.hayes@email.com',
      department: 'Engineering',
      designation: 'Software Engineer',
      status: 'Active'
    },
    {
      id: 'EMP004',
      name: 'Liam Foster',
      phone: '555-369-1470',
      email: 'liam.foster@email.com',
      department: 'HR',
      designation: 'HR Coordinator',
      status: 'Active'
    },
    {
      id: 'EMP005',
      name: 'Ava Morgan',
      phone: '555-753-9512',
      email: 'ava.morgan@email.com',
      department: 'Finance',
      designation: 'Financial Analyst',
      status: 'Inactive'
    }
  ];

  const filterOptions = [
    { value: 'id', label: 'Employee ID' },
    { value: 'name', label: 'Employee Name' },
    { value: 'phone', label: 'Contact (Phone)' },
    { value: 'email', label: 'Contact (Email)' },
    { value: 'department', label: 'Department' },
    { value: 'designation', label: 'Designation' },
    { value: 'status', label: 'Status' }
  ];

  const filteredStaff = staffData.filter((staff) => {
    const matchesSearch = searchTerm === '' ||
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.status.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter && filterValue) {
      let filterField = staff[selectedFilter];
      if (selectedFilter === 'phone' || selectedFilter === 'email') {
        const matchesContact = staff.phone.toLowerCase().includes(filterValue.toLowerCase()) ||
                              staff.email.toLowerCase().includes(filterValue.toLowerCase());
        return matchesSearch && matchesContact;
      } else {
        const matchesFilter = filterField.toLowerCase().includes(filterValue.toLowerCase());
        return matchesSearch && matchesFilter;
      }
    }

    return matchesSearch;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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
    setSearchTerm('');
  };

  const handleActionClick = (staffId) => {
    console.log('Action clicked for:', staffId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        {/* Page Header */}
        <div className="mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Staff Records</h3>
            <p className="text-gray-500 mt-1">Manage all staff members in your organization.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-600 mb-2">Total Staff</p>
            <p className="text-2xl font-bold text-gray-900">250</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-600 mb-2">Active</p>
            <p className="text-2xl font-bold text-green-500">220</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-600 mb-2">Inactive</p>
            <p className="text-2xl font-bold text-red-500">30</p>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border-b border-gray-200">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Search by name, employee ID, department, designation, role, status"
                value={searchTerm}
                onChange={handleSearch}
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
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
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
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Employee ID</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStaff.map((staff) => (
                  <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{staff.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{staff.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-500">{staff.phone}</p>
                      <p className="text-gray-400 text-xs">{staff.email}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{staff.department}</td>
                    <td className="px-6 py-4 text-gray-500">{staff.designation}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        staff.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        onClick={() => handleActionClick(staff.id)}
                      >
                        <FaEllipsisH />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-3 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Showing {filteredStaff.length > 0 ? '1' : '0'} to {filteredStaff.length} of {filteredStaff.length} results
              {(selectedFilter || searchTerm) && (
                <span className="ml-2 text-blue-600">
                  (filtered from {staffData.length} total)
                </span>
              )}
            </p>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-500 bg-white rounded transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  className={`flex items-center justify-center w-8 h-8 border border-gray-300 bg-white rounded transition-colors text-sm ${
                    currentPage === page ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <span className="text-gray-500 px-1">...</span>
              <button
                className="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-500 bg-white rounded transition-colors hover:bg-gray-100"
                onClick={() => handlePageChange(50)}
              >
                50
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-500 bg-white rounded transition-colors hover:bg-gray-100"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffTable;
