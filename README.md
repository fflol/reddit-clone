# Reddit Clone

  

This is an ongoing practice project.

  

It's deployed [here](https://fflol.github.io/reddit-clone/).

  

  

## Tech stack
  

* React, Redux, Styled-components


* Bootstrap for dropdowns & popups > too heavy, should pick another library or write by myself

  
* Snoowrap for easy-access Reddit API

  
* infinite scroll



## Folder structure:

    .
    ├── > node_modules
    ├── > public    
    │       ├── > favicon             
    │       ├── index.html              
    │       └── manifest.json                              
    ├── > src
    │       ├── > actions                           # Redux action creators
    │       │        ├── actions.js                 
    │       │        └── snoowrapActions.js         # async snoowrap action creators
    │       ├── > components                        # React components
    │       │        ├── > header                   
    │       │        ├── > posts                    
    │       │        ├── > side-menu                
    │       │        ├── customComponents.js        # toogle and dropdowns 
    │       │        └── customComponentsStyle.js   
    │       ├── > img                               
    │       ├── > reducers                          # Redux reducers
    │       ├── > store                             # Redux store
    │       ├── > styles                            # styled components global files
    │       │        └── flex.js                    # customized css flex control
    │       │        └── minxins.js                 # colours, font sizes etc
    │       │        └── reset.js                   # css reset
    │       │        └── responsive.js              # customized responsive control
    │       │        └── sharedComponents.js        # customized <div> containers, not too useful
    │       ├── App.js                              # putting components together
    │       ├── App.test.js                 
    │       ├── index.js                            # renders App into index.html
    │       ├── oauthInfo.js                        # soonwrap auth :sweat_smile:
    │       ├── serviceWorker.js
    │       └── supportive.js                       # supportive functions
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

  
  

## Functionality

  

* Fetch feeds from Reddit

  

* A card view and a classic view mode

  

* Basic search

  

## app logic

states in the Redux store:

```
* fetching,             #bool
* subreddit,            #Reddit r/hedgehog 
* sort,                 #Reddit sort by 'hot'/'best'/'new' etc
* view,                 #Reddit view styles, i.e. 'card'/'classic'/'compact'
* page,                 #load how many pages on the screen
* posts,                #fetched posts using soonwrap API
* trendingCommunities   #trending communities on the right side
```

Most of the logics are in **Posts** component.

```
- a: when **Posts** first loaded, reset() fires, sets page number to 1,
  if **subreddit** and **sort** changes, reset() also fires

- b: when any of **subreddit**/**sort**/**page** changes, causes the app to fetch posts from Reddit server and overwrite the **posts** state

- props changed causes component to re-render, infinite scroll displays new **posts**

- if infinite scroll increases **page** number, because of **(b)**, re-fetch, re-render

- view styles changes based on the **view** state
```

  

## things to be done

  

* Compact view mode

  

* Login / Logout

  

* Night view theme
  
  

* Refine the search function



* other stuff ...


## Authors

* **Kay Lee** 
> just me

## License

Not licensed, totally illegal. 