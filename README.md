# ![b-o-a](https://cloud.githubusercontent.com/assets/1221346/13554535/a97537aa-e3ed-11e5-8897-480f0c76c9c5.png)

b-o-a is a simple framework.

## Concepts

- uni-directional
- single dispatcher
- action cycle

## Types

- `type O<T> = Observable<T>;`
- `type A<T> = { type: string; data?: T; };`
- `type HandlerOptions = { re: (action: A<any>) => void; };`
- `type Handler = (action$: O<A<any>>, options?: HandlerOptions) => O<A<any>>;`
- `type run = (app: Handler) => void`;

## Installation

```
$ npm install b-o-a rxjs@5.0.0-beta.6 # you can use rxjs@5.x
```

## Handlers

- [bouzuya/boa-handler-dom][] ([npmjs:boa-handler-dom][])
- [bouzuya/boa-handler-history][] ([npmjs:boa-handler-history][])
- [bouzuya/boa-handler-init][] ([npmjs:boa-handler-init][])
- [bouzuya/boa-handler-request][] ([npmjs:boa-handler-request][])
- <del>[bouzuya/boajs-handler-dom][] ([npmjs:boajs-handler-dom][])</del>
- <del>[bouzuya/boajs-handler-history][] ([npmjs:boajs-handler-dom][])</del>
- <del>[bouzuya/boajs-handler-init][] ([npmjs:boajs-handler-init][])</del>
- <del>[bouzuya/boajs-handler-request][] ([npmjs:boajs-handler-request][])</del>

[Search all handlers](https://www.npmjs.com/browse/keyword/boa-handler)

[bouzuya/boa-handler-dom]: https://github.com/bouzuya/boa-handler-dom
[npmjs:boa-handler-dom]: https://www.npmjs.com/package/boa-handler-dom
[bouzuya/boa-handler-history]: https://github.com/bouzuya/boa-handler-history
[npmjs:boa-handler-history]: https://www.npmjs.com/package/boa-handler-history
[bouzuya/boa-handler-init]: https://github.com/bouzuya/boa-handler-init
[npmjs:boa-handler-init]: https://www.npmjs.com/package/boa-handler-init
[bouzuya/boa-handler-request]: https://github.com/bouzuya/boa-handler-request
[npmjs:boa-handler-request]: https://www.npmjs.com/package/boa-handler-request
[bouzuya/boajs-handler-dom]: https://github.com/bouzuya/boajs-handler-dom
[npmjs:boajs-handler-dom]: https://www.npmjs.com/package/boajs-handler-dom
[bouzuya/boajs-handler-history]: https://github.com/bouzuya/boajs-handler-history
[npmjs:boajs-handler-history]: https://www.npmjs.com/package/boajs-handler-history
[bouzuya/boajs-handler-init]: https://github.com/bouzuya/boajs-handler-init
[npmjs:boajs-handler-init]: https://www.npmjs.com/package/boajs-handler-init
[bouzuya/boajs-handler-request]: https://github.com/bouzuya/boajs-handler-request
[npmjs:boajs-handler-request]: https://www.npmjs.com/package/boajs-handler-request

## Libraries

- [bouzuya/boa-core][] ([npmjs:boa-core][])
- [bouzuya/boa-router][] ([npmjs:boa-router][])
- [bouzuya/boa-vdom][] ([npmjs:boa-vdom][])
- <del>[bouzuya/boajs-core][] ([npmjs:boajs-core][])</del>
- <del>[bouzuya/boajs-router][] ([npmjs:boajs-router][])</del>
- <del>[bouzuya/boajs-vdom][] ([npmjs:boajs-vdom][])</del>

[bouzuya/boa-core]: https://github.com/bouzuya/boa-core
[npmjs:boa-core]: https://www.npmjs.com/package/boa-core
[bouzuya/boa-router]: https://github.com/bouzuya/boa-router
[npmjs:boa-router]: https://www.npmjs.com/package/boa-router
[bouzuya/boa-vdom]: https://github.com/bouzuya/boa-vdom
[npmjs:boa-vdom]: https://www.npmjs.com/package/boa-vdom
[bouzuya/boajs-core]: https://github.com/bouzuya/boajs-core
[npmjs:boajs-core]: https://www.npmjs.com/package/boajs-core
[bouzuya/boajs-router]: https://github.com/bouzuya/boajs-router
[npmjs:boajs-router]: https://www.npmjs.com/package/boajs-router
[bouzuya/boajs-vdom]: https://github.com/bouzuya/boajs-vdom
[npmjs:boajs-vdom]: https://www.npmjs.com/package/boajs-vdom

## Examples

- [boajs/counter-boa](https://github.com/boajs/counter-boa) ...  0.8.0 / about 250 lines
- [boajs/todomvc-boa](https://github.com/boajs/todomvc-boa) ([demo](http://boajs.github.io/todomvc-boa/)) ...  0.6.2 / about 500 lines

## Badges

[![Circle CI][circleci-badge-url]][circleci-url]

## License

### Source Code

[MIT](LICENSE) ([@bouzuya][user])

### Logo

MIT ([@haskrock](https://github.com/hashrock))

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
[circleci-badge-url]: https://circleci.com/gh/bouzuya/b-o-a.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/b-o-a
