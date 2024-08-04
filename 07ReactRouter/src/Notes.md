<outlet/> in layout file from react-router-dom

<header> and <footer> will remain constant and you can do nesting in <outlet>

How we did nesting ?

we went to main.jsx and we did nesting.
See... we did connect layout component in the top level so that we can nested furthur components.
And we enable router using this: <RouterProvider router={router} /> in creatRoot.
You have to use one hook "useParams()" for extracting in every component.

Then we just did an API call in github.jsx
