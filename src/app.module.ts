import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { MarketsController } from './markets/markets.controller';
import { MarketsService } from './markets/markets.service';
import { CustomerService } from './customer/customer.service';
import { ResponseService } from './utils/response-handler.service';
import { customerSchema } from './customer/schemas/customer.schema';
import { ConfigModule } from "@nestjs/config";
import { marketSchema } from './markets/schemas/market.schema'



const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Customer", schema: customerSchema },
      { name: "Market", schema: marketSchema},
    ]),

    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(process.env.DB_URL),
  ],

  controllers: [
AppController, 
CustomerController,
MarketsController
  ],
  providers: [
    AppService,
    CustomerService,
    MarketsService,
    ResponseService,

  ],
})
export class AppModule {}
