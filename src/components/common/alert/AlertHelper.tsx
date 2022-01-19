import {Slide, toast} from "react-toastify";

const showSuccessAlert = (message: string) => {
	toast.success(message, {
		position: "bottom-center",
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		transition: Slide,
		theme: "colored"
	});
}

const showWarningAlert = (message: string) => {
	toast.warning(message, {
		position: "top-center",
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		transition: Slide,
		theme: "colored"
	});
}

const showInfoAlert = (message: string) => {
	toast.info(message, {
		position: "top-center",
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		transition: Slide,
		theme: "colored"
	});
}

const showErrorAlert = (message: string) => {
	toast.error(message, {
		position: "top-center",
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		transition: Slide,
		theme: "colored"
	});
}

export {
	showSuccessAlert,
	showWarningAlert,
	showInfoAlert,
	showErrorAlert
}
