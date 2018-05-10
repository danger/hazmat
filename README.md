### Setup for working with Peril

My aim for Peril's web infra is to have 3 separate apps come together to create a single public-facing unified interface.

*Prod*:

- `peril.systems` - A React app, simple and as easy to change as possible 
- `peril.systems/api` - Peril
- `peril.systems/dashboard` - React/Relay/TypeScript etc for ensuring tight connections between server/client

*Staging*:

- `peril.systems/staging` - A React app, simple and as easy to change as possible 
- `peril.systems/staging/api` - Peril
- `peril.systems/staging/dashboard` - React/Relay/TypeScript etc for ensuring tight connections between server/client

*Dev*:

- Webroot: http://localhost:9000/dev
- GraphiQL: http://localhost:9000/dev/api/graphiql
- GraphQL: http://localhost:9000/dev/api/graphql
- GitHub Webhook: http://localhost:9000/dev/api/webhook
- Dashboard: http://localhost:9000/dev/dashboard

This repo exists to set that up for development, and to help manage deployment of that too.

### I want to work on peril.systems

Cool, clone this repo: 

```sh
git clone https://github.com/danger/hazmat.git
cd hazmat
yarn

# sets up the project subfolders
yarn setup
```

Then running `yarn start` will open up a bunch of concurrent servers for you.
