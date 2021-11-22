import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Body,
    Req,
    Res,
    Param,
    UseGuards,
    Query,
} from '@nestjs/common';
import { SmeService } from './smes.service';
import { Sme } from './interfaces/sme.interface';

@Controller('api/v1')
export class SmeController {
    constructor(private readonly SmeService: SmeService) { }

    @Post('sme')
    async createSME(
        @Body() Sme: Sme,
        @Req() req,
        @Res() res,
    ): Promise<Sme> {
        console.log('This is Sme: ', Sme)

        return this.SmeService.createSme(Sme, res);
    }

    @Get('sme')
    findSmes(@Req() req,
        @Res() res): Promise<Sme[]> {
        return this.SmeService.getSmes(res);
    }

    @Get('Sme/:SmeId')
    findSme(@Param('SmeId') SmeId,
        @Req() req,
        @Res() res
    ): Promise<Sme[]> {
        return this.SmeService.getSme(SmeId, res);
    }

    @Put('sme/:smeId')
    updateSme(@Param('smeId') smeId,
        @Body() Sme,
        @Req() req,
        @Res() res
    ): Promise<Sme> {
        return this.SmeService.updateSme(Sme, smeId, res);
    }

    @Delete('Sme/:SmeId')
    delete(@Param('SmeId') id): Promise<Sme> {
        return this.SmeService.deleteSme(id);
    }

}




