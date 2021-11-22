import { Injectable } from '@nestjs/common';
import { Sme } from './interfaces/sme.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ResponseService } from '../utils/response-handler.service';

@Injectable()
export class SmeService {

    constructor(
        @InjectModel('Sme') private SmeModel: Model<Sme>,
        private responseService: ResponseService,

    ) { }

    async createSme(Sme, res) {
        const newSme = new this.SmeModel(Sme);

        try {
            const Sme = await newSme.save();
            console.log('Sme saved: ', Sme)
            if (Sme) {

                return this.responseService.requestSuccessful(res, Sme);

            }
            return {
                success: false,
                message: 'Sme not saved. Please try again',
            };
        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    
    async getSme(SmeId, res): Promise<Sme[]> {
        try {
            const SME = await this.SmeModel.findById({ _id: SmeId });
            if (SME) {
                return this.responseService.requestSuccessful(res, SME);
            }
            return this.responseService.clientError(
                res,
                'SME not found!',
            );
        } catch (error) {
            return this.responseService.serverError(res, error.message);

        }


    }

    async getSmes(res): Promise<[]> {
        try {
            const SMEs = await this.SmeModel.find();
            if (SMEs) {
                return this.responseService.requestSuccessful(res, SMEs);
            }
            return this.responseService.clientError(
                res,
                'No SMEs found!',
            );
        } catch (error) {
            return this.responseService.serverError(res, error.message);

        }
    }


    async updateSme(Sme, id, res): Promise<Sme> {
        try {
            const response = await this.SmeModel.findByIdAndUpdate(id, Sme, { new: true });
            if (response) {

                return this.responseService.requestSuccessful(res, response);
            } else {
                return this.responseService.clientError(
                    res,
                    'Error!, Sme not updated',
                );
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

    async deleteSme(id: string): Promise<Sme> {
        return await this.SmeModel.findByIdAndRemove(id);
    }

}
