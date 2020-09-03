const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTO':
      return {
        ...state,
        marcaProducto: action.payload.marcaProducto,
        tipoDePublicidad: action.payload.tipoDePublicidad,
        linkPublicidad: action.payload.linkPublicidad,
        costoPublicidad: action.payload.costoPublicidad,
        recargoEmpresa: action.payload.recargoEmpresa,
      };
    case 'SET_PROGRAMA':
      return {
        ...state,
        programa: action.payload.programa,
        costoPrograma: action.payload.costoPrograma,
        recargoHorario: action.payload.recargoHorario,
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
