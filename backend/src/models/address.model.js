import mongoose,{Schema} from "mongoose"
import validator from "validator";

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User Id is required"],
        immutable: true
    },
    name: {
        type: String,
        required: [true, "Person Name in address is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate(phone) {
            if (!validator.isMobilePhone(phone, 'en-IN')) {
                throw new Error("Invalid Phone");
            }
        }
    },
    pinCode: {
        type: String,
        required: [true, "Pin Code is required"],
        validate(pinCode) {
            if (!validator.isPostalCode(pinCode, 'IN')) {
                throw new Error("Invalid Pin Code");
            }
        }
    },
    address: {
        type: String,
        required: [true, "Address Filed is required"]
    },
    landmark: {
        type: String,
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    state: {
        type: String,
        required: [true, "State is required"]
    },
    setAsDefault: {
        type: Boolean,
        default: false
    }
});

export const Address = new mongoose.model('Address', addressSchema);
