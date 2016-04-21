import Model from './model'
import Tag from './tag'

class User extends Model {

    /**
     * A user has many tags they are subscribed to
     *
     */
    tags() {
        return new Tag
    }

    /**
     * A user has many users that are subscribed to them
     *
     */
    subscibers() {
        return new User
    }

    /**
     * Checks if the user is subscribed to a tag
     *
     */
    hasTag(name) {
        return _.find(this.property('tags'), function(tag) {
            return tag.property('name') == name;
        }) !== undefined
    }
}

export default User
