


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const userSchema = new Schema({

  firstName: {
    type: String,
    min: 5,
    max: 50,
  },
  lastName: {
    type: String,
    min: 5,
    max: 50,
  },
  email: {
    type: String,
    min: 5,
    max: 100,
  },
  password: {
    type: String,
    min: 8,
    max: 20,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});
