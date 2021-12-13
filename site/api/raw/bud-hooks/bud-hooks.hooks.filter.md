<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@roots/bud-hooks](./bud-hooks.md) &gt; [Hooks](./bud-hooks.hooks.md) &gt; [filter](./bud-hooks.hooks.filter.md)

## Hooks.filter() method

Hooks filter

<b>Signature:</b>

```typescript
filter<T extends keyof Contract.Map & string>(id: T, value?: Contract.Map[T] | ((value?: Contract.Map[T]) => any)): Contract.Map[T];
```
<b>Decorators:</b>

`@bind`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  id | T |  |
|  value | Contract.Map\[T\] \| ((value?: Contract.Map\[T\]) =&gt; any) |  |

<b>Returns:</b>

Contract.Map\[T\]

## Remarks

The other side of bud.hooks.on. Passes a key and a value. If any filters are registered on that key they will transform the output before it is returned.

## Example


```js
bud.hooks.filter(
  'namespace.Key.event',
  ['array', 'of', 'items'],
)
```
