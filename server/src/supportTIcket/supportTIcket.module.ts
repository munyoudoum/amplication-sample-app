import { Module } from "@nestjs/common";
import { SupportTIcketModuleBase } from "./base/supportTIcket.module.base";
import { SupportTIcketService } from "./supportTIcket.service";
import { SupportTIcketController } from "./supportTIcket.controller";
import { SupportTIcketResolver } from "./supportTIcket.resolver";

@Module({
  imports: [SupportTIcketModuleBase],
  controllers: [SupportTIcketController],
  providers: [SupportTIcketService, SupportTIcketResolver],
  exports: [SupportTIcketService],
})
export class SupportTIcketModule {}
