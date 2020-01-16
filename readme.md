# Gosod

Use for packing up a local npm dependency and then installing it. 

## Installing

```
npm install local-install
```

## Usage

Gosod will not save the dependencies as it cleans the packages up after running.

### Programmatically

```typescript 
import { LogLevel, packageInstall } from 'gosod';

await packageInstall(['../../otherPackage', '../otherPackage2'], LogLevel.WARN);

```

### Cli

```
gosod ../otherPackage1 ../otherPackage2 --logLevel=warn
```
