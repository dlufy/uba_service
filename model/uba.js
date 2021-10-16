const mongoose = require("mongoose")


const ubaSchema = new mongoose.Schema(
    {
        page: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },
        eventType: {
            type: String,
            required: true,
        },

    },
    { timestamps: true },
)
const UbaEvent = mongoose.model('ubaEvent', ubaSchema);
module.exports = UbaEvent