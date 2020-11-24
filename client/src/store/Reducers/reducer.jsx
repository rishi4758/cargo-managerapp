import {
  FILTER_SHIPMENT,
  FETCH_LOCAL_SHIPMENT,
  INSERT_LOCAL_SHIPMENT,
  FETCH_ALL_SHIPMENT,
} from "../Actions/types";
import shipmentList from "../../data/shipment.json";
const initialState = {
  totalItems: shipmentList,
  localItems: [],
  filterData: [],
  localId: localStorage.getItem("allShipment"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_SHIPMENT:
      return { ...state, totalItems: shipmentList };

    case INSERT_LOCAL_SHIPMENT:
      const newId = state.localId.concat(action.payload);
      const exist = state.localItems.find(
        (obj) => obj.id === action.payload.id
      );

      const newLocalItem = state.totalItems.find(
        (obj) => obj.id === action.payload.id
      );

      localStorage.setItem("localShipment", JSON.stringify(newId));
      return {
        ...state,
        localItems: exist
          ? state.localItems
          : state.localItems.concat(newLocalItem),
        localId: newId,
      };
    case FETCH_LOCAL_SHIPMENT:
      const idArray = action.payload;
      const localArray = [];
      idArray.map((item) => {
        localArray.push(state.totalItems.find((obj) => obj.id === item.id));
        return 1;
      });

      return { ...state, localItems: localArray, localId: idArray };
    case FILTER_SHIPMENT:
      if (!action.payload.loadSaved) {
        const updatedTotalList = state.totalItems.filter((item) => {
          return (
            item.name
              .toLowerCase()
              .search(action.payload.filterData.toLowerCase()) !== -1
          );
        });

        return { ...state, totalItems: updatedTotalList };
      }
      const updatedLocalList = state.localItems.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .search(action.payload.filterData.toLowerCase()) !== -1
        );
      });
      return {
        ...state,
        localItems: updatedLocalList,
      };
    default:
      return state;
  }
}
