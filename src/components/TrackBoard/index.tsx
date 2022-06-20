import { TStatus } from '@my-types/Tracker.types';
import { useStatus } from '@store/task';
import { useCurrentTracker } from '@store/tracker';
import { useCurrentWorkspace } from '@store/workspaces';
import { Row } from '@styles/core';
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd';

import { useTrackBoardStyles } from './TrackBoard.styles';

import StatusContainer from './StatusContainer';

const useDragAndDrop = () => {
  const { reorder, moveTask } = useStatus();

  const onDragEnd: DragDropContextProps['onDragEnd'] = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    const sId = source.droppableId;
    const dId = destination.droppableId;

    if (sId === dId) {
      reorder(sId as TStatus, source.index, destination.index);
    } else {
      moveTask(sId as TStatus, source.index, dId as TStatus, destination.index);
    }
  };

  return { onDragEnd };
};

export default function TrackBoard() {
  const {
    classes: { container },
  } = useTrackBoardStyles();
  const currentWorkspace = useCurrentWorkspace()[0];
  const { currentTracker } = useCurrentTracker();
  const { onDragEnd } = useDragAndDrop();

  return (
    (currentWorkspace && (
      <Row className={`bordered-container ${container}`}>
        <DragDropContext onDragEnd={onDragEnd}>
          <StatusContainer
            currentWorkspace={currentWorkspace}
            tasks={currentTracker.backlog || []}
            status="backlog"
            color="gray"
          />
          <StatusContainer
            currentWorkspace={currentWorkspace}
            tasks={currentTracker['to-do'] || []}
            status="to-do"
            color="blue"
          />
          <StatusContainer
            currentWorkspace={currentWorkspace}
            tasks={currentTracker.doing || []}
            status="doing"
            color="green"
          />
          <StatusContainer
            currentWorkspace={currentWorkspace}
            tasks={currentTracker.done || []}
            status="done"
            color="red"
          />
        </DragDropContext>
      </Row>
    )) ||
    null
  );
}
