import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [
    {
      title: 'Add your Tasks',
      description: 'Complete UI tasks',
      startDate: 'Aug 3',
      dueDate: 'Aug 5',
      status: 'open',
    },
  ],

  setTasks: (newTasks) => set({ tasks: newTasks }),

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  deleteTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),

  toggleStatus: (index) =>
    set((state) => ({
      tasks: state.tasks.map((task, i) =>
        i === index
          ? { ...task, status: task.status === 'complete' ? 'open' : 'complete' }
          : task
      ),
    })),
}));

export default useTaskStore;
