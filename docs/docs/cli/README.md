# OWN3D CLI <Badge text="closed beta" type="warning"/>

## Introduction

The OWN3D CLI is a command-line interface that allows you to manage your extensions, edge functions, and other resources
on the OWN3D platform. Allowing you to be more productive and efficient when developing and deploying your extensions.

Under the hood, OWN3D CLI is powered by [Deno](https://deno.land/), the most productive, secure, and performant
JavaScript and TypeScript runtime. Used by companies like Slack, GitHub, Google, and many others.

### Use Cases

- Deploy Extensions
- Deploy Edge Functions

## Install Deno and the OWN3D CLI

If you haven't already, you need
to [install the Deno runtime](https://docs.deno.com/runtime/manual/getting_started/installation)
and the [OWN3D CLI](#) using the following command:

**Install Deno on Windows:**

```bash
irm https://deno.land/install.ps1 | iex
```

**Install Deno on Linux:**

```bash
curl -fsSL https://deno.land/install.sh | sh
```

After installing Deno, you can install the OWN3D CLI using the following command:

```bash
deno install -Arfg https://cli.own3d.dev
```

You can confirm `own3d` is installed by running the following command:

```bash
own3d --help
```

Now, you can start using the OWN3D CLI to manage your extensions and edge functions.

## Update the OWN3D CLI

To update the OWN3D CLI to the latest version, you can run the following command:

```bash
deno install -Arfg https://cli.own3d.dev
```

## Usage

To get started with the OWN3D CLI, you can run the following command:

```bash
own3d --help
```

This will display the available commands and options that you can use with the OWN3D CLI.

```text
own3d 0.0.4
Command line tool for OWN3D Apps.

SUBCOMMANDS:
    ext:deploy   Deploy an extension to the cloud
    fn:create    Create a new edge function project
    fn:deploy    Deploy a edge function to the cloud
    self-update  Update the CLI to the latest version
    login        Log in to OWN3D

For more information, read the documentation at https://dev.own3d.tv/docs/cli/
```

### Subcommands Help

You can get help for a specific subcommand by running the following command:

```bash
own3d ext:deploy --help
```

This will display the available options and arguments that you can use with the specific subcommand.

```text
Read more: https://dev.own3d.tv/docs/cli/

Usage: own3d ext:deploy [OPTIONS]

Options:
    --help, -h      Show this help message
    --dist          Path to the extension's dist directory [default: dist]
    --manifest      Path to the extension's manifest file [default: manifest.yaml]
    --assets        Upload all assets (logos, screenshots, etc.) [default: false]
    --stage         Publish to a specific stage [default: local-test]
```
