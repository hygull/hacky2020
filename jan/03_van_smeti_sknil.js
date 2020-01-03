function getNavItemsLinks() {
    let navLinks = new Array()

    for(let li of $("nav ul").children) {
        let a = $('a', li)

        if(a)
            navLinks.push(a.href)       
    }

    return navLinks
}

console.log(getNavItemsLinks())
// ["https://www.linkedin.com/feed/", "https://www.linkedin.com/mynetwork/", "https://www.linkedin.com/jobs/", "https://www.linkedin.com/messaging/", "https://www.linkedin.com/notifications/", "https://www.linkedin.com/premium/products/?destRed…%3Dtrue&upsellOrderOrigin=premium_nav_upsell_text"]




/*
<nav data-nav="main" class="display-flex full-height" aria-label="Primary">
    <ul class="nav-main nav-container display-flex full-height">
        <li id="feed-nav-item" class="nav-item nav-item--feed" lang="en">
            <a href="/feed/" data-alias="" data-link-to="feed" data-resource="feed/badge" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link active">
                <span class="nav-item__badge nav-item__badge--doughnut"><span aria-hidden="true" class="nav-item__badge-count">3</span><span class="visually-hidden">3</span></span>
                <span id="feed-tab-icon" class="nav-item__icon" lang="en" role="presentation">
                    <li-icon aria-hidden="true" type="nav-small-home-icon" color="true">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z" class="active-item" style="fill-opacity: 1"></path>
                            <path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" class="inactive-item" style="fill: currentColor"></path>
                        </svg>
                    </li-icon>
                </span>
                <span class="nav-item__title">Home</span>
            </a>
        </li>
        <li id="mynetwork-nav-item" class="nav-item nav-item--mynetwork" lang="en">
            <a href="/mynetwork/" data-alias="relationships" data-link-to="mynetwork" data-resource="voyagerCommunicationsTabBadges" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link">
                <span id="mynetwork-tab-icon" class="nav-item__icon" lang="en" role="presentation">
                    <li-icon aria-hidden="true" type="nav-small-people-icon" color="true">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z" class="active-item" style="fill-opacity: 1"></path>
                            <path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" class="inactive-item" style="fill: currentColor"></path>
                        </svg>
                    </li-icon>
                </span>
                <span class="nav-item__title">My Network</span>
            </a>
        </li>
        <li id="jobs-nav-item" class="nav-item nav-item--jobs" lang="en">
            <a href="/jobs/" data-alias="" data-link-to="jobs" data-resource="" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link">
                <span id="jobs-tab-icon" class="nav-item__icon" lang="en" role="presentation">
                    <li-icon aria-hidden="true" type="nav-small-jobs-icon" color="true">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z" class="active-item" style="fill-opacity: 1"></path>
                            <path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" class="inactive-item" style="fill: currentColor"></path>
                        </svg>
                    </li-icon>
                </span>
                <span class="nav-item__title">Jobs</span>
            </a>
        </li>
        <li id="messaging-nav-item" class="nav-item nav-item--messaging" lang="en">
            <a href="/messaging/" data-alias="" data-link-to="messaging" data-resource="voyagerCommunicationsTabBadges" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link">
                <span id="messaging-tab-icon" class="nav-item__icon" lang="en" role="presentation">
                    <li-icon aria-hidden="true" type="nav-small-messaging-icon" color="true">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z" class="active-item" style="fill-opacity: 1"></path>
                            <path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" class="inactive-item" style="fill: currentColor"></path>
                        </svg>
                    </li-icon>
                </span>
                <span class="nav-item__title">Messaging</span>
            </a>
        </li>
        <li id="notifications-nav-item" class="nav-item nav-item--notifications" lang="en">
            <a href="/notifications/" data-alias="identity" data-link-to="notifications" data-resource="voyagerCommunicationsTabBadges" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link">
                <span id="notifications-tab-icon" class="nav-item__icon" lang="en" role="presentation">
                    <li-icon aria-hidden="true" type="nav-small-notifications-icon" color="true">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.94,14H5.06L5.79,8.44A6.26,6.26,0,0,1,12,3h0a6.26,6.26,0,0,1,6.21,5.44Zm2,5-1.71-4H4.78L3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19Z" class="active-item" style="fill-opacity: 1"></path>
                            <path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" class="inactive-item" style="fill: currentColor"></path>
                        </svg>
                    </li-icon>
                </span>
                <span class="nav-item__title">Notifications</span>
            </a>
            <div id="push-permission-wormhole" class="relative"></div>
        </li>
        <li id="profile-nav-item" class="nav-item nav-item--profile" lang="en">
            <div class="nav-item__content">
                <div id="nav-settings__dropdown" class="dropdown closed ember-view">
                    <button data-control-name="nav.settings" aria-controls="nav-settings__dropdown-options" aria-expanded="false" id="nav-settings__dropdown-trigger" class="t-14 t-black--light t-bold nav-item__link dropdown-trigger ember-view" type="button">
                        <img width="24" src="https://media.licdn.com/dms/image/C4E03AQGNYg3lzeWpLA/profile-displayphoto-shrink_100_100/0?e=1583366400&amp;v=beta&amp;t=gx_mpvKYrQHvQzUW2Uy2SJEOyf8VqyXUCD7zbuY1HVU" height="24" alt="Rishikesh Agrawani" id="ember26" class="nav-item__profile-member-photo nav-item__icon ember-view">
                        <div class="nav-item__title-container">
                            <span class="nav-item__title nav-item__dropdown-trigger--title">Me</span>
                            <li-icon aria-hidden="true" type="caret-filled-down-icon" class="nav-item__dropdown-trigger--icon" size="small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false">
                                    <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                                </svg>
                            </li-icon>
                        </div>
                    </button>
                    <ul id="nav-settings__dropdown-options" style="display: none;" class="dropdown-options nav-settings__dropdown-options ember-view">
                        <!---->
                    </ul>
                </div>
            </div>
        </li>
        <li id="app-launcher-nav-item" class="nav-item nav-item--app-launcher">
            <div class="nav-item__content">
                <div id="ember20" class="ember-view">
                    <button class="nav-item__link nav-panel__trigger " data-control-name="nav.launcher" data-ember-action="" data-ember-action-21="21">
                        <li-icon type="grid-icon" class="nav-item__icon" role="img" aria-label="Work icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-supported-dps="24x24" fill="currentColor" focusable="false">
                                <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
                            </svg>
                        </li-icon>
                        <div class="nav-item__title-container">
                            <span class="nav-item__title nav-item__dropdown-trigger--title">Work</span>
                            <li-icon aria-hidden="true" type="caret-filled-down-icon" class="nav-item__dropdown-trigger--icon" size="small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false">
                                    <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                                </svg>
                            </li-icon>
                        </div>
                    </button>
                    <div id="ember22" class="ember-view">
                        <!---->
                    </div>
                </div>
            </div>
        </li>
        <li id="spotlight-one-nav-item" class="nav-item nav-item--spotlight-one nav-item__spotlight">
            <div class="nav-item__wormhole">
                <div id="ember17" class="nav-item__content t-14 t-black t-normal premium-upsell-link ember-view">
                    <a data-control-name="premium_nav_upsell_text_click" href="/premium/products/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&amp;upsellOrderOrigin=premium_nav_upsell_text" id="ember18" class="link-without-visited-state nav-item__spotlight-upsell  ember-view">
                        Reactivate Premium
                        <!---->
                    </a>
                </div>
            </div>
        </li>
    </ul>
</nav>
*/