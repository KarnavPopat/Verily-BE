const PageHeader = (props) => {
    return e('section', {className: 'section header bread'},  
        e('div', {className: 'container'}, 
            e('div', {className: 'row g-0 align-items-center'}, 
                e('div', {className: 'col-md-9'}, 
                    e('p', {className: 'breadcrumbs'}, 
                        e('a', {href: '/index'}, 
                            e('span', null, 'Home')), 
                        e('span', null, `${props.pagebreadcrumb}` )), 
                    e('h1', {className: 'mb-3 page-heading'}, `${props.pageheading}` ), 
                    e('p', null, `${props.pagedescription}` )))))
}

ReactDOM.render(PageHeader({pagebreadcrumb: 'About', pageheading: 'About Us', pagedescription: 'Read about what makes us who we are.'}), 
    document.querySelector('#header-target'));
