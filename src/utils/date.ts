import moment from "moment"

export function formatDate(dateString: string) {
	const date = moment(dateString)
	return date.format("MMMM Do, YYYY")
}
