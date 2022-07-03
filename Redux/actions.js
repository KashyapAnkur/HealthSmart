const addPredictionValues = val => ({ type: "prediction/add", values: val });
const addPredictionValues2 = val => ({ type: "prediction/add2", values: val });
const addPredictionValues3 = val => ({ type: "prediction/add3", values: val });
const changePredictionComponent = val => ({ type: "prediction/change", value: val });
const resetPredictionComponent = () => ({ type: "prediction/reset" });
const addLoggedInUserDetail = values => ({ type: "user/loggedin", values: values });
const deleteLoggedInUser = () => ({ type: "user/logout" });
const setGoToDoctorsSearchResult = () => ({ type: "doctors/gotodoctorsresultpage" });

export { 
    addPredictionValues,
    addPredictionValues2,
    addPredictionValues3,
    changePredictionComponent, 
    resetPredictionComponent,
    addLoggedInUserDetail,
    deleteLoggedInUser,
    setGoToDoctorsSearchResult
};