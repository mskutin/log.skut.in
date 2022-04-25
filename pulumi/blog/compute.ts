import * as aws from '@pulumi/aws';
import * as fs from 'fs';

import { sharedPrefix } from './config';

const prefix = `${sharedPrefix}-ls`;

export const staticIp = new aws.lightsail.StaticIp(`${prefix}-static`, {});

const keyPair = new aws.lightsail.KeyPair(`${prefix}-kp`, {
  publicKey: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDdhgSpNlC+/CGmLoyFHn2lDxAJS+h+1HqjAZ2Emug1sN+RlIK2p/Ri50R/gyWAPwHX1hjolabkCLYWmjZOYaw+0FOSgSMbIZUREKuFaNfaUrvc7jyhAf6hy8C5c7fSasXak6l0DpV494aHuewvVQ16ssi5qdh3ExWon8llS2gMPzQqOy+QwyBfz9XwhVUoOohLpEy5ZXLVO4+3VsXvKeXexxX6QfhuMwTrpM/pQGBMH3564K5+5WOo9MNv2bz0vmcm3Xv0ipTH5Vrl4oyqvjleB62VFZWTNSf/Y8YS2kzxuVLynLXdart6N1HZBBMgxhpSZ6XFsi35K/WINdWiNUiJ`,
});

const ghostInstance = new aws.lightsail.Instance(`${prefix}-vm`, {
  keyPairName: keyPair.name,
  availabilityZone: 'ap-southeast-1a',
  blueprintId: 'amazon_linux_2',
  bundleId: 'micro_1_0',
  userData: `
    sudo amazon-linux-extras install docker
    sudo amazon-linux-extras install git
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
