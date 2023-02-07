import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  OrderCreateRequest,
  OrderCreateResponse,
} from './dto/orders/create.dto';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get('/v3/health')
  getOrder() {
    return {};
  }

  @Post('/v3/orders')
  async createOrder(
    @Body() order: OrderCreateRequest,
  ): Promise<OrderCreateResponse> {
    const job = this.appService.orderToJob(order);
    const jobResponse = await this.appService.createJob(job);
    return this.appService.jobToOrder(jobResponse);
  }

  @Post('/v3/orders/http-delay')
  async createOrderHttpDelay(
    @Body() order: OrderCreateRequest,
  ): Promise<OrderCreateResponse> {
    const job = this.appService.orderToJob(order);
    const jobResponse = await this.appService.createJobDelay(job);
    return this.appService.jobToOrder(jobResponse);
  }
}
