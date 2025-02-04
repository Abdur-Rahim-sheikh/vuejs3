**75b1235** - (HEAD -> main, origin/main, origin/HEAD) efficient sorting
**1a9b437** js function as composable

- It's like building a class and use in multiple components

**719aa2d** - useStore is recommended

- Though it was very modular using `mapActions` and `mapGetters`. But in vue3 useStore is recommended. which is alternative for `this.$store`

|

**0b20c8d** - setup does not allow this.$router so

- we can use the help of router two new method
  - useRoute
  - useRouter

**ef566d3** - composable setup receives two properties `props` and `context`

- We know what props gives us as inside `setup()` we cannot acces props using this like before it's been sent as argument now we can access those using props.var.
- In case of context it has three important properties itself.
  - attrs
  - emit
  - slot
- using `ref` to unleash the power of composable
  **6201fc4** - asynchronous import
- Well vue has a method called `defineAsyncComponent` which helps to load component lazyly.
- At the same time if we want to load routes lazyly it gives even more suitable way just make it function call and it will load only when it's first needed. ie

```js
const ContactCoach = () => import("./pages/requests/ContactCoach.vue");
```

**0482bea** - reroutinng autologout

- we don't get access of router from inside the store(vuex) so we need the workaround the compute a auto logout parameter. Based on which we logout from App.vue and rerout to loginIn page automatically.

**c4d5df7** - pages modified for transition

- pages modified for transition so only one root is available which is a prerequisities for transition except list

**2dc58f0** - router animation

- also note that if we want to avoid first time load animation then we need to use `router.isReady()` method in main.js file

**bf04458** - transition-group Special css

- transition-group can help animate lists of item and it has an extra css property

## \*-move

- which helps to manage other list when performing on a specific list item.

**104441e** - cancelled methods

- remeber function does not let enter this.parameter to enter we need the lambda ()=>

**d1738d6** - javascirpt control of `done` command

**ed83187** - mode= "in-out" or "out-in"

- it means how they animate.
  - `in-out` means: first include new item than exclude. it's default
  - `out-in` means: first exclude current item then include the next. It's help if-else if block seamless transition.

**2f26c83** - transition on multiple child

- it's only possible when we use v-if else ensuring only one child will be present at a moment and we have to explicitly chain it like v-if,v-else-fi,...,v-else
- so vue can confirm that at most one will survive

**81e6fc4** - module

- though we can access module simply as before but it's variable are local and to get other module access we have to use rootState and rootGetters instead of state and Getters

**a5f7d55** - actions with dispatch

- all actions method gets a `context`

- It contains, - Commit method - dispatch method - getters
  And many more

**21fefa9** - transition naming

- we can name or rename the default css attribute name
- like enter-active-class="class name", enter-to-class, enter-from-class,
- also leave-active-class, leave-to-class, leave-from-class

**c49d956** - transition tag

- transitions require only one direct child it takes below attributes to animate
  - \_-enter-from
  - \_-enter-active
  - \_-enter-to
  - \_-leave-from
  - \_-leave-active
  - \_-leave-to

**687d049** - meta data

- to check if the url needsAuth and more things like that in [page](https://router.vuejs.org/guide/advanced/meta.html)

**1e66c30** - beforeRouterLeave

- we can check some conditions before leaving the component using `beforeRouterLeave` as here we checked if save Changes is pressed

**47b5b83** - route check order

- first it checks global `beforeEach`, then route level `beforeEnter` then component level `beforeRouteEnter`

**452aced** - programatic navigation

- when we install router, we get a special feature in javascript this.$router.method
- there are several method like push,forward, backward and more in [official page](https://router.vuejs.org/installation.html)
