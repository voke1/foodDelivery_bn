


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const paymentSchema = new Schema({

  customerId: {
    type: String,
    min: 5,
    max: 50,
  },
  orderId: {
    type: String,

  },
  paymentDate: {
    type: Object,
  },
  amount: {
    type: String,
    min: 5,
    max: 100,
  },
  paymentType: {
    type: String,

  },
  date: {
    type: Date,
    default: Date.now,
  },
});


