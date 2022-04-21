import * as aws from '@pulumi/aws';
import * as fs from 'fs';

import { sharedPrefix } from './config';

const prefix = `${sharedPrefix}-ls`;

export const staticIp = new aws.lightsail.StaticIp(`${prefix}-static`, {});

const keyPair = new aws.lightsail.KeyPair(`${prefix}-kp`, {
  publicKey: `${fs.readFileSync('./key.pub')}`,
});

const ghostInstance = new aws.lightsail.Instance(`${prefix}-vm`, {
  keyPairName: keyPair.name,
  availabilityZone: 'ap-southeast-1a',
  blueprintId: 'amazon_linux_2',
  bundleId: 'nano_1_0',
  userData: `
    sudo amazon-linux-extras install docker git
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    sudo chkconfig docker on
    sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
  `,
  name: prefix,
});

new aws.lightsail.StaticIpAttachment(`${prefix}-sia`, {
  staticIpName: staticIp.id,
  instanceName: ghostInstance.id,
});

// Managed manually via AWS Console due to https://github.com/pulumi/pulumi-aws/issues/1511#issuecomment-1092569171

// const publicPorts = new aws.lightsail.InstancePublicPorts(`${vpnPrefix}-public-ports`, {
//   instanceName: vpnInstance.name,
//   portInfos: [
//     {
//       protocol: 'tcp',
//       fromPort: 80,
//       toPort: 80,
//     },
//     {
//       protocol: 'tcp',
//       fromPort: 22,
//       toPort: 22,
//     },
//   ],
// });
