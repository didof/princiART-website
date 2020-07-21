export function changeTheme(dispatch, templateName = 'dawn') {
	dispatch({ type: 'setTheme', payload: templateName });
}
