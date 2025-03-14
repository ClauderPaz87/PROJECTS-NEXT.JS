import { create } from "zustand";
import { v4 } from "uuid";

export const usePlatformUsers = create((set) => ({
  users: [],
  countUser: 0,
  countAdmin: 0,
  country: "",
  gender: "M",
  admin: "",
  image: "",
  editingUser: null,

  addUsers: (name, gender, date, country, email, password, image, admin) =>
    set((state) => ({
      users: [
        ...state.users,
        {
          id: v4(),
          name,
          gender,
          date,
          country,
          email,
          password,
          image,
          admin,
        },
      ],
    })),
  editUser: (id, name, gender , date, country, email, password, image) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id
          ? {
              id: id,
              name: name,
              gender: gender,
              date: date,
              country:country,
              email: email,
              password: password,
              image:image,
            }
          : user
      ),
    })),
  setEditingUser: (id)=>
    set((state)=>({
      editingUser: state.users.find((user)=> user.id === id)
    })),
  updateCountUser: () =>
    set((state) => ({
      countUser: state.countUser +1
    })),
  updateCountAdmin: () =>
    set((state) => ({
      countAdmin: state.countAdmin + 1,
    })),

  deleteUsers: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
      countUser: state.countUser - 1,
      countAdmin: state.countAdmin <= 0 ? 0 : state.countAdmin - 1,
    })),

  countrySelect: (select) =>
    set((state) => ({
      country: select,
    })),
  genderSelect: (genderS) =>
    set((state) => ({
      gender: genderS,
    })),
  adminSelect: (adm) =>
    set((state) => ({
      admin: adm,
    })),
  imageFile: (file) =>
    set((state) => ({
      image: file,
    })),
}));
