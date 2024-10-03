function showPopup() {
    let popup = document.createElement('div');
    popup.textContent = 'URL copied to clipboard!';
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.padding = '10px 20px';
    popup.style.background = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 2000);
}