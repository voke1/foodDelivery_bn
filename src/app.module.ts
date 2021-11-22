import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { UserService } from './users/user.service';
import { SmeController } from './smes/smes.controller';
import { userSchema } from './users/schemas/user.schema';
import { ConfigModule } from "@nestjs/config";
import { ResponseService } from './utils/response-handler.service';
import { TokenService } from './utils/jwt.service';
import { SmeService } from './smes/smes.service';
import { smeSchema } from './smes/schemas/sme.schema';
import { AppointmentService } from './appointments/.service';
import { AptController } from './appointments/.controller';
import { LocationService } from './locations/.service';
import { LocationController } from './locations/.controller';
import { OffersController } from './offers/.controller';
import { OfferService } from './offers/.service';
import { SaloonController } from './saloonservice/.controller';
import { SaloonService } from './saloonservice/.service';


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
      { name: "User", schema: userSchema },
      { name: "Sme", schema: smeSchema },

    ]),

    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(process.env.DB_URL),
  ],

  controllers: [
    AppController,
    UserController,
    SmeController,
    AptController,
    LocationController,
    OffersController,
    SaloonController
  ],
  providers: [
    AppService,
    UserService,
    ResponseService,
    TokenService,
    SmeService,
    AppointmentService,
    LocationService,
    SaloonService,
    OfferService
  ],
})
export class AppModule { }
