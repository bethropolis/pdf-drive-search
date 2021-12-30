function PdfSearch(info) {
	var t = info.selectionText;
	t = t.trim();
	t = encodeURIComponent(t);
	chrome.tabs.create({
			url: "https://www.pdfdrive.com/search?q="+t
	});
}

chrome.contextMenus.create({
	title: chrome.i18n.getMessage("title"),
	contexts:["selection"],
	onclick: PdfSearch
});
