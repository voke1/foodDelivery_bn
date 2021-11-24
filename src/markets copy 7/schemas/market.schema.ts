


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const marketSchema = new Schema({

  name: {
    type: String,
    min: 5,
    max: 50,
  },
  description: {
    type: String,

  },
  geolocation: {
    type: Object,
  },
  category: {
    type: String,
    min: 5,
    max: 100,
  },
  imageUrl: {
    type: String,

  },
  date: {
    type: Date,
    default: Date.now,
  },
});
