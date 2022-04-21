# Contributing guidelines

## Prerequisites

- [NodeJS v16](https://nodejs.org/en/):
  - https://www.pulumi.com/docs/intro/languages/javascript/
  - For easier switch between NodeJS versions you can consider version managers:
    - [fnm](https://github.com/Schniz/fnm)
    - [nvm](https://github.com/nvm-sh/nvm)
    - [asdf](https://github.com/asdf-vm/asdf)
- [NPM v7](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/) to use NPM workspaces
- [Pulumi v3](https://www.pulumi.com)
- [AWS Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
  - [aws-vault CLI](https://github.com/99designs/aws-vault) for easier credential management
- [pre-commit](https://pre-commit.com/) identifies simple issues before submission to code review
  - [gitleaks](https://github.com/zricethezav/gitleaks) SAST tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos
    - [Go 1.16+](https://go.dev/doc/install)

### Installation steps

- brew install pre-commit
- pre-commit install

## Conventional commits

Commits and PR titles follow https://www.conventionalcommits.org/en/v1.0.0/

## Architectural decisions records (ADR)

Any significant change is documented via ADR document: [docs/adr/0000-record-architecture-decisions.md](./adr/0000-record-architecture-decisions.md).

## NPM Workspace

This repository relies on NPM workspace feature introduced with NPM 7. Default workspace is `pulumi` directory, i.e. your pulumi project package.json should be in that directory.
