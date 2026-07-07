import { fixedWindow, shield } from '@arcjet/nest';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArcjetConfigService {
  constructor(private readonly configService: ConfigService) {}

  createOptions() {
    return {
      key: this.configService.getOrThrow<string>('ARCJET_KEY'),
      rules: [
        shield({ mode: 'LIVE' }),
        fixedWindow({
          mode: 'LIVE',
          window: '60s',
          max: 100,
        }),
      ],
    };
  }
}
