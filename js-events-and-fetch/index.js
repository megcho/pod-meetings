// change the header content to say "Images"
 const header = document.querySelector('h1')

 header.textContent = "Images"


// find at least 5 images and display them programmatically in image container
// BONUS: add a description for each image and display in p tag below each image

const images = [
    {
        url: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg", 
        description: "cute puppy"
    }, 
    {
        url: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg",
        description: "another cute puppy"
    }
]

const imageContainer = document.getElementById("image-container")

images.forEach(img => {
    const imgTag = document.createElement('img')
    imgTag.src = img.url
    const pTag = document.createElement('p')
    pTag.innerText = img.description
    imageContainer.append(imgTag, pTag)
})


// Add a form to index.html with inputs for a new image url and a description
// When a user submits, the new picture and description should be displayed on the page



// Add a button to each image to delete the image object from the page


// Make a fetch request to the following url to post a random meme on the page:
// https://api.imgflip.com/get_memes