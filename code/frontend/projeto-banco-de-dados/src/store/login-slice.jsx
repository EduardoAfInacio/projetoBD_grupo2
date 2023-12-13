import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: true,
    // userInfo: { name: "Affonso", cargo: "Administrador" },
    // userInfo: { name: "Affonso", cargo: "Chefe de Laboratório" },
    // userInfo: {
    //   id: "",
    //   nome: "",
    //   sobrenome: "",
    //   username: "",
    //   cargo: "",
    //   uri: "",
    // },
    userInfo: {
      id: "1",
      nome: "João",
      sobrenome: "Silva",
      username: "joao.silva",
      cargo: "Chefe de Laboratório",
      uri: "https://exemplo.com/perfil1",
    }
  },
  reducers: {
    login(state, action) {
      // atributir informacoes do usuario
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = {
        id: "",
        nome: "",
        sobrenome: "",
        username: "",
        cargo: "",
        uri: "",
      };
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;