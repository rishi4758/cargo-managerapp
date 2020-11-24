import {
  FILTER_SHIPMENT,
  FETCH_LOCAL_SHIPMENT,
  INSERT_LOCAL_SHIPMENT,
  FETCH_ALL_SHIPMENT,
} from "./types";

export const saveLocalShipment = (data) => {
  return { type: INSERT_LOCAL_SHIPMENT, payload: data };
};

export const fetchLocalItems = () => {
  const data = JSON.parse(localStorage.getItem("localShipment"));
  return { type: FETCH_LOCAL_SHIPMENT, payload: data ? data : [] };
};
export const filterShipment = (data) => {
  return { type: FILTER_SHIPMENT, payload: data };
};
export const fetchAllShipment = () => {
  return { type: FETCH_ALL_SHIPMENT };
};
