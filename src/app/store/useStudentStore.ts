import { create } from "zustand";

export type Student = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  skills?: string;
  reason?: string;
  major: string;
  university: string;
  image?: string;
  activities?: string;
  awards?: string;
  works?: string;
};

type Store = {
  students: Student[];
  addStudent: (student: Student) => void;
};

export const useStudentStore = create<Store>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({
      students: [...state.students, { ...student, id: Date.now() }],
    })),
}));
