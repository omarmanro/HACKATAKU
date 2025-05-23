import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './css/DraggableList.css'; 

const DraggableList = ({ items, onItemsChange, type = 'default' }) => {
  const [listItems, setListItems] = useState(items);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(listItems);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setListItems(newItems);
    onItemsChange(newItems);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    ...(isDragging && {
      background: '#e2e8f0'
    })
  });

  const renderItemContent = (item) => {
    switch (type) {
      case 'employee':
        return (
          <>
            <img 
              src={item.avatar || 'default-avatar.png'} 
              alt={item.name} 
              className="item-avatar"
            />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.position}</p>
            </div>
          </>
        );
      
      case 'salon':
        return (
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Capacity: {item.capacity}</p>
            <p>{item.available ? 'Available' : 'Occupied'}</p>
          </div>
        );
      
      case 'equipment':
        return (
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Status: {item.status}</p>
            <p>Location: {item.location}</p>
          </div>
        );
      
      default:
        return <div className="item-details">{item.name || item.toString()}</div>;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable-list">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="droppable-container"
          >
            {listItems.map((item, index) => (
              <Draggable
                key={item.id || index}
                draggableId={item.id?.toString() || index.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable-item"
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {renderItemContent(item)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
