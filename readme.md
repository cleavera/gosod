# Gosod

Use for packing up a local npm dependency and then installing it. 

## Installing

```
npm install local-install
```

## Usage

### Programmatically

```typescript 
import { LogLevel, packageInstall } from 'gosod';

await packageInstall('../../otherPackage', LogLevel.WARN);

```

### Cli

```
gosod ../otherPackage1 ../otherPackage2 --logLevel=warn
```
