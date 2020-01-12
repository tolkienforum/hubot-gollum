### Bot für Spiele und Funktionen auf Tolkienforum.de

Der Bot basiert auf [hubot](https://hubot.github.com/) und die Scripte sind in TypeScript geschrieben.
Als Chat Server wird rocket.chat verwendet.

Die Projekt ist zusammen-gesucht aus verschiedenen Quellen:

 - https://github.com/RocketChat/hubot-rocketchat-boilerplate (Rocket.Chat Adapter für Hubot)
 - https://github.com/vsinha/b-bot.git (Hubot + TypeScript)
 - https://github.com/AcklenAvenue/hubot-example
 - https://github.com/QuentinFchx/quizz (Quizz Skript Vorlage)


## Eigene Skripte

Der TypeScript source code wird nach `./build/scripts/` compiliert. Hubot wird aus dem Verzeichnis `./build` gestartet.
Coffee Skript Dateien werden nicht unterstützt (der TypeScript Compiler wird diese nicht kopieren).


### Starten

Um mit einem Rocket.Chat Server zu verbinden muss im Projekt-Verzeichnis eine Datei `.env` angelegt werden:

```
export ROCKETCHAT_URL=chat.tolkienforum.de
export ROCKETCHAT_USER=
export ROCKETCHAT_PASSWORD=
export ROCKETCHAT_ROOM=general
export ROCKETCHAT_USE_SSL=true
```

```bash
# install dependencies
npm install

# build
npm run lint
npm run build

# run a local chat session with hubot!
npm start

# chat bot gegen Rocket.Chat Server starten:
./run.sh
```

### Entwicklung
```bash
npm run watch # will automatically rebuild on any source file changes
npm start
```
