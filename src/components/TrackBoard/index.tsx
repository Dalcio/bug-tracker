import { useCurrentTracker } from '@store/tracker';
import { useCurrentWorkspace } from '@store/workspaces';
import { Row } from '@styles/core';
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd';

import { useTrackBoardStyles } from './TrackBoard.styles';

import StatusContainer from './StatusContainer';
import { useStatus } from '@store/task';

export default function TrackBoard() {
  const {
    classes: { container },
  } = useTrackBoardStyles();
  const currentWorkspace = useCurrentWorkspace()[0];
  const { currentTracker } = useCurrentTracker();

  const { reorderSameOrigin } = useStatus();

  const onDragEnd: DragDropContextProps['onDragEnd'] = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    const sId = source.droppableId;
    const dId = destination.droppableId;

    if (sId === dId) {
      reorderSameOrigin(sId, source.index, destination.index);
    } else {
    }
  };

  return (
    <Row className={`bordered-container ${container}`}>
      <DragDropContext onDragEnd={onDragEnd}>
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
      </DragDropContext>
    </Row>
  );
}
