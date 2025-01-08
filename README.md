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
