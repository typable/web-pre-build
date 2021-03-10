export function html(func) {
	return function(props) {
		const template = document.createElement('template');
		template.innerHTML = func(props);
		const fragment = template.content.cloneNode(true);
		return fragment.firstElementChild;
	};
}
