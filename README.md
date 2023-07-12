# Spoti-Vite

SpotiVite est une application qui vous permet d'explorer vos playlists Spotify. Vous pouvez parcourir parmis vos différentes playlists, afficher les détails d'une playlist sélectionnée et écouter les morceaux qu'elle possède.

## Fonctionnalités

- Parcourir vos playlists
- Afficher les détails d'une playlist sélectionnée
- Écouter les morceaux de la playlist

## Technologies utilisées

Spoti-Vite est construit en utilisant les technologies suivantes :

- **React** : une bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et réactives. Nous avons utilisé React pour créer les différents composants de l'application et gérer l'état de l'interface utilisateur.

- **Vite** : un outil de développement rapide pour les applications web. Vite offre un temps de compilation instantané et un serveur de développement léger, ce qui facilite le processus de développement de l'application.

- **TypeScript** : un langage de programmation qui ajoute des fonctionnalités de typage statique à JavaScript. Nous avons utilisé TypeScript pour améliorer la robustesse et la maintenabilité de notre code en détectant les erreurs de type à la compilation.

- **Tailwind CSS** : un framework CSS open-source qui facilite la création d'interfaces utilisateur réactives et esthétiques. Nous avons utilisé Tailwind CSS pour styliser notre application et appliquer des classes CSS de manière efficace, ce qui permet un gain de temps considérable.


## Dépendances

Les principales dépendances utilisées dans ce projet sont :

- **react-router-dom** : une bibliothèque de routage pour React. Nous avons utilisé cette dépendance pour gérer la navigation entre les différentes pages de l'application.

- **axios** : une bibliothèque JavaScript pour effectuer des requêtes HTTP. Nous avons utilisé axios pour communiquer avec l'API Spotify afin de récupérer les données des playlists.
  
- **tailwindcss** : un framework CSS. Nous avons utilisé Tailwind CSS pour styliser notre application et appliquer des classes CSS de manière efficace et rapide.

### React Router DOM

React Router DOM est une dépendance qui facilite la gestion de la navigation dans une application React. Nous l'avons utilisée pour créer des routes pour chaque page de l'application, ce qui nous permet de naviguer entre les différentes vues, comme la liste des playlists et les détails d'une playlist sélectionnée.

Voici un exemple d'utilisation de React Router DOM dans notre code :

```tsx
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
//...
  return (
        <BrowserRouter>
            <TokenContext.Provider value={{ token, refreshToken, setToken: setToken, setRefreshToken }}>
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route element={<HomePage/>} path="/"/>
                    </Route>
                    <Route element={<AuthenticationPage/>} path="/login"/>
                    <Route element={<Callback/>} path="/callback">
                    </Route>
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
  )
}
```

### Axios
Axios est une bibliothèque JavaScript qui facilite l'envoi de requêtes HTTP depuis un navigateur ou un serveur Node.js. Dans notre projet, nous l'avons utilisée pour effectuer des requêtes vers l'API Spotify. Nous avons pu ainsi récupérer les données des playlists et les afficher dans notre application.

Voici un exemple d'utilisation d'Axios pour effectuer une requête GET vers l'API Spotify et récupérer les playlists :

```tsx
import axios from "axios";

export default class PlaylistService {
    getPlaylists = async function (token: string) {
        return await axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}
```

### Tailwind CSS
Tailwind CSS est un framework CSS qui facilite la création d'interfaces utilisateur réactives et esthétiques. Nous l'avons utilisé pour styliser notre application en appliquant des classes CSS de manière efficace et rapide.

Voici un exemple d'utilisation de Tailwind CSS pour styliser un composant de notre application que nous utilisons pour afficher nos playlists :

```tsx
export default function CellPlaylistSidebar(index: number, title: string, imgSrc: string) {
    return (
        <li key={index} className='
            text-zinc-300 text-sm flex-col py-2 px-4 
            cursor-pointer hover:bg-zinc-600 rounded-md mt-2'>
                <img src={`${imgSrc}`} alt="" />
                <span>{title}</span>
      </li>
    )
}
```

Voici un exemple de comment nous utilisons ce composant dans notre sidebar afin d'afficher nos playlists:

```tsx
import CellPlaylistSidebar from './CellPlaylistSidebar';
import ProfileComponent from './ProfileComponent';
import {PlaylistModel} from "../../models/PlaylistModel.ts";
import {useContext, useEffect, useState} from "react";
import PlaylistsContext from "../../PlaylistsContext.ts";
import PlaylistRepository from "../../repositories/PlaylistRepository.ts";
import PlaylistService from "../../services/PlaylistService.ts";
import TokenContext from "../../context.tsx";

const PlaylistSidebar = ({ playlists }: { playlists: PlaylistModel[] }) => {

  //...

  return (
    <div className='flex'>
      <div className='w-72 h-full bg-zinc-800 rounded-r-lg'>
        <div className='flex gap-x-4 mx-4 mt-4 items-center pb-4'>
          <img
            src="./src/assets/spotify.png" alt=""
            className='cursor-pointer duration-500 w-10' />
          <h1 className='text-white origin-left font-medium text-2xl '>Spoti-Vite</h1>
        </div>
        {ProfileComponent(currentUser?.display_name ?? "", currentUser?.images[0].url ?? "")}
        <div className='border-b-2 border-zinc-700 mb-4 mx-4'></div>
        <div className='rounded-lg bg-zinc-700 bg-opacity-40 pb-2'>
          <h2 className='
            text-zinc-500 text-lg font-semibold px-2 pt-1'>Bibliothèque</h2>
          <ul>
            {playlists.map((playlist, index) => (
              CellPlaylistSidebar(index, playlist.name, playlist.images[0].url, () => {  //Nous appellons notre composant ici
                setCurrentPlaylist(playlists[index])
              })
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSidebar;
```

## Context
Le **`Context`** est un mécanisme de React qui permet de partager des données entre les composants sans avoir à les transmettre explicitement via les props à travers tous les niveaux de l'arborescence des composants. Il facilite la gestion de l'état global de l'application et permet d'accéder à ces données de manière efficace.

Dans notre projet, par exemple, nous utilisons le contexte pour partager les informations relatives au token d'authentification et au refreshToken avec les composants enfants. Cela nous évite de devoir transmettre ces données via les props à chaque composant qui en aurait besoin.

Voici un exemple d'utilisation du contexte dans notre code :

```tsx
import { useContext, useEffect, useState } from "react";
import TokenContext from "../context.tsx";
import PlaylistRepository from "../repositories/PlaylistRepository.ts";
import PlaylistService from "../services/PlaylistService.ts";
import { PlaylistModel } from "../models/PlaylistModel.ts";

export default function HomePage() {
  const { token, refreshToken } = useContext(TokenContext);
  const playlistRepository: PlaylistRepository = new PlaylistRepository(new PlaylistService());
  const [playlistState, setPlaylists] = useState<PlaylistModel[]>([]);

  useEffect(() => {
    playlistRepository.getPlaylists(token)
      .then((playlists) => {
        setPlaylists(playlists);
      });
  }, []);

  return (
    <div>
      <div>Token: {token}</div>
      <div>Refresh Token: {refreshToken}</div>
      {playlistState.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
```

Dans cet exemple, nous utilisons **`useContext(TokenContext)`** pour accéder aux valeurs **`token`** et **`refreshToken`** stockées dans le contexte. Cela nous permet d'accéder facilement à ces valeurs dans notre composant **`HomePage`** sans avoir à les transmettre via les props.

Voici notre modèle **`TokenContext`**:

```tsx
import {createContext} from "react";
interface TokenModel {
    token: string,
    refreshToken: string
    setToken: (token: string) => void
    setRefreshToken: (refreshToken: string) => void
}

const TokenContext = createContext<TokenModel>({
    token: "",
    refreshToken: "",
    setToken: () => {},
    setRefreshToken: () => {}
});

export default TokenContext;
```

De plus, nous utilisons également un état local **(`useState`)** pour stocker et mettre à jour la liste des playlists. Nous utilisons l'effet **(`useEffect`)** pour appeler la méthode **`playlistRepository.getPlaylists(token)`** et mettre à jour l'état local avec les playlists obtenues.

Le contexte joue un rôle crucial dans notre projet en fournissant les valeurs du token d'authentification et du refreshToken à nos composants enfants via le contexte **`TokenContext`**. Cela nous permet d'accéder à ces valeurs sans avoir à les passer explicitement en tant que props, simplifiant ainsi la gestion de l'état global de l'application.

## Comment exécuter le projet localement

1. Clonez ce dépôt sur votre machine locale en utilisant la commande suivante :
```shell
git clone https://github.com/PierreGourgouillon/spoti-vite.git
   ```
2. Accédez au répertoire du projet :
```shell
cd spoti-vite
```
3. Installez les dépendances en utilisant npm :
```shell
npm install
```
4. Lancez l'application en mode développement :
 ```shell
npm run dev
```
Cela démarrera l'application et vous pourrez y accéder depuis votre navigateur à l'adresse **`http://localhost:5173`**.

## 

N'hésitez pas à explorer le code source pour comprendre comment chaque fonctionnalité est implémentée. Si vous avez des questions, n'hésitez pas à nous contacter.
