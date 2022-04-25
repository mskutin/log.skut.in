import { staticIp } from './blog/compute';
import { skut_in, dns } from './blog/dns';

export const zoneId = skut_in.id;
export const vm = {
  ip: staticIp.ipAddress,
  hostname: dns.hostname,
};
