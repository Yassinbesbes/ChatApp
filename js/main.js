let selectedChannel; 

function switchChannel(channel) {
    console.log("Selected channel:", channel.name);
    if (selectedChannel) {
        document.getElementById(selectedChannel.id).classList.remove("selected");
    }
    document.getElementById(channel.id).classList.add("selected");
    selectedChannel = channel;

    showHeader();
}


function showHeader() {
    if (selectedChannel) {
        document.getElementById('channelName').innerHTML = selectedChannel.name;
    }
    const favoriteButton = document.getElementById('favoriteButton');
    if (selectedChannel && favoriteButton){
        const favoriteIconClass=selectedChannel.favorite ? 'favorite' :'favorite_border';
        favoriteButton.innerHTML = `<i class="material-icons">${favoriteIconClass}</i>`;

    }
}

function sendMessage(){
    var messageText = document.getElementById('message-input').value;
    let messageString=`<div class="message outgoing-message">
                        <div class="message-wrapper">
                            <div class="message-content">
                            <p>
                                ${messageText}
                            </p>
                            </div>
                            <i class="material-icons">account_circle</i>
                        </div>
                        <span class="timestamp">11:45</span>
                    </div>`
    document.getElementById('chat-area').innerHTML = messageString;
    document.getElementById('message-input').value = "";

}
