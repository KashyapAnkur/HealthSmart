import _ from 'lodash';

const initialState = {
    predictionComponentName: "Component1",
    healthPredictionData: {
        name: "",
        age: "",
        phone: "",
        gender: "",
        symptoms: "",
        nausea: false
    },
    loggedInUserDetails: {
        name: "",
        email: "",
        phone: "",
        image: "",
        address: "",
        age: "",
        gender: "",
        height: "",
        bg: "",
        password: ""
    },
    goToDoctorsSearchResultPage: false
}

function Reducer( state = initialState ,action ) {
    switch(action.type) {
        case "prediction/add": {
            let tempObj = _.clone(state);
            tempObj.healthPredictionData.name = action.values.name;
            tempObj.healthPredictionData.age = action.values.age;
            tempObj.healthPredictionData.phone = action.values.phone;
            tempObj.healthPredictionData.gender = action.values.gender;
            return tempObj;
        }
        case "prediction/add2": {
            let tempObj = _.clone(state);
            tempObj.healthPredictionData.symptoms = action.values.symptoms;
            return tempObj;
        }
        case "prediction/add3": {
            let tempObj = _.clone(state);
            tempObj.healthPredictionData.nausea = action.values.nausea;
            return tempObj;
        }
        case "user/loggedin": {
            let tempObj = _.clone(state);
            tempObj.loggedInUserDetails = action.values;
            return tempObj;
        }
        case "prediction/change": {
            let tempObj = _.clone(state);
            tempObj.predictionComponentName = action.value
            return tempObj;
        }
        case "doctors/gotodoctorsresultpage": {
            let tempObj = _.clone(state);
            tempObj.goToDoctorsSearchResultPage = true;
            return tempObj;
        }
        case "user/logout": {
            let tempObj = _.clone(state);
            tempObj.loggedInUserDetails = {
                name: "",
                email: "",
                phone: "",
                image: "",
                address: "",
                age: "",
                gender: "",
                height: "",
                bg: "",
                password: ""
            }
            return tempObj;
        }
        case "prediction/reset": {
            let tempObject = _.clone(state);
            tempObject.predictionComponentName = "Component1";
            return tempObject;
        }
        default: {
            return state;
        }
    }
}

export default Reducer;