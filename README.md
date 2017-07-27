
## Installation

npm install
npm start

## Dépendances

package.json

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

./actions/messages.js

fetchMessages : récupération des message à partir du fichier de fixture

createMessage : ajout d'un message dans la liste de messages