import React, { useState, useEffect } from 'react';
import { FaChair, FaTable, FaLeaf, FaWineGlass, FaMusic, FaLightbulb } from 'react-icons/fa';
import './css/Inventory.css';

const Inventory = () => {
  const [inventory, setInventory] = useState({
    furniture: [
      { id: 1, name: 'Chairs', icon: FaChair, total: 500, inUse: 320, available: 180, maintenance: 10 },
      { id: 2, name: 'Tables', icon: FaTable, total: 100, inUse: 75, available: 20, maintenance: 5 },
    ],
    decorations: [
      { id: 3, name: 'Flower Sets', icon: FaLeaf, total: 50, inUse: 30, available: 15, maintenance: 5 },
      { id: 4, name: 'Table Settings', icon: FaWineGlass, total: 600, inUse: 400, available: 180, maintenance: 20 },
    ],
    equipment: [
      { id: 5, name: 'Sound Systems', icon: FaMusic, total: 10, inUse: 6, available: 3, maintenance: 1 },
      { id: 6, name: 'Lighting Sets', icon: FaLightbulb, total: 20, inUse: 12, available: 6, maintenance: 2 },
    ]
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterItems = () => {
    let items = [];
    if (selectedCategory === 'all') {
      items = [...inventory.furniture, ...inventory.decorations, ...inventory.equipment];
    } else {
      items = inventory[selectedCategory] || [];
    }

    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  };

  const getStatusColor = (available, total) => {
    const ratio = available / total;
    if (ratio > 0.3) return 'status-good';
    if (ratio > 0.1) return 'status-warning';
    return 'status-critical';
  };

  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h1>Inventory Management</h1>
        <div className="inventory-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="category-filter">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              All Items
            </button>
            <button
              className={selectedCategory === 'furniture' ? 'active' : ''}
              onClick={() => setSelectedCategory('furniture')}
            >
              Furniture
            </button>
            <button
              className={selectedCategory === 'decorations' ? 'active' : ''}
              onClick={() => setSelectedCategory('decorations')}
            >
              Decorations
            </button>
            <button
              className={selectedCategory === 'equipment' ? 'active' : ''}
              onClick={() => setSelectedCategory('equipment')}
            >
              Equipment
            </button>
          </div>
        </div>
      </div>

      <div className="inventory-grid">
        {filterItems().map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="inventory-card">
              <div className="inventory-card-header">
                <div className="inventory-icon">
                  <Icon />
                </div>
                <h3>{item.name}</h3>
              </div>
              
              <div className="inventory-stats">
                <div className="stat-row">
                  <span className="stat-label">Total Items:</span>
                  <span className="stat-value">{item.total}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">In Use:</span>
                  <span className="stat-value">{item.inUse}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Available:</span>
                  <span className={`stat-value ${getStatusColor(item.available, item.total)}`}>
                    {item.available}
                  </span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">In Maintenance:</span>
                  <span className="stat-value maintenance">{item.maintenance}</span>
                </div>
              </div>

              <div className="inventory-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill in-use"
                    style={{ width: `${(item.inUse / item.total) * 100}%` }}
                  />
                  <div
                    className="progress-fill available"
                    style={{ width: `${(item.available / item.total) * 100}%` }}
                  />
                  <div
                    className="progress-fill maintenance"
                    style={{ width: `${(item.maintenance / item.total) * 100}%` }}
                  />
                </div>
                <div className="progress-legend">
                  <span><div className="legend-dot in-use"></div>In Use</span>
                  <span><div className="legend-dot available"></div>Available</span>
                  <span><div className="legend-dot maintenance"></div>Maintenance</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;
