
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFlowTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      day: "",
      priority: "",
      category: "",
      progressBar: "",
      calcCompleted: "",
      calcIgnore: "",

      addTask: (text, day, priority, category, date) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: v4(),
              text: text,
              day: day,
              priority: priority,
              date: date,
              category: category,
              completed: false,
              ignore: false,
              dialogTask: false,
              note: false,
              viewNotes: false,
              notes: [],
              hours: new Date().toLocaleString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              subTasks: [],
            },
          ],
        })),

      addDay: (day) =>
        set((state) => ({
          day: day,
        })),

      addPriority: (priority) =>
        set((state) => ({
          priority: priority,
        })),

      addCategory: (category) =>
        set((state) => ({
          category: category,
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      completedTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, completed: !task.completed, ignore: false }
              : task
          ),
        })),

      editTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, dialogTask: !task.dialogTask } : task
          ),
        })),

      editingTask: (text, day, priority, category, date) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.dialogTask
              ? { ...task, text, day, priority, category, date, dialogTask: false }
              : task
          ),
        })),

      checkIgnore: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, ignore: !task.ignore, completed: false }
              : task
          ),
        })),

      calcPerfomance: () =>
        set((state) => {
          const taskCompleted = state.tasks.filter((t) => t.completed).length;
          const totalTasks = state.tasks.length;
          const taskIgnore = state.tasks.filter((t) => t.ignore).length;

          if (totalTasks === 0) return { calcCompleted: 0, calcIgnore: 0 };

          return {
            calcCompleted: Math.round((taskCompleted / totalTasks) * 100),
            calcIgnore: Math.round((taskIgnore / totalTasks) * 100),
          };
        }),

      // Notas das tarefas:
      modalNotes: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  note: !task.note,
                  viewNotes: false,
                }
              : task
          ),
        })),

      addNotes: (id, text) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  notes: [
                    ...task.notes,
                    {
                      id: v4(),
                      text,
                      hours: new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    },
                  ],
                  note: false,
                }
              : task
          ),
        })),

      excludeNote: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({
            ...task,
            notes: task.notes.filter((note) => note.id !== id),
          })),
        })),

      closeNote: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, note: !task.note } : task
          ),
        })),

      closeViewNote: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, viewNotes: !task.viewNotes } : task
          ),
        })),

      addViewNotes: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, viewNotes: !task.viewNotes, note: false }
              : task
          ),
        })),

      // SubTarefas:
      addSubTask: (id, text, v) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  subTasks: [
                    ...task.subTasks,
                    { id: v4(), text, checked: false, value: v },
                  ],
                }
              : task
          ),
        })),

      toggleSubTask: (id, value) =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({
            ...task,
            subTasks: task.subTasks.map((t) =>
              t.id === id ? { ...t, checked: value } : t
            ),
          })),
        })),

      deleteSubTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({
            ...task,
            subTasks: task.subTasks.filter((t) => t.id !== id),
          })),
        })),

      updateSubTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      countProgressBar: (task) =>
        set((state) => {
          const totalSubSTask = task?.subTasks?.length || 0;
          if (totalSubSTask === 0) return { progressBar: 0 };
          const completedSubTask = task.subTasks.filter((t) => t.checked).length;
          const total = (completedSubTask / totalSubSTask) * 100;
          return {
            progressBar: Math.round(total),
          };
        }),
    }),
    {
      name: "flow-task-storage", // Nome da chave no localStorage
    }
  )
);