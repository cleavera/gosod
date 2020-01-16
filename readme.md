# Local install

Use for packing up a local npm dependency and then installing it. 

## Installing

```
npm install local-install
```

## Usage

### Programmatically

```typescript 
import { LogLevel, packageInstall } from 'local-install';

await packageInstall('../../otherPackage', LogLevel.WARN);

```

### Cli

```
local-install ../otherPackage1 ../otherPackage2 --logLevel=warn
```
