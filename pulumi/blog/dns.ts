import * as cloudflare from '@pulumi/cloudflare';
import { sharedPrefix } from './config';
import { staticIp } from './compute';

// imported via `pulumi import cloudflare:index/zone:Zone skut.in ${ZONE_ID}`
const skut_in = new cloudflare.Zone(
  'skut.in',
  {
    plan: 'free',
    zone: 'skut.in',
  },
  {
    protect: true,
  }
);

export const dns = new cloudflare.Record(`${sharedPrefix}-arec`, {
  name: 'log',
  zoneId: skut_in.id,
  proxied: true,
  type: 'A',
  value: staticIp.ipAddress,
  ttl: 1,
});
