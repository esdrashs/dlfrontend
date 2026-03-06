import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import UcUsers from './ucUsers';
import Overview from './overview';
import './css/styles.css';
import './Dashboard.css';

const Dashboard = () => {
    const { activeUser, setActiveUser } = useContext(GlobalContext);
    const [activeMenu, setActiveMenu] = useState('overview');

    // Render content based on active menu
    const renderContent = () => {
        switch(activeMenu) {
        case 'users':
            return <UcUsers />;
        case 'overview':
            return <Overview />;
        default:
            return renderOverviewContent();
        }
    };

    const handleLogout = () => {
        setActiveUser(null);
        window.location.hash = '#/login';
    };

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: '📊', link: '#/management/summary' },
        { id: 'statistics', label: 'Statistics', icon: '📈', link: '#/management/statistics'  },
        { id: 'users', label: 'Users', icon: '👥', link: '#/management/users'  },
        { id: 'products', label: 'Products', icon: '📦', link: '#/management/products'  },
        { id: 'orders', label: 'Orders', icon: '🛒', link: '#/management/orders'  },
        { id: 'payments', label: 'Payments', icon: '💳', link: '#/management/payments'  },
        { id: 'reports', label: 'Reports', icon: '📋', link: '#/management/reports'  },
    ];

    const renderOverviewContent = () => {
        return (
            <div className="overview-section">
                <h2>Overview</h2>
                <p>Welcome to the dashboard overview.</p>
            </div>
        );
    };

    


    return (
        <div className="dashboard-wrapper">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                <div className="sidebar-logo">🛡️ Dashboard</div>
                </div>
                
                <nav className="sidebar-nav">
                {menuItems.map(item => (
                    <a
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
                    >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    </a>
                ))}
                </nav>

                <div className="sidebar-footer">
                <button className="logout-btn" onClick={handleLogout}>
                    🚪 Logout
                </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="dashboard-main">
                {/* Top Navigation */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Dashboard</h1>
                        <button className="add-new-btn">+ Add New</button>
                    </div>
                    
                    <div className="header-center">
                        <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <span className="search-icon">🔍</span>
                        </div>
                    </div>

                    <div className="header-right">
                        <button className="icon-btn">🔔</button>
                        <button className="icon-btn">⚙️</button>
                        <div className="user-profile">
                            <img src="/Images/pnguser.png" alt="User" className="avatar" />
                            <div className="user-info">
                                <span className="user-name">{activeUser?.email.split('@')[0] || 'User'}</span>
                                <span className="user-role">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>


                {/* Dashboard Content */}
                <div className="dashboard-content">
                        {renderContent()}                       
                </div>
            </div>
        </div>
    
    );
};

export default Dashboard;
