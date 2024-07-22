## React

### React Features:

1. `Declarative`: Describes how components look like and how thet work using `JSX` Syntax.
2. React is abstraction away from `DOM` , we never touch the DOM, as it bypasses React's virtual DOM and can lead to unexpected behavior. Additionally, using this approach can result in inefficient rendering and make it harder to manage component state effectively.
3. `JSX` is a combination of HTML, CSS, JavaScript which also has other components.
4. React is `state drive`. UI is based on state. As state changes manually the UI is rendered automatically. That is why it is mentioned as React. `UI reacts to state`.
5. Bigger community, more documentation, more libraries, bigger stackoverflow topics.

### Two Options to Create React App

**1. create-react-app:**

- Everything is already configured: eslint, prettier, jest etc.
- Uses slow and outdated technologies(i.e. webpack).
- Not recommended for real world application as not very innovation is happening.
- For learning it is still fine.

**2. Vite**

- Contains template for setting up react apps.
- Need to manually setup eslint(and others).
- Used for modern real world projects.
- Bundeling is fast and refresh is fast after making changes.

### How App starts:

1. `index.js` is the first file as webpack looks for the exact file name.
2. Create `root` by `ReactDOM.createRoot(elemntRoot)`.
3. Then render the component in root created.
4. Strict Mode can be activated by enclosing `<App />` in `<React.StrictMode>` tags.
5. It just ensures the component rendering happens twice to avoid any bugs and no outdated react apis are used.
