const Property = require('../../models/propertyModel');

module.exports = {
    events: async () => {
        try {
            const res = await Property.find();
            console.log('res:', res)

            return res
        } catch (err) {
            throw err;
        }
    },
};