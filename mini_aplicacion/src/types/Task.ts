export interface Task {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

export interface TaskFormProps {
  onSubmit: (task: Partial<Task>) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface StatsProps {
  tasks: Task[];
}
