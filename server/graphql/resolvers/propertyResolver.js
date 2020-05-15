const Property = require('../../models/propertyModel');

module.exports = {
    properties: async () => {
        try {
            const res = await Property.find();
            return res
        } catch (err) {
            throw err;
        }
    },
};