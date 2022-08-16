import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupportTIcketResolverBase } from "./base/supportTIcket.resolver.base";
import { SupportTIcket } from "./base/SupportTIcket";
import { SupportTIcketService } from "./supportTIcket.service";

@graphql.Resolver(() => SupportTIcket)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupportTIcketResolver extends SupportTIcketResolverBase {
  constructor(
    protected readonly service: SupportTIcketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
