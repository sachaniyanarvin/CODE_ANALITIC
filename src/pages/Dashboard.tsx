import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaCog,
  FaBell,
  FaEnvelope,
  FaCalendar,
  FaFileAlt,
  FaPlus,
  FaSearch,
} from 'react-icons/fa';
import IconButton from '../components/IconButton';
import FloatingActionButton from '../components/FloatingActionButton';

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-header">
          <h2 className="text-xl font-bold">CodeMentor AI</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item active">
            <FaHome className="nav-icon" />
            Dashboard
          </Link>
          <Link to="/analytics" className="nav-item">
            <FaChartBar className="nav-icon" />
            Analytics
          </Link>
          <Link to="/users" className="nav-item">
            <FaUsers className="nav-icon" />
            Users
          </Link>
          <Link to="/settings" className="nav-item">
            <FaCog className="nav-icon" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="flex items-center gap-4">
            <IconButton icon={FaSearch} variant="secondary" />
            <input
              type="text"
              placeholder="Search..."
              className="form-input"
            />
          </div>
          <div className="flex items-center gap-2">
            <IconButton icon={FaBell} variant="secondary" badge="3" />
            <IconButton icon={FaEnvelope} variant="secondary" badge="5" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="quick-action-btn">
            <FaCalendar className="text-primary-color" />
            Schedule Meeting
          </button>
          <button className="quick-action-btn">
            <FaFileAlt className="text-primary-color" />
            New Project
          </button>
          <button className="quick-action-btn">
            <FaUsers className="text-primary-color" />
            Add Team Member
          </button>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-value">2,543</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$12,345</div>
            <div className="stat-label">Revenue</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">89%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1,234</div>
            <div className="stat-label">Active Projects</div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
              <IconButton icon={FaPlus} variant="secondary" />
            </div>
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-icon">
                  <FaUsers />
                </div>
                <div className="activity-content">
                  <div className="activity-title">New team member joined</div>
                  <div className="activity-time">2 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <FaFileAlt />
                </div>
                <div className="activity-content">
                  <div className="activity-title">Project updated</div>
                  <div className="activity-time">4 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <FaCalendar />
                </div>
                <div className="activity-content">
                  <div className="activity-title">Meeting scheduled</div>
                  <div className="activity-time">1 day ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h3 className="card-title">Performance</h3>
            </div>
            <div className="chart-container">
              {/* Add your chart component here */}
              <div className="h-64 flex items-center justify-center text-gray-500">
                Chart Placeholder
              </div>
            </div>
          </div>
        </div>

        <FloatingActionButton
          icon={FaPlus}
          onClick={() => console.log('Add new item')}
        />
      </main>
    </div>
  );
};

export default Dashboard; 