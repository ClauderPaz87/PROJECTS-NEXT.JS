import { create } from "zustand";
import { v4 } from "uuid";

export const useTaskStore = create((set) => ({
  tasks: [],
  select: "",
  searchTask: "",
  filterTask: "",
  addTask: (text, completed, category) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: v4(), text: text, completed: completed, category: category },
      ],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  completedTask: (id, completed) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      ),
    })),
  editTask: (id, text, category) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, text: text, category: category } : task
      ),
    })),
  selectType: (value) =>
    set((state) => ({
      select: value,
    })),
  search: (text) =>
    set((state) => ({
      searchTask: text,
    })),
  filter: (text) =>
    set((state) => ({
      filterTask: text,
    })),
}));
