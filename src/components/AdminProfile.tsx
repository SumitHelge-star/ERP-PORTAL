import React from 'react';

const AdminProfile = () => {
  const handlePhotoUpload = () => {
    console.log('Photo upload clicked');
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 m-0 p-0">
      <div className="w-full px-4 py-8 md:px-8">
        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 bg-white/40 backdrop-blur-md border border-black/5 rounded-xl p-8 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-8 min-w-0 flex-1">
              <div className="relative flex-shrink-0">
                <div
                  className="w-36 h-36 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-4 border-black/5 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7GMu1NLEL9MKpZEOW3Gpdw7_jZ9m7xHY0-MHEQtx3Gb-pFhLUCW5beQ1bixylc1dAiT0nmckwON7hKcRf6MJhoKYQQf4Exh-1rTvRCjitKKDvvWwEyi4ne5LsGTCXZfwqHxgyVOoxI4caLWnJi1E9Oar6ewhPYtkMhPIMplFMB0dMJq3GL59ZsZkd4NVGCY53KPPt-25nGrWZvOw7-H6pK-g7vSLrpYoxK5T7_KjC_qZkbqQcLRAwKM4h5qbVaKsPkzwXa6-EucJM")'
                  }}
                ></div>
                <button
                  className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-blue-500 text-white border-0 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
                  onClick={handlePhotoUpload}
                >
                  <span className="material-symbols-outlined text-2xl">add_a_photo</span>
                </button>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 truncate">
                  Jane Doe
                </h2>
                <p className="text-lg text-gray-600 truncate">
                  Admin ID: ADM-0123
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
              <button className="flex items-center gap-2 rounded-xl bg-green-200/80 px-4 py-2 text-green-800 border-0 cursor-pointer shadow-lg shadow-green-300/30 transition-all duration-300 hover:bg-green-200/90 hover:shadow-xl hover:shadow-green-300/20 whitespace-nowrap">
                <span className="w-3 h-3 rounded-full border-2 border-green-400 bg-green-500 animate-pulse flex-shrink-0"></span>
                <span>Available</span>
              </button>
            </div>
          </div>

          {/* Admin Info Section */}
          <div className="bg-white/40 backdrop-blur-md border border-black/5 rounded-xl p-8 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Admin Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Full Name
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  Jane Doe
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Admin ID
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  ADM-0123
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Designation
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  Admissions Officer
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Date of Joining
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  01 / June / 2020
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Highest Qualification
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  Master's Degree
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Official Email
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  jane.doe@university.edu
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Phone Number
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Cabin Number
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  C-205
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Office Hours
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  Mon-Fri, 9am - 5pm
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/30 border border-black/5 transition-all duration-200 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  Years of Experience
                </p>
                <p className="font-semibold text-gray-800 text-base truncate">
                  4 Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
