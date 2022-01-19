---
id: filesystem.filecontainer.require
title: require() method
sidebar_label: require() method
hide_title: true
sidebar: "api"
slug: require
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## FileContainer.require() method

NodeRequire a matching file as a module

Signature:

```typescript
require(key: string): NodeModule;
```

## Parameters

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| key       | string |             |

Returns:

NodeModule

## Example

```js
fsInstance.require("path/to/module.js");
```