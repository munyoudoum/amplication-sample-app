import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupportTIcketServiceBase } from "./base/supportTIcket.service.base";

@Injectable()
export class SupportTIcketService extends SupportTIcketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
