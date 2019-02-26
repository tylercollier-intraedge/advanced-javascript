import React, { Component } from 'react'
import axios from 'axios'

export class RenderProps extends Component {
  render() {
    return (
      <div>
        <h2>Render Props</h2>

        <h3>Lesson</h3>
        <div>
          <p>Components can accept functions as props. You can use those props to help in the rendering, or even do all of the rendering.
          </p>
          <p>Render props serve the same function as Higher Order Components (HOCs), namely to share functionality between components. One component can make use of another component. They are most commonly used when you want another component to do some work (fetch data, etc) and tell you when it&#39;s done, allowing you to decide how to render that data.</p>
        </div>

        <h3>Example: RenderProp1</h3>
        <RenderProp1 render={() => <div>Here&#39;s what to render!</div>} />
        
        <h3>Challenge 1</h3>
        <div className="note">Make your life easy and write all your components in this file.</div>
        <div>Write a <em>stateless</em> component named RenderProp2. Make it behave like RenderProp1.</div>
        <RenderProp2 render={() => <div>Here&#39;s what to render!</div>} />

        <h3>Challenge 2</h3>
        <div>Write a stateless component named RenderProp2b. Make it work with the following line (see code; un-comment it).</div>
        <RenderProp2b render={value => {
          return <div>The value passed to the render prop is {value}</div>
        }} />
        
        <h3>Did you know?</h3>
        <div>React Router allows for a <code>render</code> prop instead of a <code>component</code> prop. It&#39;s true. Go check <code>App.js</code> where it renders RenderProp.</div>
        
        <h3>Lesson</h3>
        <div>The prop <code>render</code> is not special. You can use e.g. <code>getOutput</code>, or any name.</div>
        
        <h3>Example: RenderProp3</h3>
        <RenderProp3 getOutput={() => <div>Here&#39;s what to output!</div>} />

        <h3>Challenge 3</h3>
        <div>Write a component named RenderProp3Challenge that accepts renderA and renderB props. Render the concatenation of their return values.</div>
        <RenderProp3Challenge
          renderA={() => <span>JSX from renderA</span>}
          renderB={() => <span>JSX from renderB</span>}
        />
        
        <h3>Did you know?</h3>
        <div>Anything you put in the tag body automatically gets passed as the <code>children</code> prop. This has nothing to do specifically with render props, but it&#39;s important to know about <code>children</code>.</div>
        <h3>Example: RenderProp4</h3>
        <RenderProp4>
          <div>This is element 0 of the children prop</div>
          <div>This is element 1 of the children prop</div>
        </RenderProp4>

        <h3>Challenge 4</h3>
        <div>Write a component named RenderProp4Challenge that uses the <code>children</code> prop as a render prop, and use that component here.</div>
        <RenderProp4Challenge>
          {() => {
            return <div>This div is from RenderProp4Challenge&#39;s children render function</div>
          }}
        </RenderProp4Challenge>
        
        <h3>Challenge 5</h3>
        <div>Write a component named RenderProp5Challenge that passes arguments of 7 and &#39;hello&#39; to its render prop. Use that component here. Display the params however you want.</div>
        <RenderProp5Challenge render={(param1, param2) => <div>
          In RenderProp5Challenge, you gave me params of {param1} and {param2}
        </div>} />

        <h3>Lesson</h3>
        <div>Components that take render props can have state like any other component.</div>

        <h3>Challenge 6</h3>
        <div>Write a component named RenderProp6Challenge that accepts a prop of <code>startNum</code> and any render prop. Call the render prop with <code>startNum</code>. Two seconds after the component loads, it should render, passing <code>startNum + 3</code>.</div>
        <RenderProp6Challenge startNum={7} render={num => <div>
          RenderProp6Challenge: num is {num}
        </div>} />

        <h3>Challenge 7</h3>
        <div>
          <p>Write a component named DataFetcher that accepts a url prop and a render prop, which should accept 3 parameters: isLoading, data, and error. DataFetcher should have state, and use axios in its <code>componentDidMount</code> to fetch the given URL.</p>
          <p>Use the DataFetcher component with the URL <code>https://jsonplaceholder.typicode.com/users/1</code>. While loading, display the message &#39;Loading...&#39;. When data is available, render <code>Name: {'{'}data.name{'}'}</code>.</p>
          <p>Then use DataFetcher a second time with an invalid URL (such as <code>https://jsonplaceholder.typicode.com/users/asdf</code>). Choosing a loading message of your choice. When an error occurs, display <code>Any expected error occurred trying to load the data.</code></p>
          <strong>Good:</strong> <DataFetcher
            url="https://jsonplaceholder.typicode.com/users/1"
            render={data => <div>Name: {data.name}</div>}
          />
          <strong>Error:</strong> <DataFetcher
            url="https://jsonplaceholder.typicode.com/users/asdf"
            render={data => <div>Name: {data.name}</div>}
          />
        </div>

        <h3>Lesson</h3>
        <div>What did we learn with DataFetcher and render props? Similar to <code>array.map</code>, we&#39;ve got separation of concerns. One component can be responsible for the generic idea of fetching data, and another can be responsible for render that data specifically. This is analogous to how array.map is responsible for the generic idea of creating a new array, iterating over an array and calling the callback every time and passing each value, and the callback is only responsible for how to transform the element.</div>
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

function RenderProp2(props) {
  return props.render()
}

function RenderProp2b(props) {
  return props.render('test')
}

class RenderProp3 extends Component {
  render() {
    return this.props.getOutput()
  }
}

function RenderProp3Challenge(props) {
  // One solution
  return <div>
    {props.renderA()}{props.renderB()}
  </div>

  // Another solution
  // return [props.renderA(), props.renderB()]
}

function RenderProp4Challenge(props) {
  return props.children()
}

class RenderProp4 extends Component {
  render() {
    return this.props.children
  }
}

function RenderProp5Challenge(props) {
  return props.render(7, 'hello')
}

class RenderProp6Challenge extends Component {
  constructor(props) {
    super()
    this.state = {
      num: props.startNum
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ num: this.state.num + 3 }), 3000)
  }

  render() {
    return this.props.render(this.state.num)
  }
}

class DataFetcher extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      data: null,
      error: null
    }
  }

  componentDidMount = () => {
    axios.get(this.props.url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }))
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    const { isLoading, data } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    } else if (data) {
      return this.props.render(data)
    } else {
      return 'An unexpected error occurred'
    }
  }
}