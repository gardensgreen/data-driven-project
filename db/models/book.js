'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notNull: { 
          msg: 'Please provide a value for Title!'
        }, 
        notEmpty: {
          msg: 'Please provide a value for Title!' 
        },
        len: {
          args: [0, 255], 
          msg: 'Title must not be more than 255 characters long!'
        }
      }
    },
    author: { 
     type: DataTypes.STRING(100),
     allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for Author!'
        },
        notEmpty: {
          msg: 'Please provide a value for Author!'
        },
        len: {
          args: [0, 100],
          msg: 'Author must not be more than 100 characters long!'
        }
      } 
    },
    releaseDate: {
     type: DataTypes.DATEONLY,
     allowNull: false,
     validate: {
       notNull: {
         msg: 'Please provide a value for release date!'
       },
       isDate: {
         msg: 'Please provide a valid date for release date!'
       }
     }
    },
    pageCount: { 
     type: DataTypes.INTEGER, 
     allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for page count!'
        },
        isInt: {
          msg: 'Please provide a valid integer for page count!'
        }
      }
    },
    publisher: { 
     type: DataTypes.STRING(100),
     allowNull:false,
      validate: {
        notNull: {
          msg: 'Please provide a value for Publisher!'
        },
        notEmpty: {
          msg: 'Please provide a value for Publisher!'
        },
        len: {
          args: [0, 100],
          msg: 'Publisher must not be more than 100 characters long!'
        }
      } 
     },
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};