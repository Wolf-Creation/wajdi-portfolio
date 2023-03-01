
var titleLabel = document.querySelectorAll('#title-label')
var messageLabel = document.querySelector('#message-label')

function labelAnimation(target) {
    for (let index = 0; index < titleLabel.length; index++) {
        if (titleLabel[index] == target) {
           const title = titleLabel[index];
        title.style.bottom = '30px' 
        }
    }
}

function messageAnimation() {
    messageLabel.style.top = '-22px'
}