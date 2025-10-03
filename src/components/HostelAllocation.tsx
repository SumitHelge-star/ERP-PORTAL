import React, { useState } from 'react';
import { FaChevronDown, FaFilter, FaEllipsisV } from 'react-icons/fa';

const HostelAllocation = () => {
  const [showHostelDropdown, setShowHostelDropdown] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState('Hostel');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const hostelData = [
    {
      roomNo: 'A-101',
      building: 'Maple Residence',
      floor: 1,
      status: 'Occupied',
      name: 'Sophia Clark',
      misNo: '2023001',
      hostel: 'hostel1'
    },
    {
      roomNo: 'B-205',
      building: 'Oak Hall',
      floor: 2,
      status: 'Vacant',
      name: '-',
      misNo: '-',
      hostel: 'hostel2'
    },
    {
      roomNo: 'A-102',
      building: 'Maple Residence',
      floor: 1,
      status: 'Occupied',
      name: 'Ethan Carter',
      misNo: '2024002',
      hostel: 'hostel1'
    },
    {
      roomNo: 'C-301',
      building: 'Pine Lodge',
      floor: 3,
      status: 'Occupied',
      name: 'Emma Davis',
      misNo: '2023005',
      hostel: 'hostel3'
    },
    {
      roomNo: 'B-106',
      building: 'Oak Hall',
      floor: 1,
      status: 'Vacant',
      name: '-',
      misNo: '-',
      hostel: 'hostel2'
    }
  ];

  const hostelOptions = ['hostel1', 'hostel2', 'hostel3'];

  const filterOptions = [
    { value: 'roomNo', label: 'Room No.' },
    { value: 'floor', label: 'Floor' },
    { value: 'status', label: 'Status' },
    { value: 'name', label: 'Name' },
    { value: 'misNo', label: 'MIS No.' }
  ];

  const filteredData = hostelData.filter((room) => {
    const matchesHostel = selectedHostel === 'Hostel' || room.hostel === selectedHostel;

    if (selectedFilter && filterValue) {
      const matchesFilter = room[selectedFilter].toString().toLowerCase().includes(filterValue.toLowerCase());
      return matchesHostel && matchesFilter;
    }

    return matchesHostel;
  });

  const handleHostelClick = () => {
    setShowHostelDropdown(!showHostelDropdown);
  };

  const handleHostelSelect = (hostel) => {
    setSelectedHostel(hostel);
    setShowHostelDropdown(false);
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
    setSelectedHostel('Hostel');
  };

  const handleActionClick = (roomNo) => {
    alert(`Actions for room ${roomNo}`);
  };

  const getStatusClass = (status) => {
    return status === 'Occupied'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 m-0 p-0">
      <div className="w-full px-8 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Hostel Warden Name</h3>
          <p className="text-sm text-gray-600">Manage hostel occupancy and student assignments.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-gray-600 mb-2">Total Rooms</p>
            <p className="text-3xl font-bold text-gray-900">250</p>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-gray-600 mb-2">Occupied</p>
            <p className="text-3xl font-bold text-gray-900">200</p>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-gray-600 mb-2">Vacant</p>
            <p className="text-3xl font-bold text-gray-900">50</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {/* Hostel Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors text-sm"
                onClick={handleHostelClick}
              >
                <span>{selectedHostel}</span>
                <FaChevronDown className={`text-sm transition-transform ${showHostelDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Hostel Dropdown Menu */}
              {showHostelDropdown && (
                <div className="absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-2">
                    {hostelOptions.map((hostel) => (
                      <button
                        key={hostel}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        onClick={() => handleHostelSelect(hostel)}
                      >
                        {hostel}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Filter Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors text-sm font-medium"
                onClick={handleFilterClick}
              >
                <FaFilter className="text-sm" />
                <span>Filter</span>
                <FaChevronDown className={`text-sm transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Filter Dropdown Menu */}
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
        </div>

        {/* Active Filter Display */}
        {selectedFilter && (
          <div className="px-4 py-3 mb-4 border border-gray-200 rounded-md bg-gray-50">
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
        <div className="bg-white border border-gray-300 rounded-lg mb-6 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-300">Room No.</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-300">Floor</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-300">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-300">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-300">MIS No.</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((room, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 border-b border-gray-100 align-middle">
                      <div className="flex flex-col">
                        <div className="font-medium text-gray-900 mb-1">{room.roomNo}</div>
                        <div className="text-gray-600 text-xs">{room.building}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100 align-middle text-gray-900">{room.floor}</td>
                    <td className="px-4 py-3 border-b border-gray-100 align-middle">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(room.status)}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100 align-middle">
                      <div className={`${room.name !== '-' ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                        {room.name}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100 align-middle text-gray-900">{room.misNo}</td>
                    <td className="px-4 py-3 border-b border-gray-100 align-middle">
                      <button
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                        onClick={() => handleActionClick(room.roomNo)}
                      >
                        <FaEllipsisV />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-600">
            Showing {filteredData.length > 0 ? '1' : '0'} to {filteredData.length} of {filteredData.length} records
            {(selectedFilter || selectedHostel !== 'Hostel') && (
              <span className="ml-2 text-blue-600">
                (filtered from {hostelData.length} total)
              </span>
            )}
          </p>
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center w-9 h-9 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-50 transition-colors">
              ‹
            </button>
            <button className="flex items-center justify-center w-9 h-9 border border-blue-500 bg-blue-100 text-blue-700 rounded font-medium">1</button>
            <button className="flex items-center justify-center w-9 h-9 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-50 transition-colors">2</button>
            <button className="flex items-center justify-center w-9 h-9 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-50 transition-colors">3</button>
            <span className="px-2 text-gray-600">...</span>
            <button className="flex items-center justify-center w-9 h-9 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-50 transition-colors">25</button>
            <button className="flex items-center justify-center w-9 h-9 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-50 transition-colors">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelAllocation;
