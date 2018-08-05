// Initialize Firebase
var config = {
    apiKey: "AIzaSyBUZSrA435Y67ATDfQuT6nixmKsG2_-FIo",
    authDomain: "carrepairshop-f398e.firebaseapp.com",
    databaseURL: "https://carrepairshop-f398e.firebaseio.com",
    projectId: "carrepairshop-f398e",
    storageBucket: "carrepairshop-f398e.appspot.com",
    messagingSenderId: "516814046131"
};
firebase.initializeApp(config);

const DATABASE = firebase.database();
var DB_USERS_DATA = undefined;

getDataBase(function(){
    console.log(DB_USERS_DATA);
});

function getDataBase(cb){
    DATABASE.ref().on('child_added', function (data) {
        var database = data.val();
        DB_USERS_DATA = Object.keys(database).map(function(data) {
            return {
                id : data,
                info :database[data]
            };
        });
        if(cb){
            cb();
        }
    });
}

function insertUser(phone, passwd,carType,carYear,carKm,carRate) {
    DATABASE.ref('user/').push({
        phoneNumber: phone,
        password: passwd,
        carType: carType,
        carYear: carYear,
        carKm: carKm,
        carRate: carRate
    });
}

function insertEs(carType,infoName,infoNumber,chk1,chk2,chk3,reqText,eventCode){
    DATABASE.ref('estimate/').push({
        carType: carType,
        infoName: infoName,
        infoNumber: infoNumber,
        reqEsimate: {insurance: chk1,
                    carRentalService: chk2,
                    pickupService:chk3},
        reqText: reqText,
        eventCode: eventCode
    });
}
