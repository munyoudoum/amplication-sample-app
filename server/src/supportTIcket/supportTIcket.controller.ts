import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupportTIcketService } from "./supportTIcket.service";
import { SupportTIcketControllerBase } from "./base/supportTIcket.controller.base";

@swagger.ApiTags("supportTIckets")
@common.Controller("supportTIckets")
export class SupportTIcketController extends SupportTIcketControllerBase {
  constructor(
    protected readonly service: SupportTIcketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
