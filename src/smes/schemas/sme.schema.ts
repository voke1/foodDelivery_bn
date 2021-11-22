


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const smeSchema = new Schema({

  asset_category: {
    type: String,
  },
  businsess_address: {
    type: String,
  },
  business_premise: {
    type: String,
  },
  business_name: {
    type: String,
  },
  employment_category: {
    type: String,
  },
  general_services: {
    type: String,
  },
  manufacturing: {
    type: String,
  },
  trading: {
    type: String,
  },
  registration_number: {
    type: String,
  },
  specialised_services: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  ownership_type: {
    type: String,
  },
  email: {
    type: String,
    min: 5,
    max: 100,
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
