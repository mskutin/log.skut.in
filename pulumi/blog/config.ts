import * as pulumi from '@pulumi/pulumi';

export const env = pulumi.getStack().toLowerCase();
export const sharedPrefix = `skutin-log-${env}`;
export const overridenTags = {
  CostCenter: 'Ghost Log',
};
