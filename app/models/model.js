var _ = require('lodash')

class Model {
    constructor(properties) {
        this.properties = {}
        this.fill(properties)
    }

    property(key, value = null) {
        if (value == null) {
            return this.properties[key]
        } else {
            // If value is an array and value.data is set then this is a relationship
            if (value.data !== undefined) {
                this.properties[key] = _.map(value.data, function(relation) {
                    var child = this[key]()
                    child.fill(relation)
                    return child
                }.bind(this))
            } else {
                // Otherwise it's just a regular property
                this.properties[key] = value
            }
        }
    }

    fill(attributes) {
        _.each(attributes, function(value, key) {
            this.property(key, value)
        }.bind(this))
    }
}

export default Model;
