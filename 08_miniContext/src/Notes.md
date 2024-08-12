Prop drilling

for optimizing this we need Context API

We use Redux for this also that is state management

React-Redux and Redux-toolkit

---

---

1st we ceated userContext.js file since all the work will happen in JS

---

---

import React from "react";

const userContext = React.createContext()

export default userContext;

then we need a wrapper like this <></>

we do like this

<userContext>
    <login>
        <card>
            <data>
                
            </data>
        </card>
    </login>

</userContext>

---

---

2nd now the context will give you a provider
Every context (like userContext) is a provider that provide a variable

create a provider file, here userContextProvider.jsx ......see it is a jsx file

take a children as a parameter. it's only use is that anyhting is coming (like card or dashboard) give as it is

for accessing the data you need a property i.e userContext.Provider
then add value for accessing

---

---

3rd import this <userContextProvider> in App.jsx

---

Next create two components login and profile
There use 'useContext'
