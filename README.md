
## Installation

```
npm install
npm start
```

## Dépendances

`package.json`

* material-ui
* react
* react-dom
* react-redux
* react-tap-event-plugin
* redux
* redux-promise

## Structure des données

### Message
* isPublic : (bool) si le message est public
* body : (string) contenu du message

## Actions

`./actions/messages.js`

fetchMessages : récupération des messages à partir du fichier de `fixtures.js`

createMessage : ajout d'un message dans la liste de messages
