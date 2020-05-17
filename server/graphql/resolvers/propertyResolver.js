const Property = require('../../models/propertyModel');

module.exports = {
    properties: async ({filter}) => {
        try {
            let properties;
            if(filter !== undefined) {
                const query = JSON.parse(filter)
                 properties = await Property.find(query);
            } else {
                 properties = await Property.find();
            }
            return properties
        } catch (err) {
            throw err;
        }
    },

    createProperty: args => {
        const property = new Property({
            id: args.propertyInput.id,
            tag: args.propertyInput.tag,
            title: args.propertyInput.title,
            desc: args.propertyInput.desc,
            price: args.propertyInput.price,
            location: args.propertyInput.location,
            availability: args.propertyInput.availability,
            deposit: args.propertyInput.deposit,
            commission: args.propertyInput.commission,
            factor: args.propertyInput.factor,
            img: args.propertyInput.img,
        });
        return property
        .save()
        .then(result => result)
        .catch(err => console.log(err))
    }
};


// module.exports = {
//     properties: async () => {
//         try {
//             const properties = await Property.find({}, function (err, result) {
//                 if (err) {
//                     console.log('err:', err)
//                 } else {
//                     return result
//                 };
//             });
//             return properties
//         } catch (err) {
//             throw err;
//         }
//     },
// };

// app.get('/', function (err, res) {
//     User.find({}, function (err, result) {
//         if (err) {
//             console.log('err:', err)
//         } else {
//             res.send(JSON.stringify(result, null, 2));
//         };
//     });
// });