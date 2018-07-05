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

console.log(DB_USERS_DATA);

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



function insertUser(phone, passwd) {
    var arr = new Array();
    for(var i=0; i<DB_USERS_DATA.length; i++) {
        var info = DB_USERS_DATA[i].info.filter(function(phoneNumber){
            return element == phone;
        });
        arr.push(info);
    }
    console.log(arr.length);

/*
    firebase.database().ref('user/').push({
        phoneNumber: phone,
        password: passwd
    });
*/
}