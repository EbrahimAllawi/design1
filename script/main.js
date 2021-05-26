// change style frirst letter for each word in phrase
function changeStyleFirstLetter (id) {
    var descripeServices = document.getElementById(id)
    var contentDescripeServices = ''
    var newHtml = ""
        contentDescripeServices += descripeServices.innerText
    var firstLetter = contentDescripeServices.split(' ')
    console.log(firstLetter)
    firstLetter.forEach(word => {
        console.log(word.substring(1))
        newHtml += `
        <span class="first-letter" >${word[0]}</span>${word.substring(1)}
        `
    });
    console.log(newHtml)
    descripeServices.innerHTML = newHtml
}

changeStyleFirstLetter('websiteDesign')
changeStyleFirstLetter('websiteDev')
