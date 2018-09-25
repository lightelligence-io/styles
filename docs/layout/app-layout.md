# App Layout


<div class="olt-color--as-background-primary-07" style="border: solid 2px #EEE; border-radius: 2px; position: relative;">
    <navbar :is-large="false" />
    <main class="olt-app-content">
        <div class="olt-row">
            <div class="olt-col-mobile-4 olt-col-tablet-8 olt-col-desktop-12 olt-spacing--s-bottom">
                <div class="olt-banner-notification">
                    <div class="olt-banner-notification__content">
                        <i class="material-icons">error_outline</i>
                        Oh snap!
                    </div>
                </div>
            </div>
            <div class="olt-col-mobile-4 olt-col-tablet-8 olt-col-desktop-6">
                <div class="olt-card olt-card--small">
                    <div class="olt-card__header">
                        <span class="olt-card__headline">
                            Devices
                        </span>
                    </div>
                    <div class="olt-card__actions">
                        <i class="material-icons">chevron_right</i>
                    </div>
                </div>
            </div>
            <div class="olt-col-mobile-4 olt-col-tablet-8 olt-col-desktop-6">
                <div class="olt-card olt-card--primary-01 olt-card--small">
                    <div class="olt-card__header">
                        <span class="olt-card__headline">
                            My Applications
                        </span>
                    </div>
                    <div class="olt-card__actions">
                        <i class="material-icons">chevron_right</i>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="olt-footer">
        <div class="olt-footer__left">
            <a href="#" class="olt-footer__item">Contact</a>
            <a href="#" class="olt-footer__item">Terms of Use</a>
            <a href="#" class="olt-footer__item">Privacy Policy</a>
        </div>
        <div class="olt-footer__center">
            <span class="olt-footer__item">© 2018 App-Developer-XY GmbH</span>
        </div>
        <div class="olt-footer__right">
            <span class="olt-footer__item">App-Developer-XY</span>
        </div>
    </div>
</div>

````html
<div class="olt-navbar">
    <div class="olt-navbar__left hide-for-mobile-only">
        <div class="olt-navbar__item">
            <div class="olt-navbar__item-body">
                <img src="../../source/assets/logo_lightelligence.svg" />
            </div>
        </div>
        <div class="olt-navbar__item
            olt-navbar__item--is-button"
            >
            <div class="olt-navbar__item-body">
                Personal Dashboard
            </div>
        </div>
    </div>
    <div class="olt-navbar__left show-for-mobile-only">
        <div class="olt-navbar__item
            olt-navbar__item--is-button">
            <div class="olt-navbar__item-body">
                <i class="material-icons">'menu'</i>
            </div>
        </div>
    </div>
    <div class="olt-navbar__center show-for-mobile-only">
        <div class="olt-navbar__item">
            <div class="olt-navbar__item-body">
                <img src="../../source/assets/logo_lightelligence.svg" />
            </div>
        </div>
    </div>
    <div class="olt-navbar__right">
        <div class="olt-navbar__item
            olt-navbar__item--is-button">
            <div class="olt-navbar__item-body">
                <i class="olt-user-avatar">W</i>
                <span class="olt-navbar__item-icon-label 
                    hide-for-mobile-only">
                    Profile
                </span>
            </div>
        </div>
        <div class="olt-navbar__item 
            olt-navbar__item--is-button 
                hide-for-mobile-only">
            <div class="olt-navbar__item-body">
            Logout
            </div>
        </div>
    </div>
</div>
<main class="olt-app-content">
    <div class="olt-row">
        <div class="olt-col-mobile-4 olt-col-tablet-8 olt-col-desktop-12 olt-spacing--s-bottom">
            <div class="olt-banner-notification">
                <div class="olt-banner-notification--content">
                    <i class="material-icons">error_outline</i>
                    Oh snap!
                </div>
            </div>
        </div>
        <div class="olt-col-mobile-4 olt-col-tablet-8 olt-col-desktop-6">
            <div class="olt-card olt-card--small">
                <div class="olt-card--header">
                    <span class="olt-card--headline">
                        Devices
                    </span>
                </div>
                <div class="olt-card--actions">
                    <i class="material-icons">chevron_right</i>
                </div>
            </div>
        </div>
        <div class="olt-col-mobile-4 olt-col-tablet-8 olt-col-desktop-6">
            <div class="olt-card olt-card--primary-01 olt-card--small">
                <div class="olt-card--header">
                    <span class="olt-card--headline">
                        My Applications
                    </span>
                </div>
                <div class="olt-card--actions">
                    <i class="material-icons">chevron_right</i>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="olt-footer">
    <div class="olt-footer__left">
        <a href="#" class="olt-footer__item">Contact</a>
        <a href="#" class="olt-footer__item">Terms of Use</a>
        <a href="#" class="olt-footer__item">Privacy Policy</a>
    </div>
    <div class="olt-footer__center">
        <span class="olt-footer__item">© 2018 App-Developer-XY GmbH</span>
    </div>
    <div class="olt-footer__right">
        <span class="olt-footer__item">App-Developer-XY</span>
    </div>
</div>
````