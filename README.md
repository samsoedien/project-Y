# project-Y

MERN stack project with shopping app functionality

TODO: (backend)

- Implement dotenv
- Add status codes for each response
- End each controller exports with return
- Conduct unit testing
- Look into express validator differences between check and body methods
- Decide on seperating responses for validation specific errors
- Flash validation form errors to frontend
- Send email for confirming registration
- Create stronger encrypted secret keys

TODO: (frontend)

- Rewrite styling to SASS/SCSS
- Write media queries
- Add favicon
- Implement media queries for responsiveness
- Rewrite token configuration in App.jsx in redux actions / reducers
- Optimise errors and alerts actions
- Destructurize formdata in register / login forms
- Seperate presentational components and container components
- Rewrite class based components to functional using React hooks
- Rewrite CreateProfile component to have logic for both create and edit functionality using ternary operator
- Check for consistency in ProfileList, PostFeed and BlogList components
- When logging in on a specific page, redirect where the user was originally
- Rewrite containers with mapDispatchToProps?

- Design Language System (DLS):
  - Setup a Style Guide in Readme
  - Create a Pattern Library with code examples, guidelines and use cases
  - Find a structure / workflow that allows for modularity
  - Emphasize on scalability
  - Use theming for spacing, palletes and typography
  - Link DLS to in Adobe XD built components

FIXME:

- App starts on logged in dashboard while user is not authenticated
- App does not fill form fields correctly in edit profile

MISC:

- Divide Front end & back end into seperate repositories?
- Revise linting rules
- Revise naming conventions
- Change License
- Structure data collections in Mongo Atlas
- Learn React Native and connect server to mobile apps
