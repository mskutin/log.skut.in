import { staticIp } from './blog/compute';
import { dns } from './blog/dns';

export const vm = {
  ip: staticIp.ipAddress,
  hostname: dns.hostname,
};
