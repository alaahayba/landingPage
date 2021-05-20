/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let dynamicData = [
    {
        id: "section1",
        title: "section one",
        head: 'Section 1',
        "data-nav": "Section 1",
        class: "your-active-class",
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']

    },
    {
        id: "section2",
        title: "section two",
        head: 'Section 2',
        "data-nav": "Section 2",
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']

    },
    {
        id: "section3",
        title: "section three",
        head: 'Section 3',
        "data-nav": "Section 3",
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']

    },
    {
        id: "section4",
        title: "section four",
        head: 'Section 4',
        "data-nav": "Section 4",
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']
    }
];
const $root = $('html, body');
let menu, main;
const activeClass = "your-active-class";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport
function sectionDeactivate() {
    let activesection = document.getElementsByClassName(activeClass);
    activesection[0] && activesection[0].classList.remove(activeClass);
}

function sectionDeactivateById(elementId) {
    let targertSection = document.getElementById(elementId);
    targertSection && targertSection.classList.remove(activeClass);

}

// Set sections as active
function sectionActivate(elementId) {
    let targertSection = document.querySelector(elementId);
    targertSection && targertSection.classList.add(activeClass);
}
// build the nav

(function (window, document, undefined) {
    // code that should be taken care of right away
    window.onload = init;

    // Build menu 
    function buildmenuItem(data) {
        let li = document.createElement('li');     // create li element.'
        let a = document.createElement('a');
        a.classList.add("menu__link")
        a.href = "#" + data.id;
        a.innerText = data.title;
        li.appendChild(a);
        menu.appendChild(li);
    }

    function buildContent(data) {
        let section = document.createElement('section');
        data.class && section.classList.add(data.class);
        section.setAttribute("id", data.id);
        section.setAttribute("data-nav", data['data-nav']);

        let div = document.createElement('div');
        div.classList.add("landing__container")
        let h2 = document.createElement('h2')
        h2.textContent = data.head;
        div.appendChild(h2);

        //loop on content
        for (let parag in data.content) {
            let p = document.createElement('p');
            p.textContent = data.content[parag];
            div.appendChild(p)
        }
        section.appendChild(div);
        main.appendChild(section);
    }

    function renderData() {
        for (let data of dynamicData) {
            buildmenuItem(data);
            buildContent(data);
        }
    }

    function init() {
        menu = document.getElementById("navbar__list");
        main = document.getElementsByTagName('main')[0];
        renderData();
        $('a[href*=\\#]').on('click', function (event) {
            event.preventDefault();
            sectionDeactivate()
            smoothScrollingTo(this.hash);
        });

        $(document).ready(function () {
            smoothScrollingTo(location.hash);
            $(document).on("scroll", onScroll);
        });

    }

})(window, document, undefined);

/**
 * End Main Functions
 * Begin Events
 *
*/


function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('section').each(function () {
        var refElement = $(this);
        if (Math.floor(refElement.position().top) <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos) {
            sectionActivate(`#` + this.id)
        }
        else sectionDeactivateById(this.id)
    });
}

// Scroll to anchor ID using scrollTO event
function smoothScrollingTo(target) {
    if (!target) return
    sectionActivate(target)
    $root.animate({ scrollTop: $(target).offset().top }, 700);
}



