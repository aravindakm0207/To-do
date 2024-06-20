const taskValidationSchema = {
    title: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Title cannot be empty'
        },
        exists: {
            errorMessage: 'Title is required'
        },
        isLength: {
            options: { min: 5 },
            errorMessage: 'title should be at least 5 character'
        },
        custom: {
            options: function (value) {
                return Task.findOne({ title: value })
                    .then((task) => {
                        if (task) {
                            throw new Error('title already exists');
                        } else {
                            return true;
                        }
                    })
                    .catch((err) => {
                        throw new Error(`Internal Server Error: ${err.message}`);
                    });
            }
        }

    },

    description: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Description cannot be empty'
        },
        exists: {
            errorMessage: 'Description is required'
        },
        isLength: {
            options: { min: 5 },
            errorMessage: 'Description should be at least 5 character'
        }
    },

    status: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Status cannot be empty'
        },
        exists: {
            errorMessage: 'Status is required'
        },
        isIn: {
            options: [['pending', 'in progress', 'completed']],
            errorMessage: 'status should be one of (pending, in progress, completed)'
        }
    }
}


const editValidationSchema = {
    title: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Title cannot be empty'
        },
        exists: {
            errorMessage: 'Title is required'
        },
        isLength: {
            options: { min: 5 },
            errorMessage: 'title should be at least 5 character'
        }
    },

    description: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Description cannot be empty'
        },
        exists: {
            errorMessage: 'Description is required'
        },
        isLength: {
            options: { min: 5 },
            errorMessage: 'Description should be at least 5 character'
        }
    },

    status: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Status cannot be empty'
        },
        exists: {
            errorMessage: 'Status is required'
        },
        isIn: {
            options: [['pending', 'in progress', 'completed']],
            errorMessage: 'status should be one of (pending, in progress, completed)'
        }
    }
}