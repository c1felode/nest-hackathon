import { ArcjetGuard, ArcjetModule as NestArcjetModule } from '@arcjet/nest';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ArcjetConfigService } from './arcjet.service.js';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NestArcjetModule.forRootAsync({
      isGlobal: true,
      inject: [ArcjetConfigService],
      useFactory: (arcjetConfigService: ArcjetConfigService) =>
        arcjetConfigService.createOptions(),
    }),
  ],
  providers: [
    ArcjetConfigService,
    {
      provide: APP_GUARD,
      useClass: ArcjetGuard,
    },
  ],
  exports: [ArcjetConfigService],
})
export class ArcjetSecurityModule {}
