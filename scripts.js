    // let hero = document.getElementById('hero')
    // hero.innerText = "This is my new Hero text"

    // let footer = document.querySelector('footer')
    // footer.style.backgroundColor = 'gray'

    function handleNameChange() {
        console.log('Name Changed', event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Submitted Form')
    }
