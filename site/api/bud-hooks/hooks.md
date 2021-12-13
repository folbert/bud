---
id: bud-hooks.hooks
title: hooks class
sidebar_label: hooks class
hide_title: true
sidebar: "api"
slug: hooks
---

## Hooks class

Service allowing for fitering values through callbacks.

Signature:

```typescript
export declare class Hooks extends Service implements Contract
```

Extends: Service

Implements: Contract

## Example 1

Add a new entry to the `webpack.externals` configuration:

```ts
hooks.on("build/externals", (externals) => ({
  ...externals,
  $: "jquery",
}));
```

## Example 2

Change the `webpack.output.filename` format:

```ts
hooks.on("build.output.filename", () => "[name].[hash:4]");
```

## Example 3

Create a new filter for a value:

```ts
hooks.filter("my-event-name", DEFAULT_VALUE);
```

## Example 4

Create a new async filter for a value:

```ts
await hooks.filterAsync("my-event-name", async () => DEFAULT_VALUE);
```

## Methods

| Method                                                     | Modifiers | Description                            |
| ---------------------------------------------------------- | --------- | -------------------------------------- |
| [async(id, callback)](/api/bud-hooks/hooks/async)          |           | Register a function to filter a value. |
| [filter(id, value)](/api/bud-hooks/hooks/filter)           |           | Hooks filter                           |
| [filterAsync(id, value)](/api/bud-hooks/hooks/filterasync) |           | Asyncronous hook filter                |
| [on(id, callback)](/api/bud-hooks/hooks/on)                |           | Register a function to filter a value. |