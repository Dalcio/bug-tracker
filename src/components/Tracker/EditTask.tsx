type EditTaskProps = {
  id: string;
};

export default function EditTask({ id }: EditTaskProps) {
  return (
    <div>
      <h1>Editing the task: {id}</h1>
    </div>
  );
}
