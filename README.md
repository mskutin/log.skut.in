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
