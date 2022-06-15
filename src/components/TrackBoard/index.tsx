import { Row } from '@styles/core';

import { useTrackBoardStyles } from './TrackBoard.styles';

import StatusContainer from './StatusContainer';
import { useCurrentWorkspace, useWorkspaces } from '@store/workspaces';
import { useCurrentTracker } from '@store/tracker';

export default function TrackBoard() {
  const {
    classes: { container },
  } = useTrackBoardStyles();
  const currentWorkspace = useCurrentWorkspace()[0];
  const { currentTracker } = useCurrentTracker();

  return (
    <Row className={`bordered-container ${container}`}>
      <StatusContainer
        currentWorkspace={currentWorkspace ?? ''}
        tasks={currentTracker.backlog || []}
        status="backlog"
        color="gray"
      />
      <StatusContainer
        currentWorkspace={currentWorkspace ?? ''}
        tasks={currentTracker['to-do'] || []}
        status="to-do"
        color="blue"
      />
      <StatusContainer
        currentWorkspace={currentWorkspace ?? ''}
        tasks={currentTracker.doing || []}
        status="doing"
        color="green"
      />
      <StatusContainer
        currentWorkspace={currentWorkspace ?? ''}
        tasks={currentTracker.done || []}
        status="done"
        color="red"
      />
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
