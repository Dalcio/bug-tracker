import { Row } from '@styles/core';

import { useTrackBoardStyles } from './TrackBoard.styles';

import StatusContainer from './StatusContainer';

export default function TrackBoard() {
  const {
    classes: { container },
  } = useTrackBoardStyles();

  return (
    <Row className={`bordered-container ${container}`}>
      <StatusContainer status="backlog" color="gray" />
      <StatusContainer status="to-do" color="blue" />
      <StatusContainer status="doing" color="green" />
      <StatusContainer status="done" color="red" />
    </Row>
  );

  // return (
  //   <DragDropContext onDragEnd={onDragEnd}>
  //     <Droppable droppableId="numbers">
  //       {(provided) => (
  //         <ul ref={provided.innerRef} {...provided.droppableProps}>
  //           <Draggable draggableId="one" index={0}>
  //             {(provided) => (
  //               <li ref={provided.innerRef} {...provided.draggableProps}>
  //                 <div className="bordered-container">One</div>
  //               </li>
  //             )}
  //           </Draggable>
  //           <Draggable draggableId="two" index={1}>
  //             {(provided) => (
  //               <li ref={provided.innerRef} {...provided.draggableProps}>
  //                 <div className="bordered-container">One</div>
  //                 <div className="bordered-container">Two</div>
  //               </li>
  //             )}
  //           </Draggable>
  //           {provided.placeholder}
  //         </ul>
  //       )}
  //     </Droppable>
  //   </DragDropContext>
  // );
}
