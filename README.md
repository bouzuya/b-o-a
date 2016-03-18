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
$ npm install b-o-a
```

## Handlers

- [bouzuya/boajs-handler-dom][]
- [bouzuya/boajs-handler-history][]
- [bouzuya/boajs-handler-init][]
- [bouzuya/boajs-handler-request][]

[bouzuya/boajs-handler-dom]: https://github.com/bouzuya/boajs-handler-dom
[bouzuya/boajs-handler-history]: https://github.com/bouzuya/boajs-handler-history
[bouzuya/boajs-handler-init]: https://github.com/bouzuya/boajs-handler-init
[bouzuya/boajs-handler-request]: https://github.com/bouzuya/boajs-handler-request

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
