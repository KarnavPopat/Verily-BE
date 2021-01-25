import React from 'react'

const PageHeader = () => {
    return React.createElement('section', {className: "section header bread"},
        React.createElement('div', {className: "container"},
            React.createElement('div', {className: "row no-gutters align-items-center"},
                React.createElement('div', {className: "col-md-9"},
                    React.createElement('p', {className: "breadcrumbs"},
                        React.createElement('span', {className: "mr-2"},
                            React.createElement('a', {href: "/index"}, 'Home')),
                        React.createElement('span', {className: "final-link"}, 'About')),
                    React.createElement('h1', {className: "mb-3 page-heading"}, 'About Us'),
                    React.createElement('p', null, 'Read about what makes us who we are')))))
}

export default PageHeader;
