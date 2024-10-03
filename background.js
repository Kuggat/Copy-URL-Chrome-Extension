chrome.commands.onCommand.addListener(async (command) => {
    if (command === "copy-url") {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab && !tab.url.startsWith('chrome://')) {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        console.log('URL copied to clipboard');
                    }, (err) => {
                        console.error('Failed to copy URL to clipboard:', err);
                    });
                }
            });
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    let popup = document.createElement('div');
                    popup.textContent = 'URL copied to clipboard!';
                    popup.style.position = 'fixed';
                    popup.style.top = '20px';
                    popup.style.right = '20px';
                    popup.style.padding = '10px 20px';
                    popup.style.fontSize = '20px';
                    popup.style.backgroundColor = 'rgba(34,193,195,0.95)';
                    popup.style.background = 'linear-gradient(0deg, rgba(34,193,195,0.95) 0%, rgba(188,203,161,0.95) 100%)';
                    popup.style.color = 'black';
                    popup.style.fontFamily = 'Helvetica';
                    popup.style.fontWeight = 'bold';
                    popup.style.borderRadius = '10px';
                    popup.style.zIndex = '10000000000';
                    document.body.appendChild(popup);
                    setTimeout(() => {
                        popup.remove();
                    }, 2000);
                }
            });
        }
    }
});
