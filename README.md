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

Voici un exemple d'utilisation de Tailwind CSS pour styliser un composant de notre application :

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
Cela démarrera l'application et vous pourrez y accéder depuis votre navigateur à l'adresse http://localhost:5173.
