import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { getAllUsers, updateUser, deleteUser, createUser } from '../api/users';
import './ucUsers.css';

const UcUsers = () => {
  const { online } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await getAllUsers();
    if (response && Array.isArray(response.Users)) {
      setUsers(response.Users);
      setFilteredUsers(response.Users);
      setError(null);
    } else {
      setError('Failed to fetch users');
      // Set mock data for demo if available
      // setUsers(mockUsers);
      // setFilteredUsers(mockUsers);
    }
    setLoading(false);
  };

  // Filter users based on search and filters
  useEffect(() => {
    let filtered = users;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        user =>
          user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Role filter
    if (filterRole !== 'all') {
      filtered = filtered.filter(
        user => (user.role || user.isAdmin ? 'admin' : 'user') === filterRole
      );
    }

    // Status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(
        user => (user.status || (user.isActive ? 'active' : 'inactive')) === filterStatus
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm, filterRole, filterStatus]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const response = await deleteUser(userId);
      if (response.success) {
        setUsers(users.filter(u => u._id !== userId));
      } else {
        alert('Failed to delete user');
      }
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'active':
        return 'badge-active';
      case 'inactive':
        return 'badge-inactive';
      case 'banned':
        return 'badge-banned';
      case 'suspended':
        return 'badge-suspended';
      case 'pending':
        return 'badge-pending';
      default:
        return 'badge-inactive';
    }
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <div className="users-title">
          <h1>User Management</h1>
          <p>Manage all users in one place. Control access, assign roles, and monitor activity across your platform.</p>
        </div>
      </div>

      <div className="users-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <select
            className="filter-select"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">👤 Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
            <option value="guest">Guest</option>
          </select>

          <select
            className="filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">🏠 Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="banned">Banned</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
          </select>

          <select className="filter-select">
            <option>📅 Date</option>
          </select>
        </div>

        <div className="action-buttons">
          <button className="btn-export">📥 Export</button>
          <button className="btn-add-user">+ Add User</button>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading users...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="users-table-wrapper">
            <table className="users-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Full Name ⬍</th>
                  <th>Email ⬍</th>
                  <th>Username ⬍</th>
                  <th>Status ⬍</th>
                  <th>Role ⬍</th>
                  <th>Joined Date ⬍</th>
                  <th>Last Active ⬍</th>
                  <th>Actions ⬍</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => (
                    <tr key={user._id || user.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="user-name-cell">
                        <img
                          src={user.photo || `https://via.placeholder.com/32?text=${user.username?.charAt(0) || 'U'}`}
                          alt={user.username}
                          className="user-avatar"
                        />
                        <span>{user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.username}</span>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>
                        <span className={`status-badge ${getStatusBadgeColor(user.status || (user.isActive ? 'active' : 'inactive'))}`}>
                          {user.status || (user.isActive ? 'Active' : 'Inactive')}
                        </span>
                      </td>
                      <td>{user.role || (user.isAdmin ? 'Admin' : 'User')}</td>
                      <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</td>
                      <td>{user.lastActive || '1 minute ago'}</td>
                      <td className="actions-cell">
                        <button className="action-btn edit-btn" title="Edit">
                          ✏️
                        </button>
                        <button
                          className="action-btn delete-btn"
                          title="Delete"
                          onClick={() => handleDeleteUser(user._id || user.id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="no-data">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <div className="rows-per-page">
              <span>Rows per page</span>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>of {filteredUsers.length} rows</span>
            </div>

            <div className="pagination-controls">
              <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                ⟨⟨
              </button>
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
                ⟨
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={currentPage === pageNum ? 'active' : ''}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span>...</span>
                  <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                </>
              )}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                ⟩
              </button>
              <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                ⟩⟩
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Mock data for demo
const mockUsers = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@gmail.com',
    username: 'jonny77',
    status: 'active',
    role: 'Admin',
    createdAt: '2023-03-12',
    lastActive: '1 minute ago'
  },
  {
    _id: '2',
    firstName: 'Olivia',
    lastName: 'Bennett',
    email: 'oilyben@gmail.com',
    username: 'oily659',
    status: 'inactive',
    role: 'User',
    createdAt: '2022-06-27',
    lastActive: '1 month ago'
  },
  {
    _id: '3',
    firstName: 'Daniel',
    lastName: 'Warren',
    email: 'dwarren3@gmail.com',
    username: 'dwarren3',
    status: 'banned',
    role: 'User',
    createdAt: '2024-01-08',
    lastActive: '4 days ago'
  }
];

export default UcUsers;

