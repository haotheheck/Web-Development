const mongoose = require('mongoose');
const Schema =mongoose.Schema;



//creating sessionType schema
const SessionTypeSchema = new Schema({

    assessment: {
        type: String
    },
    messageTherapy: {
        type: String
    },
    StretchExcercise: {
        type: String
    },
    technology: {
        type: String
    },
    sessionNote: {
        type: String
    }
})
//creating Attendance detail schema 
const AttendanceSchema = new Schema({

    client: {
        type: String
    },
    sessionType: {
        type: String
    },
    sessionDurationCancelledNoShow: {
        type: String
    },
    sessionNote: {
        type: String
    }
})

//creating session Schema 
const SessionSchema = new Schema({

    sessionDate: {
        type: String,
        required: [true, 'Field is required']
    },
    sessionTime: {
        type: String,
        required: [true, 'Field is required']
    },
    Client: {
        type: String,
        required: [true, 'Field is required']
    },
    physiotherapist: {
        type: String,
        required: [true, 'Field is required']
    },
    fee: {
        type: Number,
        required: [true, 'Field is required']
    },
    sessionNumber: {
        type: String,
        required: [true, 'Field is required']
    },
    sessionDurationCancelledNoShow: {
        type: String
    },
    //creating a database sub folder to compile sessionTypeSchema and attendanceSchema together
    sessionType: {
        type: SessionTypeSchema,
        attendance: AttendanceSchema
    }
});


const Session = mongoose.model('session', SessionSchema);

module.exports = Session;
