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
import {MarketsService } from './markets.service';
import { Market } from './interfaces/market.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class MarketsController {

    constructor(private marketService: MarketsService) { }


    @Post('market')
    @UseGuards(new AuthGuard())
    createMarket(
        @Body() Market: Market,

    ): Promise<Market> {
        return this.marketService.createMarket(Market);
    }

    @Get('market/all')
    findMarkets(): Promise<Market[]> {
        return this.marketService.getMarkets();
    }

    @Get('market/:marketId')
    findMarket(@Param('marketId') marketId): Promise<Market[]> {
        return this.marketService.getMarket(marketId);
    }


    @Delete('market/:marketId')
    @UseGuards(new AuthGuard())
    delete(@Param('marketId') id): Promise<Market> {
        return this.marketService.delete(id);
    }
}
