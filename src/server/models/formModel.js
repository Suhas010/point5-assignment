const mongoose = require('mongoose');
const shortid = require('shortid');

const schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

const formSchema = new mongoose.Schema({
    id: String,
    name: String,
}, schemaOptions);

formSchema.pre('save', function (next) {
    const form = this;

    if (!form.id) {
        form.id = shortid.generate() + shortid.generate();
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;