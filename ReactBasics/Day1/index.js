let element =
  React.createElement(
    // The first argument is the element's `type`
    'a',

    // The second argument is the element's `props`
    { href: 'https://xkcd.com/222/' },

    // Any further arguments, if given, are merged into to
    // `props` under the name `children`.
    React.createElement(
      'img',
      {
        src: "https://imgs.xkcd.com/comics/random_number.png",
        alt: "RFC 1149.5 specifies 4 as the standard IEEE-vetted random number.",
      }
    ),
    React.createElement(
      'span',
      null,
      'By Randall Munroe',
    )
  )

// Try logging different parts of the `element` object
console.log(element.props.children[0].type)
console.log(element.props.children[1].props.children)

ReactDOM.render(
  element,
  document.getElementById('root')
)