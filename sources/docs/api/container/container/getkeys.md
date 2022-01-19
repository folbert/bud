---
id: container.container.getkeys
title: getkeys() method
sidebar_label: getkeys() method
hide_title: true
sidebar: "api"
slug: getkeys
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Container.getKeys() method

Returns an array of values of the enumerable keys of a repository object

Signature:

```typescript
getKeys(key?: string): string[];
```

Decorators:

`@bind`

## Parameters

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| key       | string |             |

Returns:

string\[\]

## Example 1

```js
container.getKeys("item");
// => returns keys of container.repository[item]
```

## Example 2

```js
container.getKeys();
// => returns keys of container.repository
```