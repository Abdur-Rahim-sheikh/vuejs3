## Basics of vue js

### Interpolation {{}}

it gets all the returned key values from data()

### methods vs computed vs watch

| Methods                                                                       | Computed                                                                        | Watch                                                                                                                      |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Use with event binding or data binding                                        | Use with data binding                                                           | not used directly in template                                                                                              |
| Data binding: method is executed for every "re-render" cycle of the component | Computed properties are only re-evaluated if one of their "used values" changed | Allows you to run any code in reaction to some changed data (e.g data specific action like reset counter or Http requests) |
| Use for `events` or `data` that really need to be re-evaluated all the time   | Use for data that `depends on other data`                                       | Use for any `non-data` update you want to make                                                                             |

## shorthands

1. v-on:event_name -> @:event_name
2. v-bind:attribute_name -> :attribute_name

## How vue updates the DOM

First it creates a virtual DOM, then when the data changes, it creates a new virtual DOM and compares it with the old one. Then it updates the real DOM with the changes. As this happens in the RAM and not in the real DOM, it is very fast.

## How vue is reactive

Vue uses the javascript's proxy object to make the data reactive. It listens to the changes in the data and updates all bouned elements.

## ref

`ref` is used to get the reference of the element in the DOM. It is used to access the element in the DOM.

like

```html
<input
	type="text"
	ref="myInput"
/>
```

```javascript
let var = this.$refs.myInput;
// this var will have the reference of the input element so all the attributes and values
```

## Vue instance lifecycle hooks

```mermaid
graph TD
style MVI fill:#ffa8a8,stroke:#333,stroke-width:2px,color:#000
style DC fill:#a8ff9e,stroke:#333,stroke-width:2px,color:#000
style IU fill:#a8ff9e,stroke:#333,stroke-width:2px,color:#000
    CA["createApp({...})"] -- Vue not initialized completely --> BC["beforeCreate()"]
    BC -- Vue's properties are completely initialized --> C["created()"]
    C --<ul><li>Rendered at server</li> <li>replaces placeholders </li> <li>Replaces listener</li></ul>--> CT[compile template]
    C -.-> BM["beforeMount()"]
    CT --> BM
    BM --Renders to the screen--> M["mounted()"]
    M --Vue app create's an instance--> MVI[Mounted Vue Instance]
    MVI --> DC[Data Changed]
    DC --Any dynamic change invokes this hook--> BU["beforeUpdate()"]
    BU --> U["updated()"]
    MVI --> IU[Instance Unmounted]
    IU --When trying to unmount--> BUm["beforeUnmount()"]
    BUm --> Um["unmounted()"]
```

## How emit works

`$emit` is used to emit an event from the child component to the parent component. It is used to send data from child to parent.

- We define a custom `event name` in the child component.
- We listen to that event in the parent component using `@event_name`.
- We define a function in the parent component to handle the data sent by the child component.
  - which is attached as `@event_name="function_name"`.

```javascript
// child component
this.$emit("event_name", data);
```

```html
// parent component
<child-component @event_name="function_name"></child-component>
```

```javascript
// parent component
function_name(data) {
    console.log(data);
}
```
