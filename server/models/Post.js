const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
        body: { type: String, required: true },
        picture_path: { 
            public_id: { type: String, default: '' },
            url: { type: String, default: '' }
        },
        // picture_path: [{ 
        //     public_id: { type: String, default: '' },
        //     url: { type: String, default: '' }
        // }],
        location: String,
        likes: {
            type: Map,
            of: Boolean,
            by: { type: Schema.Types.ObjectId, ref: 'User' }
        },
        comments: {
            type: Array,
            default: []
        },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        deleted: Boolean
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

module.exports = mongoose.model('Post', postSchema);