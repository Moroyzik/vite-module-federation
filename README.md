# Basic Vite-Module-Federation Example

This example demos a basic host application loading remote component.

- `host-app` is the host application.
- `remote-app` standalone application which exposes `Input` component.

# Running Demo

1. Run `npm run preview` in `remote-app`
2. Run `npm run dev` in `host-app`

- [localhost:5172](http://localhost:5172/) (HOST)
- [localhost:4173](http://localhost:4173/) (REMOTE)