---
id: container.container.every
title: every() method
sidebar_label: every() method
hide_title: true
sidebar: "api"
slug: every
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Container.every() method

Calls a supplied function for every repository value, passing the item's key and value as callback parameters.

Signature:

```typescript
every(fn: (key: string, value: any) => any): this;
```

Decorators:

`@bind`

## Parameters

| Parameter | Type                                | Description |
| --------- | ----------------------------------- | ----------- |
| fn        | (key: string, value: any) =&gt; any |             |

Returns:

this

## Example

```js
container.withEntries("key", (key, value) => doSomething);
```