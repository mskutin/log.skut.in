# Infra

This is template repository for projects infra managed by [Pulumi](https://www.pulumi.com/)

## Contributing

Contribution guidelines described in [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

## Running locally with NPM scripts

For convenience [root package.json](./package.json) contains scripts to use with pulumi. Make sure '--cwd' parameter (current working directory) points to directory with Pulumi project:

- `preview:dev` - preview infra changes in development stack
- `up:dev` - update infra in development stack
- `refresh:dev` - refresh infra state in development stack
- `output:dev` - displays infra outputs in development stack
- `preview:prod` - preview infra changes in production stack
- `up:prod` - update infra in production stack
- `refresh:prod` - refresh infra state in production stack
- `output:prod` - displays infra outputs in production stack

Example usage:

```sh
npm run preview:dev
```

## Github Actions

Repository is aimed to be working with Github Actions CI/CD with minimal efforts

## Organization-wide secrets

The secrets below are set at **organization** level and don't require change:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- ARTIFACTORY_USERNAME
- ARTIFACTORY_API_KEY
- PULUMI_ACCESS_TOKEN

## Project secrets

The following secrets are varying from project to project and require to be set upon repository creation:

- AWS_ROLE_TO_ASSUME_DEV
- AWS_ROLE_TO_ASSUME_PROD
- MS_TEAMS_WEBHOOK_URI

Once all secrets are set:

- uncomment [preview.yml](./.github/workflows/preview.yml) and [up.yml](./.github/workflows/up.yml)
- set correct PULUMI_ROOT for your project if you use different directory (not /pulumi) for Pulumi project files
