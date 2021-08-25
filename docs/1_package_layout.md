# 2 React Package Layout

## Package Descriptions

1. `/assets`

* Semua assets static disimpan disini. sejumlah assets di register dan di export dari `/index.js`
* selain itu, semua assets akan dapat diakses dan di import dari `/assets`
* dapat meng include secara tidak terbatas terhadap images, logos, vector icons, fonts, dll.


2. `/components`

* Hanya components yang di sharing terhadap components lain yang biasa digunakan
* semua components didaftarkan dan di export di  `/index.js` untuk setiap akses poin.


3. `/config`

* semua configuration aplikasi disimpan di dalam path ini 
* contohnya seperti date format, default language, sejumlah master data set atau semacam helper lainnya.

4. `/navigation`

* ini untuk semua routing logic ada disini.
* lib yang digunakan dalam aplikasi yaitu `react-router-dom` untuk routing implementasi nya.
* ada 2 tipe public & private, yang mana kalau private itu membutuhkan authentication.
* `RouterConfig.js` tempat dari semua route yang disimpan dalam  file.
* `PrivatRoute.js` adalah untuk mengecek user authentication untuk secure/private route
* `/components` tempat untuk spesifik komponen navigasi seperti header navbar, sidebar, side navbar, like so.


5. `/pages`

* semua tipe pages ada disini contoh nya , `Home`, `Page1` and `Page2` adalah 3 tipe berbeda dalam aplikasi.
* Each screen consists of an “index.js” file which exports the screen’s container as default module which makes the screen available as a functional component.
* Each page will have a “components” dir. This will hold all the components that are required by only this page.
* As a general rule, if a module (a utility, component, etc.) is only used within another module, then I want it nested in the directory structure as shown above.
* Home page consists of “Authentication”, “Dashboard” & “LanguageSelection” components that are nested within.
* “CardLayout.js” is a layout specific component and used only in Home.




6. `/redux`

* It holds all the redux resources at one place.
* This includes action creators, reducers and a redux store of our app.
* CONSTANTS.js has all the action types.
* Initial state of the app is divided based on features and thus corresponding reducers and actions are modularised.
* “/actions” dir consists of all the action files. Each action file includes feature based action-creators. As the name suggests, appActions will have app config based actions and userActions will have all user state related actions.
* “/reducer” dir follows the same practice like actions. reducer reduces all the actions and applies corresponding changes to store. These reducers are later merged into a root-reducer redux’s combineReducers function.
* “/store.js” is the central state of the application. This incorporates all the mapping between reducer, store and middle-wares if any.
* We have a redux-thunk middleware in our app for enabling asynchronous dispatching of actions.
* Configuration for enabling dev tools for redux is done in store.js.
(More on redux, react-redux, redux-thunk implementation in next part “Architecture Part-2: Features [Router + Redux + MUI + I18n + API]”)


7. `/services`

* Services are to manage all api requests. You can see them as a bridge or an adapter between the database server APIs and the view layer (pages and components) of our application.
* It will take care of all the network calls of our app.
* All data requests are defined here, and response data is transformed and served. In some cases it can also be saved in the redux store.
* The pages and components may dispatch actions, read the store and update themselves based on the data changes. They may access the services directly if it doesn’t need to be added to the redux store.
* Actions will use services for backend connectivity. Thunk is a redux middleware used to handle asynchronous actions and side-effects.
* In our app, all firebase config and constants reside in “firebase.js”. Authentication logic resides in “firebaseAuthentication.js” & all methods to query firestore data reside in “index.js”.

8. `/styles`

* This module holds our application-level styles.
* It can include theme definition (font, colours, typography) of the app UI, and global or commonly used styles.
* Material UI’s Theme is defined here and it can have global styles also exported as a part of the theme object as shown below.
* It can then be referenced in individual components using mui’s theme object.

9. `/utils`

All the utility/helper methods, validations, etc that can be shared across our entire project are added here.


## Reference
