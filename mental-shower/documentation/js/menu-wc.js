'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mental-shower documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-21238760023a303a19b7ec4d9686da00"' : 'data-target="#xs-components-links-module-AppModule-21238760023a303a19b7ec4d9686da00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-21238760023a303a19b7ec4d9686da00"' :
                                            'id="xs-components-links-module-AppModule-21238760023a303a19b7ec4d9686da00"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link">ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupInfoPagePageModule.html" data-type="entity-link">GroupInfoPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GroupInfoPagePageModule-b0e9a7e2ce76ff4e5bbb62a888d72e16"' : 'data-target="#xs-components-links-module-GroupInfoPagePageModule-b0e9a7e2ce76ff4e5bbb62a888d72e16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupInfoPagePageModule-b0e9a7e2ce76ff4e5bbb62a888d72e16"' :
                                            'id="xs-components-links-module-GroupInfoPagePageModule-b0e9a7e2ce76ff4e5bbb62a888d72e16"' }>
                                            <li class="link">
                                                <a href="components/GroupInfoPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupInfoPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupInfoPagePageRoutingModule.html" data-type="entity-link">GroupInfoPagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPagePageModule.html" data-type="entity-link">LoginPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPagePageModule-0ca61973199638d2ef986fd75a885008"' : 'data-target="#xs-components-links-module-LoginPagePageModule-0ca61973199638d2ef986fd75a885008"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPagePageModule-0ca61973199638d2ef986fd75a885008"' :
                                            'id="xs-components-links-module-LoginPagePageModule-0ca61973199638d2ef986fd75a885008"' }>
                                            <li class="link">
                                                <a href="components/LoginPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPagePageRoutingModule.html" data-type="entity-link">LoginPagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageModule.html" data-type="entity-link">SignupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupPageModule-22cccb796818abebfc4d1bb67467fe9c"' : 'data-target="#xs-components-links-module-SignupPageModule-22cccb796818abebfc4d1bb67467fe9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupPageModule-22cccb796818abebfc4d1bb67467fe9c"' :
                                            'id="xs-components-links-module-SignupPageModule-22cccb796818abebfc4d1bb67467fe9c"' }>
                                            <li class="link">
                                                <a href="components/SignupPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageRoutingModule.html" data-type="entity-link">SignupPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' : 'data-target="#xs-components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' :
                                            'id="xs-components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link">Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' : 'data-target="#xs-components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' :
                                            'id="xs-components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link">Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-8b875b7b4cfb75d473dbb8b9dfe77ba5"' : 'data-target="#xs-components-links-module-Tab3PageModule-8b875b7b4cfb75d473dbb8b9dfe77ba5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-8b875b7b4cfb75d473dbb8b9dfe77ba5"' :
                                            'id="xs-components-links-module-Tab3PageModule-8b875b7b4cfb75d473dbb8b9dfe77ba5"' }>
                                            <li class="link">
                                                <a href="components/ClassroomCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClassroomCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link">Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab4PageModule.html" data-type="entity-link">Tab4PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab4PageModule-43997b3aabe50ac86da06f475b9713c3"' : 'data-target="#xs-components-links-module-Tab4PageModule-43997b3aabe50ac86da06f475b9713c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab4PageModule-43997b3aabe50ac86da06f475b9713c3"' :
                                            'id="xs-components-links-module-Tab4PageModule-43997b3aabe50ac86da06f475b9713c3"' }>
                                            <li class="link">
                                                <a href="components/Tab4Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab4Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab4PageRoutingModule.html" data-type="entity-link">Tab4PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab5PageModule.html" data-type="entity-link">Tab5PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab5PageModule-655cc8851b0e238444e1fa99312cfcc9"' : 'data-target="#xs-components-links-module-Tab5PageModule-655cc8851b0e238444e1fa99312cfcc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab5PageModule-655cc8851b0e238444e1fa99312cfcc9"' :
                                            'id="xs-components-links-module-Tab5PageModule-655cc8851b0e238444e1fa99312cfcc9"' }>
                                            <li class="link">
                                                <a href="components/Tab5Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab5Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab5PageRoutingModule.html" data-type="entity-link">Tab5PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' : 'data-target="#xs-components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' :
                                            'id="xs-components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ZonesPageModule.html" data-type="entity-link">ZonesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ZonesPageModule-85daabaec3f92a4cf8fd8ea8caa7b54f"' : 'data-target="#xs-components-links-module-ZonesPageModule-85daabaec3f92a4cf8fd8ea8caa7b54f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ZonesPageModule-85daabaec3f92a4cf8fd8ea8caa7b54f"' :
                                            'id="xs-components-links-module-ZonesPageModule-85daabaec3f92a4cf8fd8ea8caa7b54f"' }>
                                            <li class="link">
                                                <a href="components/ZoneTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZoneTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ZonesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZonesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZonesPageRoutingModule.html" data-type="entity-link">ZonesPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/GroupInfoComponent.html" data-type="entity-link">GroupInfoComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Classroom.html" data-type="entity-link">Classroom</a>
                            </li>
                            <li class="link">
                                <a href="classes/Preference.html" data-type="entity-link">Preference</a>
                            </li>
                            <li class="link">
                                <a href="classes/Student.html" data-type="entity-link">Student</a>
                            </li>
                            <li class="link">
                                <a href="classes/Zone.html" data-type="entity-link">Zone</a>
                            </li>
                            <li class="link">
                                <a href="classes/ZoneTable.html" data-type="entity-link">ZoneTable</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link">FirebaseService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/facebookPicture.html" data-type="entity-link">facebookPicture</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/facebookUser.html" data-type="entity-link">facebookUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});