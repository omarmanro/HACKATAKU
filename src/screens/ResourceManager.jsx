import React, { useState } from 'react';
import DraggableList from '../components/DraggableList';
import './css/ResourceManager.css';

const ResourceManager = () => {
  // Example data for different types of items
  const [employees] = useState([
    { id: 1, name: 'John Doe', position: 'Event Manager', avatar: '/avatars/john.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Coordinator', avatar: '/avatars/jane.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'Staff', avatar: '/avatars/mike.jpg' },
  ]);

  const [salons] = useState([
    { id: 1, name: 'Grand Ballroom', capacity: 200, available: true },
    { id: 2, name: 'Conference Room A', capacity: 50, available: false },
    { id: 3, name: 'Garden Terrace', capacity: 100, available: true },
  ]);

  const [equipment] = useState([
    { id: 1, name: 'Projector', status: 'Available', location: 'Storage Room' },
    { id: 2, name: 'Sound System', status: 'In Use', location: 'Ballroom' },
    { id: 3, name: 'Lighting Kit', status: 'Maintenance', location: 'Technical Room' },
  ]);

  const handleItemsChange = (newItems, type) => {
    console.log(`${type} items reordered:`, newItems);
    // Here you can update your state or make API calls
  };

  return (
    <div className="resource-manager">
      <section className="resource-section">
        <h2>Employees</h2>
        <DraggableList 
          items={employees}
          type="employee"
          onItemsChange={(items) => handleItemsChange(items, 'employees')}
        />
      </section>

      <section className="resource-section">
        <h2>Salons</h2>
        <DraggableList 
          items={salons}
          type="salon"
          onItemsChange={(items) => handleItemsChange(items, 'salons')}
        />
      </section>

      <section className="resource-section">
        <h2>Equipment</h2>
        <DraggableList 
          items={equipment}
          type="equipment"
          onItemsChange={(items) => handleItemsChange(items, 'equipment')}
        />
      </section>
    </div>
  );
};

export default ResourceManager;
