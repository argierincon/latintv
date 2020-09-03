const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTO':
      return {
        ...state,
        marcaProducto: action.payload.marcaProducto,
        tipoDePublicidad: action.payload.tipoDePublicidad,
        linkPublicidad: action.payload.linkPublicidad,
      };
    case 'SET_PROGRAMA':
      return {
        ...state,
        programa: action.payload.programa,
      };
    case 'SET_FECHAHORA':
      return {
        ...state,
        fecha: action.payload.fecha,
        hora: action.payload.hora,
      };
    default:
      return state;
  }
};

export default reducer;
