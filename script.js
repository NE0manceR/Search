let filter = document.querySelector('.filter-wrap')
let dropDownFilter = document.querySelector('.dropdown-filter')
let checkStatus = true
let filterText = document.querySelector(".filter-style ")
let filterItems = document.querySelectorAll(".filter-item")
let searchWrap = document.querySelector('.wrap')
let searchInput = document.querySelector('.search')
let body = document.querySelector('body')
let searchResult = document.querySelector('.search-result')
let serchIcon = document.querySelector(".search-icon")
let helpSearch = document.querySelectorAll(".help-search")
let resultText = document.querySelector(".search-result-text")
let testSearch = ["folder", "test-folder", "my-object", ]
let userInputValue = ""


window.addEventListener("click", (event) => {


    if (event.target == body) {

        dropDownFilter.style.opacity = "0"

        setTimeout(() => {
            dropDownFilter.style.display = "none"
        }, 200)

        checkStatus = true
        searchWrap.style.border = "1px solid #CCCCCC"
        searchInput.value = ""
        searchResult.style.opacity = "0"
        serchIcon.src = "icons/search-icon.svg"

        setTimeout(() => {
            searchResult.style.display = "none"
        }, 200)

        resultText.style.opacity = "0"

        setTimeout(() => {
            resultText.style.display = "none"
        }, 50)

    }
})


function showFilters(event) {
    resultText.style.opacity = "0"

    setTimeout(() => {
        resultText.style.display = "none"
    }, 50)

    if (checkStatus) {

        dropDownFilter.style.display = "grid"

        setTimeout(() => {
            dropDownFilter.style.opacity = "1"
        }, 50)

        searchResult.style.opacity = "0"
        serchIcon.src = "icons/search-icon.svg"

        setTimeout(() => {
            searchResult.style.display = "none"
        }, 200)

        activeClear = false
        checkStatus = false

    } else {

        dropDownFilter.style.opacity = "0"
        setTimeout(() => {
            dropDownFilter.style.display = "none"
        }, 200)

        checkStatus = true
    }
}

function setFilter(event) {
    resultText.style.opacity = "0"

    setTimeout(() => {
        resultText.style.display = "none"
    }, 50)

    for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].style.fontWeight = 300

        if (event.path[0] == filterItems[i]) {
            filterText.innerHTML = filterItems[i].innerHTML
            filterItems[i].style.fontWeight = 900
        }

    }
    searchInput.focus()
    searchWrap.style.border = "1px solid #7EBDE6"
    showFilters()

}

function search(event) {

    dropDownFilter.style.opacity = "0"

    setTimeout(() => {
        dropDownFilter.style.display = "none"
    }, 200)

    resultText.style.opacity = "0"

    setTimeout(() => {
        resultText.style.display = "none"
    }, 50)

    checkStatus = true

    if (event.target.classList[0] == "search") {
        searchWrap.style.border = "1px solid #7EBDE6"
    }

}


searchInput.addEventListener("input", () => {
    serchIcon.src = "icons/close-icon.svg"
    userInputValue = searchInput.value
    userInputValue.toLocaleLowerCase


    for (let p = 0; p < 3; p++) {

        if (userInputValue.substr(0, 1) == testSearch[p].substr(0, 1)) {
            resultText.style.opacity = "0"

            setTimeout(() => {
                resultText.style.display = "none"
            }, 50)

            for (let j = 0; j < 3; j++) {
                console.log(testSearch[p]);
                helpSearch[j].innerHTML = searchInput.value + `<span class="help-text">${testSearch[p].substr(searchInput.value.length, 15)}</span>`
                searchResult.style.display = "grid"

                setTimeout(() => {
                    searchResult.style.opacity = "1"

                }, 50)

            }
            return
        } else {

            resultText.style.display = "grid"
            setTimeout(() => {
                resultText.style.opacity = "1"

            }, 50)
        }

    }

})

let activeClear = true

searchInput.addEventListener("keyup", (event) => {
    activeClear = true

    if (event.keyCode == 8) {

        resultText.style.opacity = "0"
        setTimeout(() => {
            resultText.style.display = "none"
        }, 50)
    }

    if (searchInput.value == "") {

        resultText.style.opacity = "0"
        setTimeout(() => {
            resultText.style.display = "none"

        }, 50)

        searchResult.style.opacity = "0"
        serchIcon.src = "icons/search-icon.svg"

        setTimeout(() => {
            searchResult.style.display = "none"
        }, 200)

        activeClear = false
    }

})

function clearInput() {
    if (activeClear) {
        searchResult.style.opacity = "0"
        serchIcon.src = "icons/search-icon.svg"
        searchInput.value = ""

        setTimeout(() => {
            searchResult.style.display = "none"
        }, 200)

        resultText.style.opacity = "0"

        setTimeout(() => {
            resultText.style.display = "none"
        }, 50)

        activeClear = false
    }

    if (!activeClear) {
        searchInput.focus()
        searchWrap.style.border = "1px solid #7EBDE6"
    }
}


function enterResult() {
    searchInput.value = helpSearch[0].textContent
    searchResult.style.opacity = "0"
    serchIcon.src = "icons/search-icon.svg"
    setTimeout(() => {

        searchResult.style.display = "none"

    }, 200)

    resultText.style.opacity = "0"
    setTimeout(() => {

        resultText.style.display = "none"

    }, 50)

}