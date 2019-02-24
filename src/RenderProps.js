import React, { Component } from 'react'

export class RenderProps extends Component {
  render() {
    return (
      <div>
        <h2>Render Props</h2>

        <h3>Lesson</h3>
        <div>Components can accept functions as props. You can use those props to help in the rendering, or even do all of the rendering.</div>

        <h3>Example: RenderProp1</h3>
        <RenderProp1 render={() => <div>Here's what to render!</div>} />
        
        <h3>Challenge 1</h3>
        <div>Write a <em>stateless</em> component named RenderProp2. Make it behave like RenderProp1.</div>

        <h3>Challenge 2</h3>
        <div>Write a stateless component named RenderProp2b. Make it work with the following line (see code; un-comment it).</div>
        {/* <RenderProp2b render={value => {
          return <div>The value passed to the render prop is {value}</div>
        }} */}
        
        <h3>Did you know?</h3>
        <div>React Router allows for a <code>render</code> prop instead of a <code>component</code> prop. It's true. Go check <code>App.js</code> where it renders RenderProp.</div>
        
        <h3>Lesson</h3>
        <div>The prop <code>render</code> is not special. You can use e.g. <code>getOutput</code>, or any name.</div>
        
        <h3>Example: RenderProp3</h3>
        <RenderProp3 getOutput={() => <div>Here's what to output!</div>} />

        <h3>Challenge 3</h3>
        <div>Write a component that accepts renderA and renderB props. Render the concatenation of their return values.</div>
        
        <h3>Did you know?</h3>
        <div>Anything you put in the tag automatically gets passed as the <code>children</code> prop.</div>
        <h3>Example: RenderProp4</h3>
        <RenderProp4>
          <div>This is element 0 of the children prop</div>
          <div>This is element 1 of the children prop</div>
        </RenderProp4>

        <h3>Challenge 4</h3>
        <div>Write a component that uses the <code>children</code> prop as a render prop, and use that component here.</div>
        
      </div>
    )
  }
}

export default RenderProps

class RenderProp1 extends Component {
  render() {
    return this.props.render()
  }
}

class RenderProp3 extends Component {
  render() {
    return this.props.getOutput()
  }
}

class RenderProp4 extends Component {
  render() {
    return this.props.children
  }
}
