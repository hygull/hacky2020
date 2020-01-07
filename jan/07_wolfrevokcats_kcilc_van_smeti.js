function activateNavItem(name) {
    let navItems = {
        'achievements': '.achievements-button-item a',
        'inbox': ".inbox-button-item a" ,
        'review': '.review-button-item a',
        'help': '.help-button-item a',
        'site_switch': '.site-switcher-item a'
        'profile': '.-item a img' 
    }

    if(navItems[name]) {
        $(navItems[name]).click()
    }
}

// Activate `Profile View` nav item
activateNavItem('profile')

// Activate `Inbox` nav item
activateNavItem('inbox')

// Activate `Achievements` nav item
activateNavItem('achievements')

// Activate `Review` nav item
activateNavItem('review')

// Activate `Help` nav item
activateNavItem('help')

// Activate `Site swicther` nav item
activateNavItem('site_switch')
