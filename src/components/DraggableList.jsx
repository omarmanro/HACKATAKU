import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './css/DraggableList.css'; 

const DraggableList = ({ items, onItemsChange, type = 'default', onDropzoneChange }) => {
  const [listItems, setListItems] = useState(items);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    // Si el destino es la dropzone
    if (result.destination.droppableId === 'dropzone') {
      const newItems = Array.from(listItems);
      const [movedItem] = newItems.splice(result.source.index, 1);
      setListItems(newItems);
      const updatedDropped = [...droppedItems, movedItem];
      setDroppedItems(updatedDropped);
      if (onDropzoneChange) onDropzoneChange(updatedDropped);
      onItemsChange(newItems);
      return;
    }

    // Movimiento dentro de la lista principal
    if (result.destination.droppableId === 'droppable-list') {
      const newItems = Array.from(listItems);
      const [reorderedItem] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, reorderedItem);
      setListItems(newItems);
      onItemsChange(newItems);
    }
  };

  const handleRemoveFromDropzone = (indexToRemove) => {
    const updatedDropped = droppedItems.filter((_, idx) => idx !== indexToRemove);
    const removedItem = droppedItems[indexToRemove];
    setDroppedItems(updatedDropped);
    setListItems([...listItems, removedItem]);
    if (onDropzoneChange) onDropzoneChange(updatedDropped);
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
    <>
      <div className="draggable-list-wrapper">
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
          <Droppable droppableId="dropzone">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`dropzone${snapshot.isDraggingOver ? ' dropzone-active' : ''}`}
              >
                {droppedItems.length === 0 ? (
                  <span style={{ color: '#64748b' }}>Suelta aquí para añadir</span>
                ) : (
                  droppedItems.map((item, idx) => (
                    <div key={item.id || idx} className="draggable-item" style={{marginBottom: '0.5rem', position: 'relative'}}>
                      {renderItemContent(item)}
                      <button
                        type="button"
                        className="remove-btn"
                        style={{position: 'absolute', top: 6, right: 6, background: 'transparent', border: 'none', color: '#ef4444', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer'}}
                        onClick={() => handleRemoveFromDropzone(idx)}
                        aria-label="Quitar"
                      >
                        ×
                      </button>
                    </div>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default DraggableList;
