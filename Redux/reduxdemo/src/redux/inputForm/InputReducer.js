export const SET_FORM_DATA = "SET_FORM_DATA";
export const SET_UPDATE = "SET_UPDATE";
export const SET_DELETE = "SET_DELETE";
export const setFormData = (formData) => ({
  type: SET_FORM_DATA,
  payload: formData,
});
export const setUpdate = (index, updatedData) => ({
  type: SET_UPDATE,
  payload: { index, updatedData },
});
export const setDelete = (index) => ({
  type: SET_DELETE,
  payload: { index },
});

const initialState = {
  formData: [],
};

const formReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action?.payload,
      };
    case SET_UPDATE:
      return {
        ...state,
        formData: state?.formData?.map((item, index) =>
          index === action?.payload?.index ? action?.payload?.updatedData : item
        ),
      };
    case SET_DELETE:
      return {
        ...state,
        formData: state?.formData?.filter(
          (item, index) => index !== action?.payload?.index
        ),
      };
    default:
      return state;
  }
};

export default formReducer;



