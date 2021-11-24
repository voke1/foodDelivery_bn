


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const orderSchema = new Schema({

  name: {
    type: String,
    min: 5,
    max: 50,
  },
  orderDate: {
    type: Date,

  },
  quantity: {
    type: String,
  },
  pickupDate: {
    type: String,
    min: 5,
    max: 100,
  },
  imageUrl: {
    type: String,

  },
 
});
