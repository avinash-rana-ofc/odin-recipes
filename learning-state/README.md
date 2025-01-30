# React + Vite

Learning State Management in React

We write components in React, A LOT of components, and many times we want them to undergo visual changes as a result of user or computer interactions. For this purpose, a component needs to “remember” things about itself. This is where state comes in. State is a component’s memory.

How does state work in React?

Let’s hit you with some theory.

In React, when a component’s state or props change, the component is destroyed and recreated from scratch. Yes, you heard that right: destroyed. This includes the variables, functions, and React nodes. The entire component is recreated but this time the latest state value will be returned from useState. This process is called rerendering. Rerendering is a key feature of React that enables it to efficiently update the user interface in response to changes in the underlying data.
React reconciliation algorithm

The process of rerendering generates a new virtual DOM (Document Object Model) tree. The virtual DOM is a lightweight representation of the actual DOM that React uses to keep track of the current state of the UI. React then compares the new virtual DOM tree to the previous one and calculates the minimal set of changes needed to update the actual DOM. This is the reconciliation algorithm.
Explaining rerendering with the example above

Whenever setBackgroundColor is called, our App component is rerendered. Essentially, the component is recreated which means the onButtonClick function and our div and buttons are recreated as well. You might wonder, shouldn’t the backgroundColor state be recreated as well? Well, React takes the responsibility of keeping track of the latest state and providing it to the component. The initial state value is only used for the component’s first render and is ignored on subsequent renders.


Hooks

Hooks are functions that let you use React features. All hooks are recognizable by the use prefix. For example, useState is a hook. We’ll use more of these as we get further into the course. For now, remember that hooks have rules that we need to abide by:

    Hooks can only be called from the top level of a functional component.
    Hooks can’t be called from inside loops or conditions.

